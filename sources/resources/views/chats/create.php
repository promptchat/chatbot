<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Chatbots management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <chat-creator method="post" url="<?php echo e(action('ChatController@store')); ?>" name=""/>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', ['hiddenMenu' => true], array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>