<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.buttons.edit"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
         'elements' => [
             [
                 'url' => action('AnalyticsController@index'),
                 'name' => __('site.analytic.page_title')
             ],
             [
                 'url' => action('TagController@index'),
                 'name' => __('site.tags.page_title')
             ],
             [
                 'url' => action('TagController@edit', $tag),
                 'name' => __('site.buttons.edit')
             ],
         ]
     ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <form
                role="form"
                method="post"
                action="<?php echo e(action('TagController@update', $tag)); ?>"
                enctype="multipart/form-data"
        >
            <?php echo e(csrf_field()); ?>

            <?php echo e(method_field("patch")); ?>

            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 offset-md-3">
                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.tags.title'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.tags.title'); ?>"
                                        type="text"
                                        name="name"
                                        value="<?php echo e($tag->name ?? old("name")); ?>"
                                        class="form-control"
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