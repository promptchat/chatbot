#!/usr/bin/env bash
. ./env.sh

if  [[ -z "${DB_HOST}" ]] ; then
   echo "Internal mysql";
   docker-compose exec -T db /usr/bin/mysqldump -u promptchat --password=$DB_PASSWORD promptchat  > backup.sql
else
  echo "External mysql";
  echo "Can not create dump with external mysql. Ask system administrator to do it."
fi

