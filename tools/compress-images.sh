#!/bin/bash
# Compress images in /images/ that exceed the size threshold.
# - Resizes to a maximum width
# - Converts PNG to JPG (better compression for photos)
# - Updates language-page.html references when filenames change
#
# Runs automatically via the pre-commit hook, but can also be run manually:
#   ./tools/compress-images.sh

set -e

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMAGES_DIR="$REPO_ROOT/images"
HTML_FILE="$REPO_ROOT/language-page.html"
THRESHOLD_BYTES=$((500 * 1024))   # 500 KB
MAX_WIDTH=1200
JPEG_QUALITY=82

[ -d "$IMAGES_DIR" ] || exit 0

shopt -s nullglob nocaseglob
images=("$IMAGES_DIR"/*.{png,jpg,jpeg})
shopt -u nocaseglob

[ ${#images[@]} -eq 0 ] && exit 0

did_anything=0

for file in "${images[@]}"; do
    size=$(wc -c < "$file")
    [ "$size" -le $THRESHOLD_BYTES ] && continue

    basename=$(basename "$file")
    ext_lower=$(echo "${basename##*.}" | tr '[:upper:]' '[:lower:]')
    name="${basename%.*}"

    if [ "$ext_lower" = "png" ]; then
        # PNG -> JPG (better compression for photographic content)
        new_path="$IMAGES_DIR/${name}.jpg"
        printf "  %s (%dKB) -> %s.jpg" "$basename" "$((size/1024))" "$name"
        sips -s format jpeg -s formatOptions $JPEG_QUALITY -Z $MAX_WIDTH "$file" --out "$new_path" > /dev/null
        rm "$file"
        # Update HTML references if the file is referenced there
        if [ -f "$HTML_FILE" ] && grep -q "$basename" "$HTML_FILE"; then
            sed -i '' "s|${basename}|${name}.jpg|g" "$HTML_FILE"
        fi
        new_size=$(wc -c < "$new_path")
        printf " (%dKB)\n" "$((new_size/1024))"
        did_anything=1
    else
        # JPG/JPEG -> recompress in place
        printf "  %s (%dKB) - recompressing" "$basename" "$((size/1024))"
        tmp=$(mktemp -t compress.XXXXXX).jpg
        sips -s format jpeg -s formatOptions $JPEG_QUALITY -Z $MAX_WIDTH "$file" --out "$tmp" > /dev/null
        mv "$tmp" "$file"
        new_size=$(wc -c < "$file")
        printf " (%dKB)\n" "$((new_size/1024))"
        did_anything=1
    fi
done

if [ $did_anything -eq 0 ]; then
    echo "  All images are within the ${THRESHOLD_BYTES}-byte threshold."
fi
