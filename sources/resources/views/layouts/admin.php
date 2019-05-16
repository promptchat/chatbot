<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title><?php echo e(\App\Models\SiteConfig::getTitle()); ?></title>
    <meta name="description" content="<?php echo e(\App\Models\SiteConfig::getDescription()); ?>">

    <script>
        window.google_maps_key = "<?php echo e(config('app.google_map_key')); ?>"
    </script>
    <!-- Scripts -->
    <script src="<?php echo e(asset('js/admin.js')); ?>" defer></script>

    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(url('storage/'.\App\Models\SiteConfig::getFavicon())); ?>">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Playfair+Display|Poppins|Roboto" rel="stylesheet">



    <!-- Styles -->
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
</head>
<body class="admin">
    <div id="app">
        <header>
            <div class="container-fluid padding-null">
                <?php if(auth()->guard()->guest()): ?>
                    <div></div>
                <?php else: ?>
                    <?php if($hiddenMenu ?? false): ?>
                            <style type="text/css">
                                .menu {
                                    display: none;
                                }

                            </style>
                    <?php endif; ?>
                    <div class="menu" >
                        <div class="top-block">
                            <div class="icon-close">
                                <span class="mi mi-close"></span>
                            </div>
                            <div class="dashboard-name">
                                <img class="menu-logo" src="<?php echo e(url('storage/'.\App\Models\SiteConfig::getLogo())); ?>">
                            </div>
                        </div>

                        <ul class="nav-menu">
                            <a class="menu-item" href="<?php echo e(action("AgentController@index")); ?>"><i class="fa fa-plus"></i><?php echo app('translator')->getFromJson('Chat boxes'); ?></a>
                            <a class="menu-item" href="<?php echo e(action("AnalyticsController@index")); ?>"><i class="fa fa-bar-chart"></i><?php echo app('translator')->getFromJson('Analytics'); ?></a>
                            <a class="menu-item" href="<?php echo e(action("CalendarController@index")); ?>"><i class="fa fa-calendar"></i><?php echo app('translator')->getFromJson('Calendar'); ?></a>
                            <a class="menu-item" href="<?php echo e(action("ConfigController@edit")); ?>"><i class="fa fa-sliders"></i><?php echo app('translator')->getFromJson('Button settings'); ?></a>
                            <a class="menu-item" href="<?php echo e(action("ChatController@index")); ?>"><i class="fa fa-comments"></i><?php echo app('translator')->getFromJson('Chatbots'); ?></a>
                            <a class="menu-item" href="<?php echo e('/live-chat'); ?>"><i class="fa fa-commenting "></i><?php echo app('translator')->getFromJson('Live chat'); ?></a>
                            <a class="menu-item" href="<?php echo e('/getting-started-guide'); ?>"><i class="fa fa-book"></i><?php echo app('translator')->getFromJson('Getting Started Guide'); ?></a>
                            <?php if(Auth::user()->isAdmin()): ?>
                                <a class="menu-item" href="<?php echo e(action("SiteConfigController@index")); ?>"><i class="fa fa-cogs" aria-hidden="true"></i><?php echo app('translator')->getFromJson('Site configs'); ?></a>
                                <a class="menu-item" href="<?php echo e(action("LanguageController@index")); ?>"><i class="fa fa-globe" aria-hidden="true"></i><?php echo app('translator')->getFromJson('Languages'); ?></a>
                                <a class="menu-item" href="<?php echo e(action("TranslationController@index")); ?>"><i class="fa fa-language" aria-hidden="true"></i><?php echo app('translator')->getFromJson('Translates'); ?></a>
                            <?php endif; ?>
                        </ul>
                    </div>

                    <div class="grey-header dynamic-content">
                        <span class="brand-name">
                          <i class="fa fa-bars icon-menu burger" aria-hidden="true" ></i>
                          <span class="name"><?php echo $__env->yieldContent('page-name'); ?></span>
                        </span>
                        <span class="right-user-name pull-right">
                            <div class="btn-group">
                                <button class="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <?php echo e(Auth::user()->name); ?>

                                 </button>

                                <ul class="dropdown-menu">
                                        <a class="dropdown-item" href="<?php echo e(route('logout')); ?>"
                                         onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();"
                                        >Log Out</a>
                                    <form id="logout-form" action="<?php echo e(route('logout')); ?>" method="POST" style="display: none;">
                                        <?php echo e(csrf_field()); ?>

                                    </form>
                                </ul>
                            </div>
                        </span>
                    </div>
                <?php endif; ?>
            </div>
        </header>

        <div class="content dynamic-content">
            <div class="container-fluid padding-null">
                <div class="page-content">
                    <?php echo $__env->yieldContent('content'); ?>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
