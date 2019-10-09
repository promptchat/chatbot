#!/usr/bin/env bash

yarn cache clean
yarn install

if [ -f /sources/laravel-echo-server.lock ]; then

    ./node_modules/.bin/laravel-echo-server stop;
fi

./node_modules/.bin/laravel-echo-server start --force