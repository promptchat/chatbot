<?php $__env->startSection('content'); ?>
    <div class="card">
        <div class="card-body">
            <h2 class="text-center" style="padding: 50px 0;">
                <?php echo app('translator')->getFromJson('site.welcome_to'); ?>
                <div class="mt-3">
                    <img style="width: 230px;" src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>">
                </div>
                <div>
                    <?php echo e(\App\Models\SiteConfig::getTitle()); ?>

                </div>
            </h2>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>