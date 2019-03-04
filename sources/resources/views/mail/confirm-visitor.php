<?php $__env->startSection('content'); ?>
    <h2>Hello, <?php echo e($data->get('user_name')); ?>!</h2>
    <p>Thank yor for making a booking. This is now confirmed.</p>
    <hr>
    <p>
        Event name: <?php echo e($data->get('name')); ?><br>
        Start event: <?php echo e(new \Carbon\Carbon($data->get('start'))); ?>

    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>