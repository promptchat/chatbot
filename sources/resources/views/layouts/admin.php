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
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Playfair+Display|Poppins|Roboto" rel="stylesheet">



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
                    <div class="menu" >
                        <div class="top-block">
                            <div class="icon-close">
                                <span class="mi mi-close"></span>
                            </div>
                            <div class="dashboard-name">
                                <img class="menu-logo" src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>">
                            </div>
                        </div>

                        <ul class="nav-menu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Agent::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("AgentController@index")); ?>">
                                    <i class="fa fa-plus"></i><?php echo app('translator')->getFromJson('site.left_menu.chat_boxes'); ?>
                                </a>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\ChatSession::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("AnalyticsController@index")); ?>">
                                    <i class="fa fa-bar-chart"></i><?php echo app('translator')->getFromJson('site.left_menu.analytics'); ?>
                                </a>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Calendar::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("CalendarController@index")); ?>">
                                    <i class="fa fa-calendar"></i><?php echo app('translator')->getFromJson('site.left_menu.calendar'); ?>
                                </a>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Config::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("ConfigController@index")); ?>">
                                    <i class="fa fa-sliders"></i><?php echo app('translator')->getFromJson('site.left_menu.button_settings'); ?>
                                </a>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\ChatUser::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("ChatController@index")); ?>">
                                    <i class="fa fa-comments"></i><?php echo app('translator')->getFromJson('site.left_menu.chatbots'); ?>
                                </a>
                            <?php endif; ?>

                            <a class="menu-item" href="<?php echo e('/live-chat'); ?>">
                                <i class="fa fa-commenting "></i><?php echo app('translator')->getFromJson('site.left_menu.live_chat'); ?>
                            </a>
                            <a class="menu-item" href="<?php echo e('/getting-started-guide'); ?>">
                                <i class="fa fa-book"></i><?php echo app('translator')->getFromJson('site.left_menu.getting_started_guide'); ?>
                            </a>

                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\User::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("UserController@index")); ?>">
                                    <i class="fa fa-users" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.users'); ?>
                                </a>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', Auth::user()->company)): ?>
                                <?php if(Auth::user()->isCompanyAdmin()): ?>
                                    <a class="menu-item" href="<?php echo e(action("CompanyController@edit", Auth::user()->company_id)); ?>">
                                        <i class="fa fa-building" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.my_company'); ?>
                                    </a>
                                <?php endif; ?>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\Company::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("CompanyController@index")); ?>">
                                    <i class="fa fa-building" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.customer_accounts'); ?>
                                </a>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \App\Models\SiteConfig::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("SiteConfigController@index")); ?>">
                                    <i class="fa fa-cogs" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.site_configs'); ?>
                                </a>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \Waavi\Translation\Models\Language::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("LanguageController@index")); ?>">
                                    <i class="fa fa-globe" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.languages'); ?>
                                </a>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('index', \Waavi\Translation\Models\Translation::class)): ?>
                                <a class="menu-item" href="<?php echo e(action("TranslationController@index")); ?>">
                                    <i class="fa fa-language" aria-hidden="true"></i><?php echo app('translator')->getFromJson('site.left_menu.translates'); ?>
                                </a>
                            <?php endif; ?>
                        </ul>
                    </div>

                    <div class="grey-header dynamic-content">
                        <span class="brand-name">
                          <i class="fa fa-bars icon-menu burger" aria-hidden="true" ></i>
                          <span class="name"><?php echo $__env->yieldContent('page-name'); ?></span>
                        </span>
                        <span class="right-user-name pull-right d-flex">
                            <div class="dropdown">
                                <button class="btn shadow-none dropdown-toggle" type="button" id="dropdownLangButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <?php echo e($currentLanguage); ?>

                                 </button>

                                <div class="dropdown-menu" aria-labelledby="dropdownLangButton">
                                    <?php $__currentLoopData = $locales; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <a class="dropdown-item" href="<?php echo e(action("UserController@changeLanguage", $key)); ?>"><?php echo e($language); ?></a>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </div>
                            </div>

                            <div class="dropdown">
                                <button class="btn shadow-none dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <?php echo e(Auth::user()->name); ?>

                                 </button>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="<?php echo e(action("UserController@editPersonalData", Auth::user())); ?>"><?php echo app('translator')->getFromJson('site.edit_my_profile'); ?></a>
                                    <a class="dropdown-item" href="<?php echo e(route('logout')); ?>"
                                     onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit();"
                                    ><?php echo app('translator')->getFromJson('site.log_out'); ?></a>
                                    <form id="logout-form" action="<?php echo e(route('logout')); ?>" method="POST" style="display: none;">
                                        <?php echo e(csrf_field()); ?>

                                    </form>
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
