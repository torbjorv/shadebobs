#!/bin/sh
set -e

TOKEN=$1

# All git output below is sent to dev/null to avoid exposing anything sensitive in build logs

echo checkout gh-pages
mkdir gh-pages
cd gh-pages

git config --global user.name "CircleCI"  > /dev/null 2>&1
git init  > /dev/null 2>&1
git remote add --fetch origin https://$TOKEN@github.com/torbjorv/shadebobs.git > /dev/null 2>&1

git checkout gh-pages  > /dev/null 2>&1
git rm -rf .   > /dev/null 2>&1

# Copy angular app in here
echo copy app
cp -a "../dist/." .
cp index.html 404.html

echo add files
git add -A > /dev/null 2>&1

echo commit and push
# need 'ci skip' to ignore this branch in CircleCI
git commit --allow-empty -m "Deploy to GitHub pages [ci skip]"  > /dev/null 2>&1
git push --force --quiet origin gh-pages > /dev/null 2>&1

echo cleanup
cd ..
rm -rf gh-pages