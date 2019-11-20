#!/usr/bin/env bash
./down.sh
git pull origin master
cmp --silent ./build ./currentbuild  ||  ./build.sh
cp  ./build ./currentbuild
./run.sh
