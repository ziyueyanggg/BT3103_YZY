#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# [TODO] : Replace with your username and Repository name
git push -f git@github.com:YangYuesong0323/BT3103_week11.git master:gh-pages

cd -