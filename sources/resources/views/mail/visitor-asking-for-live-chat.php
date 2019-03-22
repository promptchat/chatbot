<?php $__env->startSection('content'); ?>
    <p>
        You have a website visitor asking for live chat.
        Click to login to your promptchat account <a href="https://www.promptchat.com/live-chat">https://www.promptchat.com/live-chat</a>
    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>