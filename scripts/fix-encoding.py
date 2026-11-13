from pathlib import Path

root = Path(__file__).resolve().parents[1] / "src"
files_updated = 0

for path in root.rglob("*"):
    if not path.is_file():
        continue
    if path.suffix not in {".ts", ".tsx", ".css", ".js", ".jsx", ".md"}:
        continue
    try:
        text = path.read_text(encoding="utf-8")
    except OSError as exc:
        print(f"skip {path}: {exc}")
        continue

    # Restore common punctuation that was corrupted to U+FFFD
    new = text.replace("\ufffd", "\u2014")

    if new != text:
        path.write_text(new, encoding="utf-8", newline="\n")
        files_updated += 1
        print(f"fixed {path.relative_to(root.parent)}")

print(f"files_updated={files_updated}")
