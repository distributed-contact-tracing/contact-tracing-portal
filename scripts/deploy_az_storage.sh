#!/bin/bash
echo "Running deploy_az_storage.sh..."
az storage blob upload-batch -d \$web -s ../out
echo "Script deploy_az_storage done."