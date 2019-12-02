FROM nginx:alpine
COPY ./configs/web/index.html /usr/share/nginx/html/index.html
COPY ./storybook-dist /usr/share/nginx/html/storybook
COPY ./configs/nginx /etc/nginx/conf.d
