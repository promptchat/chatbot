<?php $__env->startSection('content'); ?>
    <p>
        <strong>From:</strong> <?php echo e($data->get('name')); ?> (<?php echo e($data->get('email')); ?>)
    </p>
    <p>
        <strong>Subject:</strong> <?php echo e($data->get('subject')); ?>

    </p>
    <p>
        <strong>Message:</strong><br>
        <?php echo e($data->get('message')); ?>

    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>