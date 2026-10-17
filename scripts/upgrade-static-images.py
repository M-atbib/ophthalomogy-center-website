"""Use the shared image component for local static images in Svelte pages.

Run after optimize-images.py and rewrite-image-imports.py. Unknown image tags are
left alone and reported. No source image is removed.
"""

from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ASSET_INDEX = ROOT / "src/lib/assets/index.ts"
IMAGE_ROOT = ROOT / "src/lib/assets/images"
TAG = re.compile(r"<img\b(?P<attributes>[^>]*?)/>", re.DOTALL)
SOURCE = re.compile(r"\bsrc=\{(?P<name>[^\W\d]\w*)\}")
EXPORT = re.compile(
    r"export \{ default as (?P<name>\w+) \} from '\$lib/assets/images/(?P<stem>[^']+)\.webp';"
)
DIRECT = re.compile(
    r"import (?P<name>\w+) from '\$lib/assets/images/(?P<stem>[^']+)\.webp';"
)
ATTRIBUTE = re.compile(r"([A-Za-z][\w-]*)=(?:\{[^}]*\}|\"[^\"]*\")")
ALLOWED = {"src", "alt", "class", "loading", "fetchpriority", "decoding", "sizes", "title", "id"}


def main() -> None:
    exports = {match["name"]: match["stem"] for match in EXPORT.finditer(ASSET_INDEX.read_text(encoding="utf-8"))}
    changed_files = 0
    changed_tags = 0
    skipped: list[str] = []

    for path in sorted((ROOT / "src").rglob("*.svelte")):
        original = path.read_text(encoding="utf-8")
        local = exports | {match["name"]: match["stem"] for match in DIRECT.finditer(original)}
        local_count = 0

        def replace(match: re.Match[str]) -> str:
            nonlocal local_count
            attributes = match["attributes"]
            source = SOURCE.search(attributes)
            if not source or source["name"] not in local:
                return match.group(0)
            stem = local[source["name"]]
            if not (IMAGE_ROOT / f"{stem}.webp").exists():
                raise FileNotFoundError(f"Missing WebP: {stem} in {path}")
            names = {attribute.group(1) for attribute in ATTRIBUTE.finditer(attributes)}
            unknown = names - ALLOWED
            if unknown or "alt" not in names:
                skipped.append(f"{path.relative_to(ROOT)}: {source['name']} ({', '.join(sorted(unknown)) or 'missing alt'})")
                return match.group(0)

            indent = re.search(r"\n([ \t]+)src=", attributes)
            whitespace = indent.group(1) if indent else " "
            upgraded = attributes.replace(source.group(0), f'{source.group(0)}\n{whitespace}imageKey="{stem}"', 1)
            if "sizes" not in names and (IMAGE_ROOT / f"{stem}-w480.webp").exists():
                upgraded += f'\n{whitespace}sizes="(max-width: 640px) 100vw, 50vw"'
            if "-illu" in stem:
                upgraded = upgraded.replace("object-cover", "object-contain")
            local_count += 1
            return f"<ResponsiveImage{upgraded}/>"

        updated = TAG.sub(replace, original)
        if local_count:
            if "import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';" not in updated:
                updated = updated.replace(
                    "<script>",
                    "<script>\n\timport ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';",
                    1,
                ).replace(
                    '<script lang="ts">',
                    '<script lang="ts">\n\timport ResponsiveImage from \'$lib/components/general/ResponsiveImage.svelte\';',
                    1,
                )
            path.write_text(updated, encoding="utf-8", newline="")
            changed_files += 1
            changed_tags += local_count

    print(f"Upgraded {changed_tags} images in {changed_files} files")
    for item in skipped:
        print(f"Skipped {item}")


if __name__ == "__main__":
    main()
