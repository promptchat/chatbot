#!/usr/bin/env bash
set -o allexport
[[ -f variables.env ]] && source variables.env
set +o allexport

docker-compose exec -T db /usr/bin/mysqldump -u promptchat --password=$DB_PASSWORD promptchat  > backup.sql
