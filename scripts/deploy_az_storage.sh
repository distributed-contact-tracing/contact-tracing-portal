#!/usr/bin/env bash
echo "Running deploy_az_storage.sh..."
echo $TRAVIS_BUILD_DIR
cd $TRAVIS_BUILD_DIR
ls
az storage blob upload-batch -d \$web -s $TRAVIS_BUILD_DIR/out
echo "Script deploy_az_storage done."