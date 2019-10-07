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
    <script src="<?php echo e(mix('js/admin.js')); ?>" defer></script>

    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(\App\Models\SiteConfig::getFavicon()); ?>">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Playfair+Display|Poppins|Roboto"
          rel="stylesheet">


    <!-- Styles -->
    <link href="<?php echo e(mix('css/app.css')); ?>" rel="stylesheet">
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
                        <div class="navigation-label">Bot</div>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Agent\Agent::class)): ?>
                            <a class="menu-item" href="<?php echo e(action("AgentController@index")); ?>">
                                <i class="fa fa-plus text-success"></i><?php echo app('translator')->getFromJson('site.left_menu.chat_boxes'); ?>
                            </a>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\ChatSession::class)): ?>
                            <a class="menu-item" href="<?php echo e(action("AnalyticsController@index")); ?>">
                                <i class="fa fa-bar-chart text-danger"></i><?php echo app('translator')->getFromJson('site.left_menu.analytics'); ?>
                            </a>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Calendar\Calendar::class)): ?>
                            <a class="menu-item" href="<?php echo e(action("CalendarController@index")); ?>">
                                <i class="fa fa-calendar text-info"></i><?php echo app('translator')->getFromJson('site.left_menu.calendar'); ?>
                            </a>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Config\Config::class)): ?>
                            <a class="menu-item" href="<?php echo e(action("ConfigController@index")); ?>">
                                <i class="fa fa-sliders text-warning"></i><?php echo app('translator')->getFromJson('site.left_menu.button_settings'); ?>
                            </a>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\ChatUser\ChatUser::class)): ?>
                            <a class="menu-item" href="<?php echo e(action("ChatController@index")); ?>">
                                <i class="fa fa-comments text-success"></i><?php echo app('translator')->getFromJson('site.left_menu.chatbots'); ?>
                            </a>
                        <?php endif; ?>
                        <div class="navigation-label">Live chat</div>
                        <?php if(Gate::allows('live-chat', \Auth::user())): ?>
                            <a class="menu-item" href="<?php echo e(action("LiveChatController@all")); ?>">
                                <i class="fa fa-commenting text-danger"></i><?php echo app('translator')->getFromJson('site.left_menu.live_chat'); ?>
                            </a>
                            <a class="menu-item" href="<?php echo e(action("LiveChatWaitingUserController@index")); ?>">
                                <i class="fa fa-user-times text-info"></i><?php echo app('translator')->getFromJson('site.left_menu.live_chat_waiting_user'); ?> <span class="badge badge-danger"><?php echo e(\App\Http\Controllers\LiveChatWaitingUserController::getWaitingUsersCount()); ?></span>
                            </a>
                        <?php endif; ?>

                        <a class="menu-item" href="<?php echo e('/getting-started-guide'); ?>">
                            <i class="fa fa-book text-warning"></i><?php echo app('translator')->getFromJson('site.left_menu.getting_started_guide'); ?>
                        </a>
                        <div class="navigation-label">Company</div>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\User::class)): ?>
                            <a class="menu-item" href="<?php echo e(action("UserController@index")); ?>">
                                <i class="fa fa-users text-success" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.users'); ?>
                            </a>
                        <?php endif; ?>

                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Company::class)): ?>
                            <a class="menu-item" href="<?php echo e(action("CompanyController@index")); ?>">
                                <i class="fa fa-building text-danger"
                                   aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.customer_accounts'); ?>
                            </a>
                        <?php endif; ?>

                        <?php if(Auth::user()->isSuperAdmin()): ?>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                               class="dropdown-toggle menu-item">
                                <i class="fa fa-user-circle text-info"></i>
                                Admin
                            </a>
                        <?php endif; ?>
                        <ul class="collapse list-unstyled sub-menu" id="homeSubmenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\SiteConfig::class)): ?>
                                <li>
                                    <a class="menu-item sub-item" href="<?php echo e(action("SiteConfigController@index")); ?>">
                                        <i class="fa fa-cogs text-white"
                                           aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.site_configs'); ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Plan::class)): ?>
                                <li>
                                    <a class="menu-item sub-item" href="<?php echo e(action("PlanController@index")); ?>">
                                        <i class="fa fa-credit-card text-white"
                                           aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.plans'); ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if(Auth::user()->isCompanyAdmin()): ?>
                                <li>
                                    <a class="menu-item sub-item" href="<?php echo e(action("PlanController@buy")); ?>">
                                        <i class="fa fa-credit-card text-white" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.plan'); ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \Waavi\Translation\Models\Language::class)): ?>
                                <li>
                                    <a class="menu-item sub-item" href="<?php echo e(action("LanguageController@index")); ?>">
                                        <i class="fa fa-globe text-white" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.languages'); ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \Waavi\Translation\Models\Translation::class)): ?>
                                <li>
                                    <a class="menu-item sub-item" href="<?php echo e(action("TranslationController@index")); ?>">
                                        <i class="fa fa-language text-white"
                                           aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.translates'); ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
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
                                                <img src="/img/no-image.png" alt="" style="width:100%">
                                            </div>
                                            <div class="user-info">
                                                <span><?php echo e(Auth::user()->name); ?></span>
                                                <a class=""
                                                   href="<?php echo e(action("UserController@editPersonalData", Auth::user())); ?>">
                                                    <?php echo app('translator')->getFromJson('site.edit_my_profile'); ?>
                                                    </a>
                                                <a href="#" title="View notifications">View notifications</a>
                                            </div>
                                        </div>

                                        <div class="button-pane text-center">
                                            <a href="#" class="btn btn-danger d-block">
                                                <i class="glyph-icon icon-power-off"></i> Logout
                                            </a>
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
