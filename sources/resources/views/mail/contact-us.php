<?php $__env->startSection('content'); ?>
    <p>
        <strong><?php echo app('translator')->getFromJson('mail.from'); ?>:</strong> <?php echo e($data->get('name')); ?> (<?php echo e($data->get('email')); ?>)
    </p>
    <p>
        <strong><?php echo app('translator')->getFromJson('mail.subject'); ?>:</strong> <?php echo e($data->get('subject')); ?>

    </p>
    <p>
        <strong><?php echo app('translator')->getFromJson('mail.message'); ?>:</strong><br>
        <?php echo e($data->get('message')); ?>

    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>