<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.language.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('LanguageController@index'),
                'name' => __('site.language.page_title')
            ],
            [
                'url' => action('LanguageController@edit', $language),
                'name' => __('site.buttons.edit')
            ]
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="">
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
                                <label for="name"><?php echo app('translator')->getFromJson('site.language.language'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.language.language'); ?>"
                                        type="text"
                                        name="name"
                                        value="<?php echo e($language->name ?? old("name")); ?>"
                                        class="form-control"
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "name"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-name">
                                <label for="locale"><?php echo app('translator')->getFromJson('site.language.locale'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.language.locale'); ?>"
                                        type="text"
                                        name="locale"
                                        value="<?php echo e($language->locale ?? old("locale")); ?>"
                                        class="form-control"
                                        readonly
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "locale"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-group my-4">
                                <?php $__env->startComponent('components.form.checkbox', [
                                    'label' => __('site.chat_box.is_rtl'),
                                    'name' => 'is_rtl',
                                    'value' => $language->is_rtl
                                ]); ?><?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.errors', ['field' => "is_rtl"]); ?><?php echo $__env->renderComponent(); ?>
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