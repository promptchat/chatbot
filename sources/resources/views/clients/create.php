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
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <form action="<?php echo e(action('SessionController@import')); ?>" class="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 py-3" method="get">
                    <?php $__env->startComponent('components.form.select2', [
                        'label' => __('site.client.integration'),
                        'name' => 'agent_id',
                        'options' => $agents,
                        'required' => false
                    ]); ?>
                    <?php echo $__env->renderComponent(); ?>
                    <div class="form-group text-right">
                        <label for="xml" class="btn btn-warning text-white mr-3"><?php echo app('translator')->getFromJson('site.client.add_xml'); ?></label>
                        <label for="simple" class="btn btn-success"><?php echo app('translator')->getFromJson('site.client.add_simple'); ?></label>
                        <input type="submit" class="d-none" id="simple" name="type" value="simple">
                        <input type="submit" class="d-none"  id="xml" name="type" value="xml">
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>