<?php $__env->startSection('content'); ?>
    <h2>Hello, <?php echo e($name); ?>!</h2>
    <br>
    <p>Your <?php echo e(\App\Models\SiteConfig::getTitle()); ?> account is ready, here are your login credentials.</p>
    <p><strong>Username:</strong> <?php echo e($username); ?></p>
    <p><strong>Password:</strong> <?php echo e($password); ?></p>

    <p>
        If you want to use live chat option together with the chatbot and social messenger, please create a live
        chat account <a href="<?php echo e(url('/registration-live-chat')); ?>">here</a>
    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>