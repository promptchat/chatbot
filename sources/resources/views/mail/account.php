<?php $__env->startSection('content'); ?>
    <h2><?php echo app('translator')->getFromJson('mail.hello'); ?>, <?php echo e($name); ?>!</h2>
    <br>
    <p><?php echo app('translator')->getFromJson('mail.your_login_credentials', ['title' => \App\Models\SiteConfig::getTitle()]); ?></p>
    <p><strong><?php echo app('translator')->getFromJson('mail.username'); ?>:</strong> <?php echo e($username); ?></p>
    <p><strong><?php echo app('translator')->getFromJson('mail.password'); ?>:</strong> <?php echo e($password); ?></p>
    <p><?php echo app('translator')->getFromJson('mail.please_click_the_button'); ?></p>
    <br><br><br>
    <a
            target="_blank"
            rel="noopener noreferrer"
            href="<?php echo e($url); ?>"
            style="box-sizing: border-box; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); color: #FFF; display: inline-block; text-decoration: none; -webkit-text-size-adjust: none; background-color: #1db3de; border-top: 10px solid #1db3de; border-right: 18px solid #1db3de; border-bottom: 10px solid #1db3de; border-left: 18px solid #1db3de;"
    ><?php echo app('translator')->getFromJson('mail.verify'); ?></a>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>