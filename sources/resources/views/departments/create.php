<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.department.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<div class="">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('DepartmentController@store')); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <input hidden name="company_id" value="<?php echo e($companyId); ?>">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('site.department.department'),
                            'name' => 'name',
                            'required' => true
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