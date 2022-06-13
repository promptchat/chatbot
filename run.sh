#!/usr/bin/env bash
. ./env.sh

cp  ./build ./currentbuild
docker-compose up -d

./updater.sh &> /dev/null & echo $! > ./updater.pid