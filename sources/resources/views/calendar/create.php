<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Calendars management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <calendar />
<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>