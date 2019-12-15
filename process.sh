#!/bin/sh

set -x
set -e

echo `pwd`/otol

if [ -d otol ]; then
    cd otol
    git pull
else
    git clone git@github.com:b2bw/otol.git
    cd otol
fi

pwd

./process_all.sh

# Save some bandwidth by using the gallery version of the images.
sed -i 's|/uploads/|/gallery/full/|' ./_data/*.yml
sed -i 's|/uploads/|/gallery/full/|' ./*/*.markdown
sed -i 's|/uploads/|/gallery/full/|' ./*/*.md

# fix order hack!
sed -i 's/^order: "\([0-9]\+\)"/order: \1/' **/*.markdown
sed -i 's/^order: "\([0-9]\+\)"/order: \1/' **/*.md

git add .
git commit -m 'Automatic update via `process.sh` :sunglasses:'
git push || git pull && git push

exit 0
