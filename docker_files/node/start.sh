#!/usr/bin/env bash

yarn cache clean --force

yarn install
if [ -f /sources/laravel-echo-server.lock ]; then
    ./node_modules/.bin/laravel-echo-server stop;
fi

./node_modules/.bin/laravel-echo-server start --force
chown www-data:www-data /sources/node_modules -R
chown www-data:www-data /sources/laravel-echo-server.lock