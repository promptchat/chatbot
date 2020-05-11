<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.live_chat.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('styles'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/panel.css')); ?>">
<?php $__env->stopPush(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('LiveChatController@all'),
                'name' => __('site.live_chat.page_title')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <panel
            agents="<?php echo e(json_encode($agents)); ?>"
            configs="<?php echo e(json_encode(Auth::user()->getChatConfigs())); ?>"
            operator="<?php echo e(\Auth::id()); ?>"
            departments="<?php echo e(Auth::user()->userDepartments()->pluck('department_id')->toJson()); ?>"
            connect_message="<?php echo e(\Auth::user()->connect_message); ?>"
            sound="<?php echo e(intval($sound)); ?>"
    />
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>