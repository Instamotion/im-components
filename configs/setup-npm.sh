#!/usr/bin/env bash

echo -e "\e[32m  Setting git configs..."
git config --global user.email "it-systems@instamotion.com"
git config --global user.name "it-systems@instamotion"
git config --global push.default simple

echo -e "\e[32m  Setting npm tokens"

npm set //registry.npmjs.org/:_authToken=$NPM_PUB_TOKEN
npm set //registry.yarnpkg.com/:_authToken=$NPM_PUB_TOKEN
yarn config set _authToken $NPM_PUB_TOKEN
yarn config set registry https://registry.npmjs.org/
