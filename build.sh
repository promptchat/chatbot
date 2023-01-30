#!/usr/bin/env bash
. ./env.sh

if  [[ -z "${DB_HOST}" ]] ; then
   echo "Internal mysql";
   docker-compose build
else
  echo "External mysql";
  docker-compose -f docker-compose.common-mysql.yml build
fi