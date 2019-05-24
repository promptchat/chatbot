#!/usr/bin/env bash

yarn cache clean
yarn install

./node_modules/.bin/laravel-echo-server start --force