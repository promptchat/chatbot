<?php $__env->startSection('content'); ?>

    <div class="container">
        <div class="authorization-form">
            <div class="card ">
                <div class="card-body">
                    <div class="text-center">
                        <img src="<?php echo e(url('storage/'.\App\Models\SiteConfig::getLogo())); ?>" class="authorization-logo" style="margin: 15px 0">
                    </div>
                    <?php if(session('status')): ?>
                           <div class="row">
                                <div class="alert alert-success" role="alert">
                                    <?php echo e(session('status')); ?>

                                </div>
                           </div>
                    <?php endif; ?>

                    <form role="form" method="POST" action="<?php echo e(route('password.email')); ?>">
                        <?php echo e(csrf_field()); ?>

                        <div class="row">
                            <div class="form-group col-sm-12">
                                <label for="email"><?php echo e(__('E-Mail Address')); ?></label>
                                <input id="email" type="email" class="form-control" name="email" value="<?php echo e(old('email', $email ?? '')); ?>" required autofocus>
                            </div>
                            <div class="col-sm-12">
                                <?php if($errors->has('email')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('email')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>

                            <div class="col-sm-12 text-right">
                                <button type="submit" class="btn btn-primary text-uppercase"><?php echo e(__('Send Password Reset Link')); ?></button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>