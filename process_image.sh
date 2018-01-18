#!/bin/bash

set -x
set -e

src=$1

# derive destination path from source path
dst=${src//uploads/gallery}

# make sure the destnation directory exists
mkdir -p $(dirname $dst)

# resize and crop image to thumbnail
convert -resize "300x300^" -gravity center -crop 300x300+0+0 +repage "$src" "$dst"
