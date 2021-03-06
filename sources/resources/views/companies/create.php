<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.company.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('CompanyController@index'),
                'name' => __('site.company.page_title')
            ],
            [
                'url' => action('CompanyController@create'),
                'name' => __('site.buttons.add')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<div class="">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('CompanyController@store')); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <div class="form-group">
                            <label for="name"><?php echo app('translator')->getFromJson('site.company.name'); ?></label>
                            <input
                                    class="form-control"
                                    placeholder="<?php echo app('translator')->getFromJson('site.company.name'); ?>"
                                    type="text"
                                    name="name"
                                    value="<?php echo e(old("name")); ?>"
                                    required
                            >
                            <?php $__env->startComponent('components.errors', ['field' => "name"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
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