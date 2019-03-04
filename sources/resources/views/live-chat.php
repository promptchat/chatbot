<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Live chat"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <iframe style='width: 100%; height: calc(100vh - 110px); margin:0; padding: 0; border: none'  src='https://promptchat.org/PC50/UniverseServer/Public/Client.php'></iframe>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>