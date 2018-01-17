#!/bin/sh

set -x
set -e

if [ -d otol ]; then
    cd otol
    git pull
else
    git clone git@github.com:b2bw/otol.git
    cd otol
fi

pwd

./process_all.sh

git add .
git commit -m "Automatic update via process_all.sh"
git push || git pull && git push

exit 0
