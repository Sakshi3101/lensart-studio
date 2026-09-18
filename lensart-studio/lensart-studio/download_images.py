#!/usr/bin/env python3
"""
Replaces the placeholder images in assets/images/ with the original
Unsplash photos listed in assets/images/manifest.json.

Usage:   python download_images.py           (download all)
         python download_images.py --skip    (skip files already downloaded once)
Needs an internet connection. No extra packages required.
"""
import json
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MANIFEST = ROOT / "assets" / "images" / "manifest.json"
MARKER = ROOT / "assets" / "images" / ".downloaded"   # remembers which files are real
UA = {"User-Agent": "Mozilla/5.0 (LensArt image downloader)"}


def main():
    skip = "--skip" in sys.argv
    done = set(MARKER.read_text().split("\n")) if MARKER.exists() else set()
    items = json.loads(MANIFEST.read_text(encoding="utf-8"))
    ok, failed = 0, []
    for item in items:
        rel = item["file"]
        if skip and rel in done:
            continue
        try:
            req = urllib.request.Request(item["url"], headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                data = r.read()
            (ROOT / rel).write_bytes(data)
            done.add(rel)
            ok += 1
            print(f"  ok   {rel}")
        except Exception as e:  # keep going, report at the end
            failed.append(rel)
            print(f"  FAIL {rel}  ({e})")
    MARKER.write_text("\n".join(sorted(done)))
    print(f"\nDownloaded {ok}, failed {len(failed)}.")
    if failed:
        print("Failed files keep their placeholder. Check your connection and run again.")


if __name__ == "__main__":
    main()
