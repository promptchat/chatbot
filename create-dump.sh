#!/usr/bin/env bash
set -o allexport
[[ -f variables.env ]] && source variables.env
set +o allexport

docker exec ${APP_BASE_SLUG}_db_1 /usr/bin/mysqldump -u promptchat --password=$DB_PASSWORD promptchat  > backup.sql