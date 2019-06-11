<?php $__env->startSection('content'); ?>
    <h2><?php echo app('translator')->getFromJson('mail.hello'); ?>, <?php echo e($data->get('user_name')); ?>!</h2>
    <p><?php echo app('translator')->getFromJson('mail.thank_yor_for_making_booking'); ?></p>
    <hr>
    <p>
        <?php echo app('translator')->getFromJson('mail.event_name'); ?>: <?php echo e($data->get('name')); ?><br>
        <?php echo app('translator')->getFromJson('mail.start_event'); ?>: <?php echo e(new \Carbon\Carbon($data->get('start'))); ?>

    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>