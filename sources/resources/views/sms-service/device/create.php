<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
            'elements' => [
                [
                    'url' => action('DeviceController@index'),
                    'name' => __('site.sms_service.devices.title')
                ],
                [
                    'url' => action('DeviceController@create'),
                    'name' => __('site.sms_service.devices.add')
                ],
            ],
        ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <device-create company_id="<?php echo e(Auth::user()->company_id); ?>" token="<?php echo e($token); ?>" url="<?php echo e($url); ?>" qr="<?php echo e($qr); ?>" />
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>