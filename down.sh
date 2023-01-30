#!/usr/bin/env bash
. ./env.sh

./stop-updater.sh

if  [[ -z "${DB_HOST}" ]] ; then
   echo "Internal mysql";
   docker-compose down
else
  echo "External mysql";
  docker-compose -f docker-compose.common-mysql.yml down
fi
