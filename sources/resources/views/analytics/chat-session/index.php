<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.analytic.page_title_chat"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AnalyticsController@index'),
                'name' => __('site.analytic.page_title')
            ],
            [
                'url' => action('AnalyticsController@indexChatSessionStatistic'),
                'name' => __('site.analytic.page_title_chats')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                    <div class="row mb-5">
                        <div class="col-sm-12">
                            <a href="<?php echo e(action('TagController@index')); ?>"
                               class="btn btn-primary text-uppercase pull-left">
                                <?php echo app('translator')->getFromJson('site.analytic.tag_manage'); ?>
                            </a>
                        </div>
                    </div>
                <div class="row">






























































































































                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>