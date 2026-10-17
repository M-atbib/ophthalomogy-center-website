"""Create stable public brand images from the supplied, untouched PNG files."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "src" / "lib" / "assets"
PUBLIC = ROOT / "static"


def main() -> None:
    with Image.open(ASSETS / "logo-full.png") as source:
        full = source.convert("RGBA")
        full.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
        brand_dir = PUBLIC / "brand"
        brand_dir.mkdir(parents=True, exist_ok=True)
        full.save(brand_dir / "logo-full.png", optimize=True)

    with Image.open(ASSETS / "logo-eye.png") as source:
        eye = source.convert("RGBA")
        alpha_box = eye.getchannel("A").getbbox()
        if alpha_box:
            left, top, right, bottom = alpha_box
            side = max(right - left, bottom - top)
            center_x = (left + right) / 2
            center_y = (top + bottom) / 2
            box = (
                round(center_x - side / 2),
                round(center_y - side / 2),
                round(center_x + side / 2),
                round(center_y + side / 2),
            )
            eye = eye.crop(box)

        for size, name in [
            (64, "favicon-64.png"),
            (180, "apple-touch-icon.png"),
        ]:
            eye.resize((size, size), Image.Resampling.LANCZOS).save(
                PUBLIC / name, optimize=True
            )

        eye.save(
            PUBLIC / "favicon.ico",
            format="ICO",
            sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
        )


if __name__ == "__main__":
    main()
