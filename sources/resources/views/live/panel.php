<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Operators"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <operator-panel operator="<?php echo e(\Auth::id()); ?>" departments="<?php echo e(Auth::user()->userDepartments()->pluck('department_id')->toJson()); ?>" />
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>