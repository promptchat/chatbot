<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.translate.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('TranslationController@index'),
                'name' => __('site.translate.page_title')
            ],
            [
                'url' => action('TranslationController@edit', $translation),
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
                action="<?php echo e(action('TranslationController@update', $translation)); ?>"
                enctype="multipart/form-data"
        >
            <?php echo e(csrf_field()); ?>

            <?php echo e(method_field('PATCH')); ?>

            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 offset-md-3">
                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.translate.group'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.translate.group'); ?>"
                                        type="text"
                                        name="group"
                                        value="<?php echo e($translation->group ?? old("group")); ?>"
                                        class="form-control"
                                        readonly
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "group"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.translate.item'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.translate.item'); ?>"
                                        type="text"
                                        name="item"
                                        value="<?php echo e($translation->item ?? old("item")); ?>"
                                        class="form-control"
                                        readonly
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "item"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <?php $__currentLoopData = $languages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <li class="nav-item">
                                        <a
                                                class="nav-link <?php if($k == 0): ?> active <?php endif; ?>"
                                                id="lang-<?php echo e($language->id); ?>-tab"
                                                data-toggle="tab"
                                                href="#lang-<?php echo e($language->id); ?>"
                                                role="tab"
                                                aria-controls="lang-<?php echo e($language->id); ?>"
                                                aria-selected="true"
                                        ><?php echo e($language->name); ?></a>
                                    </li>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <?php $__currentLoopData = $languages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <div
                                            class="tab-pane fade <?php if($k == 0): ?> show active <?php endif; ?>"
                                            id="lang-<?php echo e($language->id); ?>"
                                            role="tabpanel"
                                            aria-labelledby="lang-<?php echo e($language->id); ?>-tab"
                                    >
                                        <div class="form-group">
                                            <label for="title"><?php echo app('translator')->getFromJson('site.translate.text'); ?></label>
                                            <textarea
                                                    placeholder="<?php echo app('translator')->getFromJson('site.translate.text'); ?>"
                                                    type="text"
                                                    name="text[<?php echo e($language->locale); ?>]"
                                                    class="form-control"
                                            ><?php echo e($translations[$language->locale]->text ?? old("text[$language->locale]")); ?></textarea>
                                            <?php $__env->startComponent('components.errors', ['field' => "text"]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>
                                    </div>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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