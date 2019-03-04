<script type="text/javascript">
    (function () {var options =
            <?php echo request()->get('options'); ?>;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '<?php echo e(url('widget-js')); ?>'; s.onload = function () { HelpChatWidget.init(options); }; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); })();
</script>