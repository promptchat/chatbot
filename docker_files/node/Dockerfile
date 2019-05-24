FROM node:8.15-alpine
RUN apk add bash

RUN yarn cache clean
RUN yarn install

EXPOSE 6001

#CMD sleep 360
CMD /sources/node_modules/.bin/laravel-echo-server start --force