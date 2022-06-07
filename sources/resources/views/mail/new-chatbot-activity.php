<?php $__env->startSection('content'); ?>
    <div>
        <?php echo $text; ?>

    </div>
    <br/>
    <a href="<?php echo e(url('/live-chat/conversations/'.$client->id)); ?>"><?php echo t('mail.new_chatbot_activity'); ?></a>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>