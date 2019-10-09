<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.chat_box.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AgentController@index'),
                'name' => __('site.chat_box.page_title')
            ],
            [
                'url' => action('AgentController@show', $agent),
                'name' => __('site.buttons.show')
            ]
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col s12">
                    <a href="<?php echo e(action("AgentController@edit", $agent)); ?>" class="btn btn-primary text-uppercase pull-right"><?php echo app('translator')->getFromJson('site.buttons.edit'); ?></a>
                </div>
            </div>
            <h4>
                <?php echo e($agent->name); ?>

            </h4>
            <p><?php echo app('translator')->getFromJson('models.agent.instructions'); ?></p>
            <code>
                <?php echo nl2br( str_replace(' ', '&nbsp;',e($agent->getWidget()))); ?>

            </code>
        </div>
    </div>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>