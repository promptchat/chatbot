<?php $__env->startSection('content'); ?>
    <?php echo \App\Models\SiteConfig::getTerms(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>