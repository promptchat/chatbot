#!/usr/bin/env bash
. ./env.sh

./stop-updater.sh
docker-compose down -v
