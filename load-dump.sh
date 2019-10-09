#!/usr/bin/env bash
set -o allexport
[[ -f variables.env ]] && source variables.env
set +o allexport

cat backup.sql | docker-compose exec  -T db /usr/bin/mysql -u promptchat --password=$DB_PASSWORD promptchat

