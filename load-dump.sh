#!/usr/bin/env bash
source variables.env
#source license.txt
#export UID

cat backup.sql | docker-compose exec  -T db /usr/bin/mysql -u promptchat --password=$DB_PASSWORD promptchat

