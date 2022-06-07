#!/usr/bin/env bash
. ./env.sh

until [ -f ./sources/storage/app/update ]
do
    sleep 60
done

rm ./sources/storage/app/update
date >> ./sources/storage/app/updater.log
./update.sh