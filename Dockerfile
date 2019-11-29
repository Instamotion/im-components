FROM node:lts-alpine as base
WORKDIR /app

RUN yarn global add bolt --prefix /app/.yarn-global
ENV PATH="/app/.yarn-global/bin/:$PATH"

COPY package.json .
COPY yarn.lock .
COPY . .
RUN bolt
RUN bolt build

# Generate changelog and bumpe versions
RUN bolt bump:version

# Publish the components
RUN bolt publish

# Server static
FROM nginx:alpine
COPY --from=0 /app/configs/web/index.html /usr/share/nginx/html/index.html
COPY --from=0 /app/storybook-dist /usr/share/nginx/html/storybook
COPY --from=0 /app/configs/nginx /etc/nginx/conf.d
