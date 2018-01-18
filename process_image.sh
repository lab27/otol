#!/bin/bash

set -x
set -e

src=$1

# derive destination path from source path
thumb_dst=${src//uploads/gallery/thumbs}
full_dst=${src//uploads/gallery/full}

# make sure the destnation directories exists
mkdir -p "$(dirname $thumb_dst)"
mkdir -p "$(dirname $full_dst)"

# resize and crop image to thumbnail
convert -resize "300x300^" -gravity center -crop 300x300+0+0 +repage "$src" "$thumb_dst"

# resize and to max
convert -resize "800x800>" "$src" "$full_dst"
