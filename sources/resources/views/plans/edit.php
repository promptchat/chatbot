<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.plan.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('PlanController@index'),
                'name' => __('site.plan.page_title')
            ],
            [
                'url' => action('PlanController@edit', $plan),
                'name' => __('site.buttons.edit')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('PlanController@update', $plan)); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <?php echo e(method_field("patch")); ?>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">


                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.plan.name'),
                            'type' => 'text',
                            'name' => 'name',
                            'value' => $plan->name,
                        ]); ?><?php echo $__env->renderComponent(); ?>
                        <hr class="my-4">


                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.plan.limit_operators'),
                            'type' => 'text',
                            'name' => 'limit_operators',
                            'value' => $plan->limit_operators,
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.plan.limit_departments'),
                            'type' => 'text',
                            'name' => 'limit_departments',
                            'value' => $plan->limit_departments,
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.plan.limit_chatboxes'),
                            'type' => 'text',
                            'name' => 'limit_chatboxes',
                            'value' => $plan->limit_chatboxes,
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.plan.limit_chatbots'),
                            'type' => 'text',
                            'name' => 'limit_chatbots',
                            'value' => $plan->limit_chatbots,
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.plan.limit_calendars'),
                            'type' => 'text',
                            'name' => 'limit_chatbots',
                            'value' => $plan->limit_chatbots,
                        ]); ?><?php echo $__env->renderComponent(); ?>
                        <hr class="my-4">


                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.plan.price'),
                            'type' => 'text',
                            'name' => 'price',
                            'value' => $plan->price,
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.plan.days'),
                            'type' => 'text',
                            'name' => 'days',
                            'value' => $plan->days,
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.form.checkbox', [
                            'label' => __('site.plan.live_chat_enabled'),
                            'value' => $plan->live_chat_enabled,
                            'name' => 'live_chat_enabled',
                        ]); ?><?php echo $__env->renderComponent(); ?>
                        <?php $__env->startComponent('components.form.checkbox', [
                            'label' => __('site.plan.visible'),
                            'value' => $plan->visible,
                            'name' => 'visible',

                        ]); ?><?php echo $__env->renderComponent(); ?>
                        <?php $__env->startComponent('components.form.checkbox', [
                            'label' => __('site.plan.is_demo'),
                            'value' => $plan->is_demo,
                            'name' => 'is_demo',
                        ]); ?><?php echo $__env->renderComponent(); ?>

                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 bottom-btn">
                <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
            </div>
        </div>
    </form>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>