<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.analytic.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AnalyticsController@index'),
                'name' => __('site.analytic.page_title')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('styles'); ?>
    <link rel="stylesheet" href="<?php echo e(mix('css/analytics.css')); ?>">
<?php $__env->stopPush(); ?>


<?php $__env->startSection('content'); ?>
    <?php if(Auth::user()->isSuperAdmin()): ?>
        <div class="row">
            <div class="col-md-4">
                <form action="">
                    <div class="form-group">
                        <label for="title"><?php echo app('translator')->getFromJson('site.analytic.company'); ?></label>
                        <div class="d-flex">
                            <?php $__env->startComponent('components.select', [
                                'empty' => __('site.analytic.company'),
                                'default' => $companyId,
                                'options' => \App\Models\Company::getOptions(),
                                'name' => 'companyId',
                            ]); ?><?php echo $__env->renderComponent(); ?>
                            <button class="btn btn-info mb-3 ml-3"><?php echo app('translator')->getFromJson('site.analytic.see'); ?></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    <?php endif; ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <analytics from="<?php echo e($from); ?>" to="<?php echo e($to); ?>" company_id="<?php echo e($companyId); ?>" />
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>