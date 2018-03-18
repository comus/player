FROM node:8.9-alpine

RUN apk add --update \
    git \
    tini

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install

COPY . /usr/src/app

ENV HOST=0.0.0.0 \
    PORT=4000 \
    NODE_ENV=production
RUN yarn build

EXPOSE 4000

USER node
CMD ["/sbin/tini", "--", "node", "node_modules/nuxt/bin/nuxt-start"]
