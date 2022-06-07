<?php

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new Laravel application instance
| which serves as the "glue" for all the components of Laravel, and is
| the IoC container for the system binding all of the various parts.
|
*/

use App\Repositories\Interfaces\LanguagesRepositoryInterface;

defined('PROMPTCHAT_COMPANIES_ENABLED')  || define('PROMPTCHAT_COMPANIES_ENABLED', true);
defined('PROMPTCHAT_WHITE_LABEL_ENABLED')  || define('PROMPTCHAT_WHITE_LABEL_ENABLED', true);

defined('PROMPTCHAT_PLAN_NAME') || define('PROMPTCHAT_PLAN_NAME', 'Unknown plan name');
defined('PROMPTCHAT_PLAN_VALID_TILL') || define('PROMPTCHAT_PLAN_VALID_TILL', null);

$app = new Illuminate\Foundation\Application(
    $_ENV['APP_BASE_PATH'] ?? dirname(__DIR__)
);

/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed. The kernels serve the
| incoming requests to this application from both the web and CLI.
|
*/

$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    App\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/

if (!function_exists('t')) {
    function t(string $translate, array $variables = []) {
        return app()
            ->make(\App\Repositories\Interfaces\TranslatesRepositoryInterface::class)
            ->getTranslate($translate, app()->getLocale() ?: app(LanguagesRepositoryInterface::class)->getDefaultLanguage(), $variables);
    }
}
return $app;
