<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.calendar.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('CalendarController@index'),
                'name' => __('site.calendar.page_title')
            ],
            [
                'url' => action('CalendarController@edit', $calendar),
                'name' => __('site.buttons.edit')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <calendar calendar="<?php echo e(json_encode($calendar)); ?>"/>
<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>