<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson('site.button_setting.page_title'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <color
                            styles="<?php echo e(json_encode($config->getStyleConfigs())); ?>"
                            name="<?php echo e($config->name); ?>"
                            id="<?php echo e($config->id); ?>"
                            message_notification="<?php echo e($config->messageNotification ? $config->messageNotification->url : url('/audio/notification.mp3')); ?>"
                    />
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>