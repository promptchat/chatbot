<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Companies management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<div class="container">
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
                            <label for="name"><?php echo app('translator')->getFromJson('Company name'); ?></label>
                            <input
                                    class="form-control"
                                    placeholder="<?php echo app('translator')->getFromJson('Enter the company name'); ?>"
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
                <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('Save'); ?></button>
            </div>
        </div>
    </form>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>