<?php $__env->startSection('content'); ?>
    <h2>Hello!</h2>
    <br>
    <p>You are receiving this email because we received a password reset request for your account.</p>
    <br><br><br>
    <a
            target="_blank"
            rel="noopener noreferrer"
            href="<?php echo e($url); ?>"
            style="box-sizing: border-box; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); color: #FFF; display: inline-block; text-decoration: none; -webkit-text-size-adjust: none; background-color: #1db3de; border-top: 10px solid #1db3de; border-right: 18px solid #1db3de; border-bottom: 10px solid #1db3de; border-left: 18px solid #1db3de;"
    >Reset Password</a>
    <br><br><br><br>
    <p>If you did not request a password reset, no further action is required.</p>
    <br><br><br>
    <div style="color: #74787E; font-size: 12px;">
        <hr>
        <p>If you’re having trouble clicking the "Reset Password" button, copy and paste the URL below<br>
            into your web browser: <a target="_blank" style="word-break: break-all;" href="<?php echo e($url); ?>"><?php echo e($url); ?></a></p>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>