<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Translate management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('ResourcesController@update', $key)); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <?php echo e(method_field("patch")); ?>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <div class="form-group">
                            <label for="title"><?php echo app('translator')->getFromJson('Translate'); ?></label>
                            <textarea
                                    placeholder="<?php echo e($key); ?>"
                                    type="text"
                                    name="translate"
                                    class="form-control"
                            ><?php echo e(old('translate') ?? $translate); ?></textarea>
                            <?php $__env->startComponent('components.errors', ['field' => "translate"]); ?><?php echo $__env->renderComponent(); ?>
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