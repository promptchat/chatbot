<?php $__env->startSection('content'); ?>
    <participant-creator variables="<?php echo e(json_encode([])); ?>" mailing_id="<?php echo e($mailing->id); ?>"></participant-creator>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>