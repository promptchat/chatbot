<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.client.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('SessionController@index'),
                'name' => __('site.client.page_title')
            ],
            [
                'url' => action('SessionController@createClient'),
                'name' => __('site.buttons.add')
            ],
            [
                'url' => null,
                'name' => __('site.client.add_simple')
             ]
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <participant-creator agent_id="<?php echo e($agentId); ?>"></participant-creator>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>