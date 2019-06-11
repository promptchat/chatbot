<?php $__env->startSection('content'); ?>
    <h2><?php echo app('translator')->getFromJson('mail.hello1'); ?></h2>
    <br>
    <p><?php echo app('translator')->getFromJson('mail.visitor_just_chatted_with_your_chatbot'); ?></p>
    <p><strong><?php echo app('translator')->getFromJson('mail.time_of_start'); ?>:</strong> <?php echo e($session->created_at); ?></p>
    <p><strong><?php echo app('translator')->getFromJson('mail.page'); ?>:</strong> <?php echo e($session->url); ?></p>
    <p><strong><?php echo app('translator')->getFromJson('mail.ip'); ?>:</strong> <?php echo e($session->ip); ?></p>

    <p><?php echo app('translator')->getFromJson('mail.results'); ?>:</p>
    <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <p><strong><?php echo e($key); ?>:</strong> <?php echo e($value); ?></p>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>