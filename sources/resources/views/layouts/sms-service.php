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
        window.userId = "<?php echo e(Auth::id()); ?>"
    </script>
    <!-- Scripts -->
    <script src="<?php echo e(mix('js/admin.js')); ?>" defer></script>

    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(\App\Models\SiteConfig::getFavicon()); ?>">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <link href="<?php echo e(\App\Models\SiteConfig::getFonts()); ?>"
          rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
          type="text/css" media="screen"/>

    <!-- Styles -->
    <link href="<?php echo e(mix('css/app.css')); ?>" rel="stylesheet">
    <?php echo $__env->yieldPushContent('styles'); ?>
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
                <div class="menu" data-simplebar>
                    <div class="top-block d-flex">
                        <div class="dashboard-name">
                            <a href="<?php echo e(action('HomeController@index')); ?>">
                                <img class="menu-logo" src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>">
                            </a>
                        </div>
                        <div class="icon-close">
                            <i class="fa fa-toggle-on"></i>
                        </div>
                    </div>

                    <ul class="nav-menu">
                        <a class="menu-item" href="<?php echo e(action("DeviceController@index")); ?>">
                            <i class="fa fa-phone text-white"></i><?php echo app('translator')->getFromJson('site.sms_service.left_menu.devices'); ?>
                        </a>



                        <a class="menu-item" href="<?php echo e(action('Sms\MailingController@index')); ?>">
                            <i class="fa fa-reply-all text-white"></i><?php echo app('translator')->getFromJson('site.sms_service.left_menu.mailing'); ?>
                        </a>
                        <a class="menu-item" href="/">
                            <i class="fa fa-backward text-white"></i><?php echo app('translator')->getFromJson('site.sms_service.left_menu.back'); ?>
                        </a>
                    </ul>
                </div>

                <div class="white-header dynamic-content">
                        <span class="brand-name d-flex align-content-center">
                             <div>
                                <i class="fa fa-toggle-off icon-menu burger" aria-hidden="true"></i>
                             </div>
                            <?php echo $__env->yieldContent('breadcrumbs'); ?>
                        </span>
                    <span class="right-user-name pull-right d-flex">
                            <div class="dropdown">
                                <button class="btn shadow-none dropdown-toggle" type="button" id="dropdownLangButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <?php echo e($currentLanguage); ?>

                                 </button>

                                <div class="dropdown-menu" aria-labelledby="dropdownLangButton">
                                    <?php $__currentLoopData = $locales; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <a class="dropdown-item"
                                           href="<?php echo e(action("UserController@changeLanguage", $key)); ?>"><?php echo e($language); ?></a>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </div>
                            </div>

                            <div class="dropdown">
                                <button class="btn shadow-none dropdown-toggle" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <?php echo e(Auth::user()->name); ?>

                                 </button>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"
                                     style="top: initial;">
                                    <div class="box-sm">
                                        <div class="login-box clearfix">
                                            <div class="user-img">
                                                <img src="<?php echo e(Auth::user()->image->url ?? '/img/no-image.png'); ?>" alt=""
                                                     style="width:100%">
                                            </div>
                                            <div class="user-info">
                                                <div>
                                                    <span><?php echo e(Auth::user()->name); ?></span>
                                                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('walletShow', Auth::user()->company)): ?>
                                                        <a href="<?php echo e(action('WalletController@show', Auth::user()->company)); ?>"
                                                           class="text-secondary">Balance: <?php echo e(Auth::user()->company->balance / 100); ?>$</a>
                                                    <?php endif; ?>
                                                </div>
                                                <a href="<?php echo e(action("UserController@edit", Auth::user())); ?>">
                                                    <?php echo app('translator')->getFromJson('site.edit_my_profile'); ?>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="button-pane text-center">
                                            <form action="<?php echo e(route('logout')); ?>" method="POST">
                                                <?php echo csrf_field(); ?>
                                            <a class="btn btn-danger d-block text-white" id="logout-btn">
                                                <i class="glyph-icon icon-power-off"></i> Logout
                                            </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
