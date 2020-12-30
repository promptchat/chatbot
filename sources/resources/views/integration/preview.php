<?php $__env->startPush('head'); ?>
    <script id="widget-script">
        window.integrationScriptShow = <?php echo json_encode($scriptToShow); ?>

        window.integrationScriptUse = <?php echo json_encode($normalScript); ?>

    </script>
<?php $__env->stopPush(); ?>
<?php $__env->startSection('body'); ?>
    <div>
        <div id="preview"></div>
    </div>
    <script src="<?php echo e(mix('js/preview.js')); ?>"></script>
    <?php echo $normalScript; ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>