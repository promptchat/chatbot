<?php $__env->startSection('content'); ?>
    <p>
        You have a website visitor asking for live chat.
        Click to login to your <?php echo e(\App\Models\SiteConfig::getTitle()); ?> account <a href="<?php echo e(url('/live-chat')); ?>"><?php echo e(url('/live-chat')); ?></a>
    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>