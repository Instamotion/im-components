FROM node:lts-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Installing dependencies
RUN cp .env.example .env && \
    apk update && \
    apk upgrade --no-cache && \
    apk add --no-cache openssl ca-certificates bash && \
    wget -O /bin/aws-env https://github.com/Droplr/aws-env/raw/master/bin/aws-env-linux-amd64 && \
    chmod +x /bin/aws-env && \
    npm i && \
    npm run build

EXPOSE 3000

# Running the app
CMD [ "sh", "./run.sh" ]
