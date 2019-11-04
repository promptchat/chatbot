#!/usr/bin/env bash
. ./env.sh


cat backup.sql | docker-compose exec  -T db /usr/bin/mysql -u promptchat --password=$DB_PASSWORD promptchat

