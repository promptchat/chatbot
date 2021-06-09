<?php $__env->startSection('content'); ?>

    <div>
        This is test email
    </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>