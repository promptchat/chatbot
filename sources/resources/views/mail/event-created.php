<?php $__env->startSection('content'); ?>
    <p>Thank you for your request for appointment on <a href="<?php echo e($host); ?>"><?php echo e($host); ?></a></p>

    <p>
        The details you left with us:<br>
        <strong>Your name:</strong> <?php echo e($event->user_name); ?><br>
        <strong>Telephone:</strong> <?php echo e($event->user_phone); ?><br>
        <strong>Email:</strong> <?php echo e($event->user_email); ?><br>
        <strong>Comment:</strong> <?php echo e($event->comment); ?><br>
        <strong>CallBack requested for:</strong> <?php echo e((new \Carbon\Carbon($event->start_time))->format('Y-m-d H:i')); ?><br>
    </p>

    <p>Please note, your appointment request has not yet been confirmed by a member of our staff.</p>

    <p>We aim to confirm all appointment requests within a few hours.</p>

    <p>Please bear with us until one of our members confirms your appointment request via email or by calling the telephone number you left on our website.</p>

    <p>With kind regards,</p>

    <p><a href="<?php echo e(url('/')); ?>"><?php echo e(\App\Models\SiteConfig::getTitle()); ?></a></p>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>