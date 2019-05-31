<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Languages"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="container">
        <form
                role="form"
                method="post"
                action="<?php echo e(action('LanguageController@update', $language)); ?>"
                enctype="multipart/form-data"
        >
            <?php echo e(csrf_field()); ?>

            <?php echo e(method_field('PATCH')); ?>

            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 offset-md-3">
                            <div class="form-group">
                                <label for="name"><?php echo app('translator')->getFromJson('Language'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('Language'); ?>"
                                        type="text"
                                        name="name"
                                        value="<?php echo e($language->name ?? old("name")); ?>"
                                        class="form-control"
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "name"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-name">
                                <label for="locale"><?php echo app('translator')->getFromJson('Locale (ISO)'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('Locale (ISO)'); ?>"
                                        type="text"
                                        name="locale"
                                        value="<?php echo e($language->locale ?? old("locale")); ?>"
                                        class="form-control"
                                        readonly
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "locale"]); ?><?php echo $__env->renderComponent(); ?>
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

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>