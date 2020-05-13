<html>
<head>
    <style>
        .appo-picker {
            position: relative !important;

            top: unset !important;
            left: unset !important;
        }
    </style>
</head>
<body>
<appointment calendar="<?php echo e($calendar); ?>"></appointment>
<script src="<?php echo e(mix('js/appointment.js')); ?>" defer></script>
</body>
</html>

