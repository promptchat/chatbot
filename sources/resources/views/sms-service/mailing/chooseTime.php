<?php $__env->startSection('content'); ?>
<choose-mailing-time mailing_id="<?php echo e($mailing->id); ?>"></choose-mailing-time>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>