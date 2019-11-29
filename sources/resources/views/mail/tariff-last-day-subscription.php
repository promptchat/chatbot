<?php $__env->startSection('content'); ?>
    <h2>Hello!</h2>
    <br>
    <p>Today is the last day of your subscription!</p>
    <br><br><br>
    <p>Visit <a href="https://chat.promptchat.com">chat.promptchat.com</a> and make payment to use our services.</p>
    <br><br><br>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>