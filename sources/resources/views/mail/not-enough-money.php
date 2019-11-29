<?php $__env->startSection('content'); ?>
    There is not enough money in your wallet to renew your subscription.
    Please add funds to your wallet to ensure access to your account and data.
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>