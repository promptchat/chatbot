<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <style type="text/css">

        label.checkbox{
            background-image: url("<?php echo e(url('/checkbox/chckbx_off.png')); ?>");
        }

        label.checkbox.checked {
            background-image: url("<?php echo e(url('/checkbox/chckbx_on.png')); ?>");
        }

        label.checkbox.radio {
            background-image: url("<?php echo e(url('/checkbox/radio_off.png')); ?>");
        }

        label.checkbox.radio.checked {
            background-image: url("<?php echo e(url('/checkbox/radio_on.png')); ?>");
        }
    </style>


    <script src="<?php echo e(mix('help-button/bundle.js')); ?>" defer></script>
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(\App\Models\SiteConfig::getFavicon()); ?>">

    <link href="<?php echo e(\App\Models\SiteConfig::getFonts()); ?>" rel="stylesheet">

</head>
<body>

<div data-widget-host="habitat" class="preview">
    <script type="text/props">
      <?php echo json_encode([
            'id' => $agent->id,
            'baseURL' => url(""),
            'currentURL' => request()->get('hostUrl', request()->url()),
            'configs' => $configs,
            'embed' => request()->get('embed', $embed ?? 0),
            'translates' => $translates,
        ]); ?>

    </script>
</div>

</body>
</html>
