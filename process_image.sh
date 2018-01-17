#!/bin/bash

set -x
set -e

src=$1

# derive destination path from source path
dst=${src//uploads/gallery}

# make sure the destnation directory exists
mkdir -p $(dirname $dst)

# scale
convert -geometry 300x200 "$src" "$dst"
