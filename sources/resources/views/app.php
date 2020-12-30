<?php $__env->startPush('head'); ?>
    <style id="color-variables">
        :root {
            --primary-color: <?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getColorScheme()['primary']; ?>;
            --secondary-color: <?php echo app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getColorScheme()['secondary']; ?>;
        }
    </style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('body'); ?>
    <div id="app"></div>
    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>