## Requirements
- php7.4
- node v16.20.0
- mysql - timezone must be 0

## Installation
- `php artisan key:generate`
- Add to cron `* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1`
- Run `laravel-echo-server init`

## Run dev
- `composer install`
- `yarn install`
- `php artisan migrate`
- `php artisan que:listen`
- `php artisan que:listen --queue=instant-messages`
- `yarn hot`
- `yarn laravel-echo-server start`
- `yarn widget`
- `./schedule.sh`
- `node node-executor.js`

## Commands dev
- `yarn lint`
- `composer pstan`

## Commands
- `php artisan instant-messages:send` must run every minute
- `php artisan chat:monitor` must run every 30 sec
- `php artisan livechat:answer` shouldn't run directly. This command will be run by the scheduler every minute.
- `php artisan project:crypt {path?}`
- `php artisan ap:gen` generate api documentation.


