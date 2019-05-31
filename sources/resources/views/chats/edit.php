<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Chatbots management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <chat-creator logo="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>" method="patch" url="<?php echo e(action('ChatController@update', $chat)); ?>" name="<?php echo e($chat->name); ?>" data="<?php echo e(json_encode($chat->chat->getItems())); ?>"/>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', ['hiddenMenu' => true], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>