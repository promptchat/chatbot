#!/usr/bin/env bash

set -e

role=${CONTAINER_ROLE:-php}
env=${APP_ENV:-production}

until [ -f /sources/vendor/autoload.php ]
do
    sleep 60
done


if  [ "$role" = "php" ]; then
    exit 1

elif  [ "$role" = "migrator" ]; then
    php artisan down
    n=0
    until [ $n -ge 20 ]
    do
       php /sources/artisan migrate  --force && break
       n=$[$n+1]
       echo "Try to migrate ..."
       sleep 60
    done
    php artisan up
    php /sources/artisan  storage:link

elif [ "$role" = "queue" ]; then

    php /sources/artisan  queue:work --verbose --tries=3 --timeout=90

elif [ "$role" = "scheduler" ]; then

    while [ true ]
    do
      php /sources/artisan schedule:run --verbose --no-interaction &
      sleep 60
    done
fi
