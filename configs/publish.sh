#!/usr/bin/env bash

echo -e "\e[32m  Bumping versions..."

yarn changeset version

echo -e "\e[32m  Commiting changes..."

(git add .) || true
(git commit -m "[Jenkins]: New release" -m "Build: $BUILD_URL") || true
(git push github master) || true

echo -e "\e[32m  Publish components..."

./node_modules/.bin/bolt publish

echo -e "\e[32m  Pushing tags..."

git push --tags github
