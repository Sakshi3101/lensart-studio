#!/usr/bin/env python3
"""
LensArt Studio - build script
Assembles the module partials in html/ into a single index.html
that links the css/ and js/ files.

Usage:   python build.py
Adding a new module: create html/<name>.html, css/<name>.css, js/<name>.js
and add the name to the matching list below.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent

# Order matters (top-to-bottom of the page / cascade order).
HTML_MODULES = [
    "navbar", "hero", "stats", "portfolio", "packages", "wedding", "process",
    "testimonials", "about", "contact", "footer",
    "login-modal", "register-modal", "lightbox", "toast",
]
CSS_FILES = [
    "base", "nav", "hero", "stats", "portfolio", "packages", "wedding", "process",
    "testimonials", "about", "contact", "footer", "modal", "toast", "lightbox",
    "responsive",  # keep last so media queries win
]
JS_FILES = [  # toast first: other scripts call showToast()
    "toast", "hero-slider", "modal", "auth", "contact-form", "lightbox",
    "gallery-filter", "scroll-reveal", "skill-bars", "counters", "nav",
]

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LensArt Studio — Premium Photography</title>
<link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Bebas+Neue&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
{css}
</head>
<body>

"""

TAIL = """
{js}
</body>
</html>
"""


def read(folder, name, ext):
    path = ROOT / folder / f"{name}.{ext}"
    if not path.exists():
        raise SystemExit(f"Missing file: {path}")
    return path.read_text(encoding="utf-8").rstrip() + "\n"


def main():
    css = "\n".join(f'<link rel="stylesheet" href="css/{n}.css">' for n in CSS_FILES)
    js = "\n".join(f'<script src="js/{n}.js"></script>' for n in JS_FILES)
    body = "\n".join(read("html", n, "html") for n in HTML_MODULES)
    out = HEAD.format(css=css) + body + TAIL.format(js=js)
    (ROOT / "index.html").write_text(out, encoding="utf-8")
    print(f"index.html built: {len(HTML_MODULES)} html modules, "
          f"{len(CSS_FILES)} css files, {len(JS_FILES)} js files")


if __name__ == "__main__":
    main()
