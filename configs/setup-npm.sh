#!/usr/bin/env bash

echo -e "\e[32m  Setting git configs..."

# git config --global user.email $GIT_EMAIL
# git config --global user.name $GIT_USERNAME
# git config --global push.default simple

echo -e "\e[32m  Setting git remote..."

# git remote add github https://im-it-systems:$GH_TOKEN@github.com/Instamotion/im-components.git
git remote add github git@github.com:Instamotion/im-components.git

echo -e "\e[32m  Setting npm tokens"

npm set //registry.npmjs.org/:_authToken=$NPM_PUB_TOKEN
npm set //registry.yarnpkg.com/:_authToken=$NPM_PUB_TOKEN
yarn config set _authToken $NPM_PUB_TOKEN
yarn config set registry https://registry.npmjs.org/
