#!/bin/bash

# Define variables
currentlaraveldir=$(pwd)
remote=learning
deploy_dir=/var/www/html/admin

# npm run build to build the Vue.js app
npm run generate
# Copy the routes folder to the remote server
rsync -avz "$currentlaraveldir/dist" "$remote:$deploy_dir"

# SSH into the remote server and run Laravel commands
ssh "$remote" << EOF
	cd $deploy_dir
	systemctl reload nginx
	echo "Deployed successfully"
EOF
