<?php $__env->startSection('content'); ?>
    <h2>Hello!</h2>
    <br>
    <p>New account has been created</p>
    <p><strong>Name:</strong> <?php echo e($name); ?></p>
    <p><strong>Username:</strong> <?php echo e($username); ?></p>
    <p><strong>Password:</strong> <?php echo e($password); ?></p>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>