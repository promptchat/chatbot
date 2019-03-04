<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h2 class="text-center" style="padding: 50px 0;">
                    Welcome to
                    <div>
                        <img style="width: 230px;" src="<?php echo e(url('storage/'.\App\Models\SiteConfig::getLogo())); ?>">
                    </div>
                    <div>
                        <?php echo e(\App\Models\SiteConfig::getTitle()); ?>

                    </div>
                </h2>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>