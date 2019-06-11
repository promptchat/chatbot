<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.live_chat.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <operator-panel
            configs="<?php echo e(json_encode(Auth::user()->getChatConfigs())); ?>"
            operator="<?php echo e(\Auth::id()); ?>"
            departments="<?php echo e(Auth::user()->userDepartments()->pluck('department_id')->toJson()); ?>"
    />
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>