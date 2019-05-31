<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Company department"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('DepartmentController@update', $department)); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <?php echo e(method_field("patch")); ?>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('Department'),
                            'name' => 'name',
                            'value' => $department->name,
                            'required' => true
                        ]); ?><?php echo $__env->renderComponent(); ?>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 bottom-btn">
                <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('Save'); ?></button>
            </div>
        </div>
    </form>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>