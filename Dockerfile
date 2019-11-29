FROM node:lts-alpine as base

ARG NPM_PUB_TOKEN

RUN echo "Setting up the npm to be able to publish"

RUN npm set //registry.npmjs.org/:_authToken=$NPM_PUB_TOKEN
RUN npm set //registry.yarnpkg.com/:_authToken=$NPM_PUB_TOKEN
RUN yarn config set _authToken $NPM_PUB_TOKEN
RUN yarn config set registry https://registry.npmjs.org/

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY . .

RUN echo "Install and check"

RUN yarn
RUN yarn bootstrap
RUN yarn build
RUN yarn typecheck
RUN yarn test

RUN echo "Publish the components"

# Generate changelog and bumpe versions
RUN yarn changeset version

# Publish the components
RUN yarn changeset publish

# Server static
FROM nginx:alpine
COPY --from=0 /app/configs/web/index.html /usr/share/nginx/html/index.html
COPY --from=0 /app/storybook-dist /usr/share/nginx/html/storybook
COPY --from=0 /app/configs/nginx /etc/nginx/conf.d
