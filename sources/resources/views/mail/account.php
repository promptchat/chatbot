<?php $__env->startSection('content'); ?>
    <h2>Hello, <?php echo e($name); ?>!</h2>
    <br>
    <p>Your <?php echo e(\App\Models\SiteConfig::getTitle()); ?> account is ready, here are your login credentials.</p>
    <p><strong>Username:</strong> <?php echo e($username); ?></p>
    <p><strong>Password:</strong> <?php echo e($password); ?></p>
    <p>Please click the button below to verify your email address.</p>
    <br><br><br>
    <a
            target="_blank"
            rel="noopener noreferrer"
            href="<?php echo e($url); ?>"
            style="box-sizing: border-box; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); color: #FFF; display: inline-block; text-decoration: none; -webkit-text-size-adjust: none; background-color: #1db3de; border-top: 10px solid #1db3de; border-right: 18px solid #1db3de; border-bottom: 10px solid #1db3de; border-left: 18px solid #1db3de;"
    >Verify</a>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>