"""Point local Svelte/TS image imports to verified generated WebP files.

Run after optimize-images.py. The original images stay on disk.
"""

from __future__ import annotations

import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src"
IMAGES = ROOT / "src/lib/assets/images"
IMPORT = re.compile(r"\$lib/assets/images/([^'\"]+?)\.(png|jpe?g)", re.IGNORECASE)


def slug(stem: str) -> str:
    plain = unicodedata.normalize("NFKD", stem).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", plain.lower()).strip("-")


def main() -> None:
    changes: dict[Path, str] = {}
    replacements = 0

    for path in sorted(SOURCE.rglob("*")):
        if path.suffix not in {".svelte", ".ts"} or path.name == "image-data.ts":
            continue
        original = path.read_text(encoding="utf-8")

        def replace(match: re.Match[str]) -> str:
            nonlocal replacements
            name = slug(match.group(1))
            output = IMAGES / f"{name}.webp"
            if not output.exists():
                raise FileNotFoundError(f"Generated image missing for {path}: {output}")
            replacements += 1
            return f"$lib/assets/images/{name}.webp"

        updated = IMPORT.sub(replace, original)
        if updated != original:
            changes[path] = updated

    for path, content in changes.items():
        path.write_text(content, encoding="utf-8", newline="")
    print(f"Updated {replacements} image references in {len(changes)} files")


if __name__ == "__main__":
    main()
