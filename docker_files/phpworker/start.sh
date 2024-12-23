#!/usr/bin/env bash

role=${CONTAINER_ROLE:-php}

if [ "$role" = "composer" ]; then
  curl -s https://getcomposer.org/installer | php
  php composer.phar install -q
fi

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
    php artisan cache:clear

    php artisan chat:end
    php artisan up
    php /sources/artisan  storage:link

elif [ "$role" = "simple-queue" ]; then
    sleep 60
    php /sources/artisan  queue:work --verbose --tries=3 --timeout=1800
elif [ "$role" = "instant-messages-queue" ]; then
    sleep 60
    php /sources/artisan  queue:work --queue=instant-messages --verbose --tries=3 --timeout=1800
elif [ "$role" = "campaign-messages" ]; then
    sleep 60
    php /sources/artisan  queue:work --queue=campaign-messages --verbose --tries=3 --timeout=1800
elif [ "$role" = "scheduler" ]; then
    while [ true ]
    do
      php /sources/artisan schedule:run --verbose --no-interaction &
      sleep 60
    done
fi
