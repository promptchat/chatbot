#!/usr/bin/env bash
set -o allexport
[[ -f variables.env ]] && source variables.env
set +o allexport

docker-compose up -d