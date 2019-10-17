#!/usr/bin/env bash
. ./env.sh

docker-compose exec -T db /usr/bin/mysqldump -u promptchat --password=$DB_PASSWORD promptchat  > backup.sql
