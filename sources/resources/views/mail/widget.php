<?php $__env->startSection('content'); ?>
    <h2>Hello!</h2>
    <br>
    Copy following code to your html file
    <br><br>
    <code style="display: block">
        <?php echo e(view('widget.code')); ?>

    </code>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>