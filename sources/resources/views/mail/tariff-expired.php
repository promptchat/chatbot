<?php $__env->startSection('content'); ?>
    Your tariff has expired and you no longer have access to your account and data.
    Please add funds to your wallet to renew subscription.
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>