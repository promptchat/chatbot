<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
            'elements' => [
                [
                    'url' => action('DeviceController@index'),
                    'name' => __('site.sms_service.devices.title')
                ],
                [
                    'url' => action('DeviceController@edit', $device),
                    'name' => __('site.sms_service.devices.add')
                ],
            ],
        ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <?php echo app('translator')->getFromJson('site.sms_service.devices.details.title'); ?>
            </div>
            <div class="card-body">
                <device device_id="<?php echo e($device->id); ?>" company_id="<?php echo e(Auth::user()->company_id); ?>" default_phone="<?php echo e(Auth::user()->phone ?? ''); ?>"/>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
            </div>
        </div>
    </div>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>