<!doctype html>
<html lang="<?php echo e(app()->getLocale()); ?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php echo e(\App\Models\SiteConfig::getTitle()); ?></title>
    <meta name="description" content="<?php echo e(\App\Models\SiteConfig::getDescription()); ?>">
    <link href="<?php echo e(mix('css/custom.css')); ?>" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(url('storage/'.\App\Models\SiteConfig::getFavicon())); ?>">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans" rel="stylesheet">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- Scripts -->

</head>

<body id="app">
    <div class="wrapper">
        <header>
            <div class="top-header desktop">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text">

                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="/"><img src="<?php echo e(url('storage/'.\App\Models\SiteConfig::getLogo())); ?>"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
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
                            <a href="/" class="d-inline-block"><img class="logo" src="<?php echo e(url('storage/'.\App\Models\SiteConfig::getLogo())); ?>"></a>
                        </div>
                        <div class="col-md-6 copyright-text">
                            &copy; 2007-<?php echo e(\Carbon\Carbon::now()->format('Y')); ?> <?php echo e(\App\Models\SiteConfig::getTitle()); ?> <br> All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>


    <?php echo app('chat-agent')->getWidget(); ?>




</body>

</html>