#!/usr/bin/env bash

echo -e "\e[32m  Setting git configs..."

# git config --global user.email $GIT_EMAIL
# git config --global user.name $GIT_USERNAME
# git config --global push.default simple

if [ "$GIT_SSH_KEY_PUBLISH" != "" ]; then
  echo "Detected SSH key for git. Adding SSH config" >&1
  echo "" >&1

  # Ensure we have the ssh folder
  if [ ! -d ~/.ssh ]; then
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
  fi

  # Load the private key into a file.
  echo $GIT_SSH_KEY_PUBLISH | base64 --decode > ~/.ssh/deploy_key

  # Change the permissions on the file to
  # be read-write for this user.
  chmod 600 ~/.ssh/deploy_key

  # Setup the ssh config file.
  # Switch out the hostname for different hosts.
  echo -e "Host github.com\n"\
          " IdentityFile ~/.ssh/deploy_key\n"\
          " IdentitiesOnly yes\n"\
          " UserKnownHostsFile=/dev/null\n"\
          " StrictHostKeyChecking no"\
          > ~/.ssh/config
fi

echo -e "\e[32m  Setting git remote..."

# git remote add github https://im-it-systems:$GH_TOKEN@github.com/Instamotion/im-components.git
git remote add github git@github.com:Instamotion/im-components.git

echo -e "\e[32m  Setting npm tokens"

npm set //registry.npmjs.org/:_authToken=$NPM_PUB_TOKEN
npm set //registry.yarnpkg.com/:_authToken=$NPM_PUB_TOKEN
yarn config set _authToken $NPM_PUB_TOKEN
yarn config set registry https://registry.npmjs.org/
