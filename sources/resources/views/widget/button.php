<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            display: inline-block;
        }
    </style>
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        crossorigin="anonymous"
    />
    <?php if(config('app.chatboxBundle')): ?>
        <script src="<?php echo e(config('app.chatboxBundle')); ?>" defer></script>
    <?php else: ?>
        <script src="<?php echo e(mix('chat-box/bundle.js')); ?>" defer></script>
    <?php endif; ?>
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getFavicon()); ?>">

    <link href="<?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getFontsLink()); ?>" rel="stylesheet">

</head>
<body>

<div data-widget-host="habitat" class="preview">
    <script type="text/props">
        <?php echo json_encode([
              'id' => $integration->id,
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
