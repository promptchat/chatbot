<?php $__env->startSection('content'); ?>
    <h2><?php echo app('translator')->getFromJson('mail.hello1'); ?></h2>
    <br>
    <p><?php echo app('translator')->getFromJson('mail.password_reset_request_for_your_account'); ?></p>
    <br><br><br>
    <a
            target="_blank"
            rel="noopener noreferrer"
            href="<?php echo e($url); ?>"
            style="box-sizing: border-box; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); color: #FFF; display: inline-block; text-decoration: none; -webkit-text-size-adjust: none; background-color: #1db3de; border-top: 10px solid #1db3de; border-right: 18px solid #1db3de; border-bottom: 10px solid #1db3de; border-left: 18px solid #1db3de;"
    ><?php echo app('translator')->getFromJson('mail.reset_password'); ?></a>
    <br><br><br><br>
    <p><?php echo app('translator')->getFromJson('mail.if_you_did_not_request_a_password_reset'); ?></p>
    <br><br><br>
    <div style="color: #74787E; font-size: 12px;">
        <hr>
        <p>
            <?php echo app('translator')->getFromJson('mail.if_you_having_trouble_clicking_reset', ['url' => $url]); ?>
        </p>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>