#!/usr/bin/env bash
. ./env.sh

if  [[ -z "${DB_HOST}" ]] ; then
   echo "Internal mysql";
   cat backup.sql | docker-compose exec  -T db /usr/bin/mysql -u promptchat --password=$DB_PASSWORD promptchat
else
  echo "External mysql";
  echo "Can not load dump to external mysql. Ask system administrator to do it."
fi


