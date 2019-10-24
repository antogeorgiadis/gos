FROM node:10.16.3-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --ignore-scripts

EXPOSE 3000
CMD yarn dev