<?php $__env->startSection('content'); ?>
    <p>
        <?php echo app('translator')->getFromJson('mail.you_have_website_visitor_asking', ['title' => \App\Models\SiteConfig::getTitle(), 'url' => url('/live-chat')]); ?>
    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>