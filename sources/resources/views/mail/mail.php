<div style="background-color: #f4f4f4; padding: 15px;">
    <div style="max-width:640px; margin: 0 auto; text-align: center">
        <a href="<?php echo e(url('/')); ?>">
            <img style="max-width: 150px;" src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>" alt="">
        </a>
    </div>
</div>

<div style="max-width:640px; margin: 0 auto; text-align: center; padding: 15px; font-size: 14px; font-family: open-sans, Arial, sans-serif">
    <?php echo $__env->yieldContent('content'); ?>
</div>

<div style="background-color: #f4f4f4; padding: 25px 15px 25px; font-size: 14px; font-family: open-sans, Arial, sans-serif">
    <div style="max-width:640px; margin: 0 auto; text-align: center;">
        <div style="text-align: center; color: #74787E; font-size: 13px;">
            ©<?php echo e(\Carbon\Carbon::now()->format('Y')); ?> <?php echo e(\App\Models\SiteConfig::getTitle()); ?>: All Rights Reserved
        </div>
    </div>
</div>
