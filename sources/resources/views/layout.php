<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <link rel="icon" href="<?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getFavicon()); ?>">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link href="<?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getFontsLink()); ?>" rel="stylesheet">
    <title><?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getTitle()); ?></title>
    <meta name="description" content="<?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getDescription()); ?>">
    <script>
        window.HOME_ROUTE = "<?php echo e(\App\Providers\RouteServiceProvider::HOME); ?>";
        window.socketUrl = "<?php echo e(env('SOCKET_URL')); ?>";
        window.translatesUrl = "/translates/\{\{lng\}\}";
        window.availableLanguagesListUrl = "/translates/languages-list";
        window.initialState = {
            user: <?php echo json_encode(Auth::user() ? Auth::user()->loadMissing(['role', 'company', 'bgProcesses']) : null); ?>,
        }
        window.csrf = "<?php echo csrf_token(); ?>"
        window.locale = "<?php echo app()->getLocale(); ?>";
        window.logoUrl = "<?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getLogo(); ?>";
        window.siteTitle = "<?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getTitle(); ?>";
        window.siteFavicon = "<?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getFavicon(); ?>";
        window.siteFonts = <?php echo json_encode(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getFonts()); ?>;
        window.offlineAfterSecondsInactivity = <?php echo e(config("app.offlineAfterSecondsInactivity")); ?>;
    </script>
    <?php echo $__env->yieldPushContent('head'); ?>
</head>
<body>
    <?php echo $__env->yieldContent('body'); ?>
</body>
</html>
