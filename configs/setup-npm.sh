#!/usr/bin/env bash

if [ "$GIT_SSH_KEY" != "" ]; then
  echo "Detected SSH key for git. Adding SSH config" >&1
  echo "" >&1

  if [ ! -d ~/.ssh ]; then
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
  fi

  echo $GIT_SSH_KEY | base64 -d > ~/.ssh/deploy_key
  chmod 600 ~/.ssh/deploy_key
  echo -e "Host github.com\n"\
          " IdentityFile ~/.ssh/deploy_key\n"\
          " IdentitiesOnly yes\n"\
          " UserKnownHostsFile=/dev/null\n"\
          " StrictHostKeyChecking no"\
          > ~/.ssh/config
fi

# echo -e "\e[32m  Setting git configs..."
# git config --global user.email "it-systems@instamotion.com"
# git config --global user.name "im-it-systems"
# git config --global push.default simple

# echo -e "\e[32m  Setting git remote..."
# git remote add github https://$GH_USER:$GH_PASS@github.com/Instamotion/im-components.git

echo -e "\e[32m  Setting npm tokens"
npm set //registry.npmjs.org/:_authToken=$NPM_PUB_TOKEN
npm set //registry.yarnpkg.com/:_authToken=$NPM_PUB_TOKEN
yarn config set _authToken $NPM_PUB_TOKEN
yarn config set registry https://registry.npmjs.org/
