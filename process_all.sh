#!/bin/sh

TMP_IDX=$(mktemp --suffix=.idx)

find uploads -type f > $TMP_IDX

# exit early if uptodate
cmp $TMP_IDX uploads.idx >/dev/null && exit 0

diff --old-line-format="" \
     --unchanged-line-format="" \
     uploads.idx $TMP_IDX | \
    xargs -n 1 -i{} ./process_image.sh '{}'

mv $TMP_IDX uploads.idx
