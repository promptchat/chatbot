<?php $__env->startPush('head'); ?>
    <script id="widget-script">
        window.calendarId = <?php echo $calendar->id; ?>

        window.clientId = <?php echo json_encode($clientToken); ?>

    </script>
    <style>
        body {
            font-family: <?php echo e($configs['global_font_family']); ?>!important;
        }
    </style>
<?php $__env->stopPush(); ?>
<?php $__env->startSection('body'); ?>
    <div>
        <div id="appointment" style="display: none;"><?php echo json_encode([
            'calendar' => $calendar->id,
            'client' => $clientToken,
            'title' => $calendar->appointment_window_title,
            'time_zone_note' => $calendar->time_zone_note,
            'variables' => $variables,
    ]); ?></div>
    </div>
    <script src="<?php echo e(mix('js/appointment.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>