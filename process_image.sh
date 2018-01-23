#!/bin/bash

set -x
set -e

src=$1

# derive destination path from source path
thumb_dst=${src//uploads/gallery/thumbs}
full_dst=${src//uploads/gallery/full}

# make sure the destnation directories exists
thumb_dir=$(dirname "$thumb_dst")
full_dir=$(dirname "$full_dst")
mkdir -p "$thumb_dir"
mkdir -p "$full_dir"

# resize and crop image to thumbnail
convert -resize "300x300^" -gravity center -crop 300x300+0+0 +repage "$src" "$thumb_dst"

# resize and to max
convert -resize "800x800>" "$src" "$full_dst"
