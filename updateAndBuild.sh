#!/usr/bin/env bash
./down.sh
git pull origin master
./build.sh
./run.sh