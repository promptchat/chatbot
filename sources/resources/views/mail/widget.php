<?php $__env->startSection('content'); ?>
    <h2><?php echo app('translator')->getFromJson('mail.hello1'); ?></h2>
    <br>
    <?php echo app('translator')->getFromJson('mail.copy_following_code'); ?>
    <br><br>
    <code style="display: block">
        <?php echo e(view('widget.code')); ?>

    </code>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>