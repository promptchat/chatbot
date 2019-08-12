<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script>
        window.baseUrl = "<?php echo e(url('')); ?>" ;
        window.agent = <?php echo $agent; ?>;
        window.messageNotification = "<?php echo $messageNotification; ?>";
        window.logo = "<?php echo $logo; ?>";
        window.hasLive = "<?php echo $hasLive; ?>";
        window.isMobile = <?php echo request()->get('isMobile'); ?>;
        window.config = <?php echo $config; ?>;
        window.chat = <?php echo $chat; ?>;
        window.hostUrl = "<?php echo request()->get('hostUrl'); ?>";
        window.appName = "<?php echo e(\App\Models\SiteConfig::getPoweredByName()); ?>";
        window.projectBaseUrl =  "<?php echo e(\App\Models\SiteConfig::getPoweredByLink()); ?>";
        window.translates = <?php echo $translates; ?>;
    </script>
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
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=<?php echo e(config('app.google_map_key')); ?>&libraries=places"></script>
    
    <script src="<?php echo e(mix('help-button/bundle.js')); ?>" defer></script>

    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(\App\Models\SiteConfig::getFavicon()); ?>">

    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Playfair+Display|Poppins|Roboto|Raleway" rel="stylesheet">
    <link href="<?php echo e(mix('help-button/style.css')); ?>" rel="stylesheet">
</head>
<body>


</body>
</html>
