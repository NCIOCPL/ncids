#!/bin/bash
set -e

VERSION=$(node -p "require('./package.json').version")
OUTPUT_ZIP="ncids-v$VERSION.zip"
TMP_DIR="./cdn/ncids-v$VERSION"

# Cleaning up previous build
rm -rf "$TMP_DIR" "$OUTPUT_ZIP"
mkdir "$TMP_DIR"

# Copying ncids-css and renaming the regular version
cp -r packages/ncids-css/dist "$TMP_DIR/ncids-css"

# Copying ncids-js
cp -r packages/ncids-js/dist "$TMP_DIR/ncids-js"

# Copying images
cp -r packages/ncids-css/uswds-img "$TMP_DIR/uswds-img"

## Creating zip archive...
pushd "$TMP_DIR"
zip -r "../$OUTPUT_ZIP" .
popd

# Clean up after ourselves so we only have the zip
rm -rf "$TMP_DIR"
