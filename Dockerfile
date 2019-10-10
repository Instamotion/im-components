FROM node:lts-alpine as base
WORKDIR /app

RUN yarn global add bolt --prefix /app/.yarn-global
ENV PATH="/app/.yarn-global/bin/:$PATH"

COPY package.json .
COPY yarn.lock .
RUN bolt
COPY . .
RUN bolt build


FROM nginx:alpine
COPY --from=0 /app/storybook-dist /usr/share/nginx/html
EXPOSE 80
