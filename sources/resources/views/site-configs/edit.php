<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.site_config.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="container">
        <form
                role="form"
                method="post"
                action="<?php echo e(action('SiteConfigController@update', $siteConfig)); ?>"
                enctype="multipart/form-data"
        >
            <?php echo e(csrf_field()); ?>

            <?php echo e(method_field('PATCH')); ?>

            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 offset-md-3">
                            <div class="form-group">
                                <h4><?php echo e($siteConfig->name); ?></h4>
                                <hr class="mt-0">
                                <input type="text" hidden name="name" value="<?php echo e($siteConfig->name ?? old("name")); ?>">
                            </div>
                            <?php if($siteConfig->type == \App\Models\SiteConfig::TYPE_LOGO): ?>
                                <div>
                                    <?php $__env->startComponent('components.image-input',  [
                                        'label' => __('site.site_config.image_png'),
                                        'name' => 'image_id',
                                        'value' => $siteConfig->image_id,
                                    ]); ?><?php echo $__env->renderComponent(); ?>
                                </div>
                            <?php elseif($siteConfig->type == \App\Models\SiteConfig::TYPE_FAVICON): ?>
                                <div>
                                    <?php $__env->startComponent('components.image-input',  [
                                        'label' => __('site.site_config.image_ico'),
                                        'name' => 'image_id',
                                        'value' => $siteConfig->image_id,
                                    ]); ?><?php echo $__env->renderComponent(); ?>
                                </div>
                            <?php elseif($siteConfig->type == \App\Models\SiteConfig::TYPE_SSL): ?>
                                <div class="form-group">
                                    <label for="title"><?php echo app('translator')->getFromJson("site.site_config.ssl"); ?></label>
                                    <input
                                            type="file"
                                            name="ssl_certificate"
                                            class="form-control"
                                    >
                                    <?php $__env->startComponent('components.errors', ['field' => "ssl_certificate"]); ?><?php echo $__env->renderComponent(); ?>
                                </div>
                                <div class="form-group">
                                    <label for="title"><?php echo app('translator')->getFromJson("site.site_config.ssl_key"); ?></label>
                                    <input

                                            type="file"
                                            name="ssl_certificate_key"
                                            class="form-control"
                                    >
                                    <?php $__env->startComponent('components.errors', ['field' => "ssl_certificate_key"]); ?><?php echo $__env->renderComponent(); ?>
                                </div>
                            <?php else: ?>

                            <?php endif; ?>
                            <json-view <?php echo e($siteConfig->type==\App\Models\SiteConfig::TYPE_PAGES ? 'aseditor="1"': ''); ?> config="<?php echo e(json_encode($siteConfig->data)); ?>"/>
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