#!/bin/sh

set -x
set -e

TMP_IDX=$(mktemp --suffix=.idx)

find uploads -type f > $TMP_IDX

# exit early if uptodate
cmp $TMP_IDX uploads.idx >/dev/null && exit 0

diff --old-line-format="" \
     --unchanged-line-format="" \
     uploads.idx $TMP_IDX | \
    xargs -n 1 -i{} ./process_image.sh '{}'

mv $TMP_IDX uploads.idx

# update indices
find gallery/full -type f -printf "%T+\t%p\n" | sort -r | \
    sed 's/^.\+\tgallery\/full/- path: /' > _data/gallery.yml

ruby annotate.rb _data/gallery.yml gallery/full
