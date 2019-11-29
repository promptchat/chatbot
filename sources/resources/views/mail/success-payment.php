<?php $__env->startSection('content'); ?>
    Payment successful! Thank you for chatting with Promptchat.
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>