<?php $__env->startPush('head'); ?>
    <script>
        window.siteConfigs = {
            primaryColor: "<?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getColorScheme()['primary']; ?>",
            sideBar: <?php echo json_encode(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getSidebarAppearance()); ?>,
            loginPage: "<?php echo \Config::get('auth.isExternal') ? app()->make(\App\Services\ExternalUserResolveService::class)->getLoginPage() : ""; ?>",
            logoutPage: "<?php echo \Config::get('auth.isExternal') ? app()->make(\App\Services\ExternalUserResolveService::class)->getLogoutPage() : "/logout"; ?>",
            supportEmail: "<?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getSupportEmail(); ?>",
            servicesVisibility: <?php echo json_encode(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getVisibleServicesSettings()); ?>,
        }
    </script>
    <style id="color-variables">
        :root {
            --primary-color: <?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getColorScheme()['primary']; ?>;
            --secondary-color: <?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getColorScheme()['secondary']; ?>;
            --background-color: <?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getColorScheme()['background']; ?>;
        }
    </style>
    <style id="menu-panel-variables">
        :root {
            --menu-panel-height: 100vh;
        }
    </style>
    <style id="chatboard-variables">
        :root {
            --chatboard-background: <?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getColorScheme()['chatboard']; ?>;
        }
    </style>
    <style >
        .auth-wallpaper {
            background: url(<?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getAuthBackground(); ?>) no-repeat;
        }
    </style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('body'); ?>
    <div id="app"></div>
    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>