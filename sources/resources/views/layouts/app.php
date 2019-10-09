<!doctype html>
<html lang="<?php echo e(app()->getLocale()); ?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php echo e(\App\Models\SiteConfig::getTitle()); ?></title>
    <meta name="description" content="<?php echo e(\App\Models\SiteConfig::getDescription()); ?>">
    <link href="<?php echo e(mix('css/custom.css')); ?>" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(\App\Models\SiteConfig::getFavicon()); ?>">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans" rel="stylesheet">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- Scripts -->

</head>

<body id="app">
    <div class="wrapper">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="/"><img src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>"></a>
                    <div class="dropdown mr-3 mt-3 dropdown-lang">
                        <button class="btn shadow-none dropdown-toggle" type="button" id="dropdownLangButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <?php echo e($currentLanguage); ?>

                        </button>

                        <div class="dropdown-menu" aria-labelledby="dropdownLangButton">
                            <?php $__currentLoopData = $locales; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <a class="dropdown-item" href="<?php echo e(action("UserController@changeLanguage", $key)); ?>"><?php echo e($language); ?></a>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main class="content"  >
            <?php echo $__env->yieldContent('content'); ?>
        </main>
        <footer class="footer">
            <div class="grey-footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 footer-logo">
                            <a href="/" class="d-inline-block"><img class="logo" src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>"></a>
                        </div>
                        <div class="col-md-6 copyright-text">
                            &copy; 2007-<?php echo e(\Carbon\Carbon::now()->format('Y')); ?> <?php echo e(\App\Models\SiteConfig::getTitle()); ?> <br> <?php echo app('translator')->getFromJson('site.all_rights_reserved'); ?>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script src="<?php echo e(mix('js/app.js')); ?>" defer></script>


    <?php echo app('chat-agent')->getWidget(); ?>



</body>

</html>