<?php $__env->startSection('content'); ?>
    <h2>Hello, <?php echo e($name); ?>!</h2>
    <br>
    <p>Your <?php echo e(\App\Models\SiteConfig::getTitle()); ?> account is ready, here are your login credentials.</p>
    <p><strong>Username:</strong> <?php echo e($username); ?></p>
    <p><strong>Password:</strong> <?php echo e($password); ?></p>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>