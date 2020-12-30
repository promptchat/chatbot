<?php $minifier = new \MatthiasMullie\Minify\JS(resource_path('views/widget/widget.js')); ?>
<?php echo $minifier->minify(); ?>

HelpChatWidget.host = "<?php echo rtrim(url(''), "/"); ?>";
