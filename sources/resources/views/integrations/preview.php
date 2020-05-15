<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="<?php echo e(asset('js/index.js')); ?>" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(\App\Models\SiteConfig::getFavicon()); ?>">

    <link href="<?php echo e(asset('css/preview.css')); ?>" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
</head>
<body>

<?php echo $agent->getWidget(); ?>


<div class="container">
    <div class="code-block">
        <p><?php echo app('translator')->getFromJson('models.agent.instructions'); ?></p>
        <div class="code">
            <code id="code">
                <?php echo nl2br( str_replace(' ', '&nbsp;',e($agent->getWidget()))); ?>

            </code>
        </div>
        <div class="btn-block">
            <button class="btn" onclick="copy('#code')">Copy code</button>
        </div>
    </div>
    <div id=""></div>
</div>
<script>
    function copy(selector){
        var $temp = $("<div>");
        $("body").append($temp);
        $temp.attr("contenteditable", true)
            .html($(selector).html()).select()
            .on("focus", function() { document.execCommand('selectAll',false,null); })
            .focus();
        document.execCommand("copy");
        $temp.remove();
        ale
        rt('Code copied to clipboard');
    }
</script>
</body>
</html>

