<?php $__env->startSection('content'); ?>
    <h2>Hello!</h2>
    <br>
    <p>A visitor just chatted with your chatbot</p>
    <p><strong>Time of start:</strong> <?php echo e($session->created_at); ?></p>
    <p><strong>Page:</strong> <?php echo e($session->url); ?></p>
    <p><strong>Ip:</strong> <?php echo e($session->ip); ?></p>

    <p>Results:</p>
    <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <p><strong><?php echo e($key); ?>:</strong> <?php echo e($value); ?></p>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>