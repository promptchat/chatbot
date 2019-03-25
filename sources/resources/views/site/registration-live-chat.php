<?php $__env->startSection('content'); ?>
    <div class="container sign-page">
        <iframe style='width: 100%; height: 700px; padding: 0; border: none; margin: 0; overflow: hidden;' src="<?php echo e(\App\Models\SiteConfig::getLiveChatAccountGeneratorUrl()); ?>"></iframe>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>