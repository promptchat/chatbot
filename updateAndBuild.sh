#!/usr/bin/env bash
./env.sh
./down.sh
git pull origin master
./build.sh
./run.sh
