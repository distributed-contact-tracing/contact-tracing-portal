#!/usr/bin/env bash
echo "Running deploy_az_storage.sh..."
az storage blob upload-batch -d \$web -s $TRAVIS_BUILD_DIR/out
echo "Script deploy_az_storage done."