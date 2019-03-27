#!/usr/bin/env bash
set -o allexport
[[ -f variables.env ]] && source variables.env
set +o allexport

cat backup.sql | docker exec -i ${APP_BASE_SLUG}_db_1 /usr/bin/mysql -u promptchat --password=$DB_PASSWORD promptchat

