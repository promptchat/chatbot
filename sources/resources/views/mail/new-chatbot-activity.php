<?php $__env->startSection('content'); ?>

    <p>New user is using chatbot!</p>
    <br/>
    <a href="<?php echo e(action('AnalyticsController@showChatSessionStatistic', $seance->session)); ?>"></a>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>