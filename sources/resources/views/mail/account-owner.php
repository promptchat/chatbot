<?php $__env->startSection('content'); ?>
    <h2><?php echo app('translator')->getFromJson('mail.hello1'); ?></h2>
    <br>
    <p><?php echo app('translator')->getFromJson('mail.new_account_has_been_created'); ?></p>
    <p><strong><?php echo app('translator')->getFromJson('mail.name'); ?>:</strong> <?php echo e($name); ?></p>
    <p><strong><?php echo app('translator')->getFromJson('mail.username'); ?>:</strong> <?php echo e($username); ?></p>
    <p><strong><?php echo app('translator')->getFromJson('mail.password'); ?>:</strong> <?php echo e($password); ?></p>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>