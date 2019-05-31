<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h2 class="text-center" style="padding: 50px 0;">
                    Welcome to
                    <div>
                        <img style="width: 230px;" src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>">
                    </div>
                    <div>
                        <?php echo e(\App\Models\SiteConfig::getTitle()); ?>

                    </div>
                </h2>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>