<?php $__env->startPush('head'); ?>
    <script id="widget-script">
        window.calendarId = <?php echo $calendarId; ?>

        window.clientId = <?php echo json_encode($clientToken); ?>

    </script>
<?php $__env->stopPush(); ?>
<?php $__env->startSection('body'); ?>
    <div>
        <div id="appointment"><?php echo json_encode(['calendar' => $calendarId, 'client' => $clientToken]); ?></div>
    </div>
    <script src="<?php echo e(mix('js/appointment.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>