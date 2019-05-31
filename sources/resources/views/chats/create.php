<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Chatbots management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <chat-creator logo="<?php echo e(url('storage/'.\App\Models\SiteConfig::getLogo())); ?>" method="post" url="<?php echo e(action('ChatController@store')); ?>" name=""/>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', ['hiddenMenu' => true], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>