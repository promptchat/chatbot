<?php $__env->startSection('content'); ?>
<div class="container sign-page">
    <div class="row mt-4">
        <div class="col-md-8 offset-md-2 text-center" data-aos="fade-up">
            <div class="info">
                <div class="big-text"><?php echo e(__('Verify Your Email Address')); ?></div>
                <p>
                    <?php if(session('resent')): ?>
                        <div class="alert alert-success" role="alert">
                            <?php echo e(__('A fresh verification link has been sent to your email address.')); ?>

                        </div>
                    <?php endif; ?>
                </p>
                <p>
                    <?php echo e(__('Before proceeding, please check your email for a verification link.')); ?>

                    <br/>
                    <?php echo e(__('If you did not receive the email')); ?>, <a href="<?php echo e(route('verification.resend')); ?>"><?php echo e(__('click here to request another')); ?></a>.
                </p>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>