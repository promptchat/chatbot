#!/usr/bin/env bash
. ./env.sh

cp  ./build ./currentbuild

if  [[ -z "${DB_HOST}" ]] ; then
   echo "Internal mysql";
   docker-compose up -d
else
  echo "External mysql";
  docker-compose -f docker-compose.common-mysql.yml up -d
fi

./updater.sh &> /dev/null & echo $! > ./updater.pid