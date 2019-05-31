<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="authorization-form">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <img src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>" class="authorization-logo" style="margin: 15px 0">
                    </div>

                    <form role="form" method="POST" action="<?php echo e(route('password.request')); ?>">
                        <div class="row">
                        <?php echo e(csrf_field()); ?>

                            <div class="form-group col-sm-12">
                                <label for="email"><?php echo e(__('E-Mail Address')); ?></label>
                                <input id="email" type="email" class="form-control" name="email" value="<?php echo e($email ?? old('email')); ?>" required autofocus>
                                <?php if($errors->has('email')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('email')); ?></strong>
                                    </span>

                                <?php endif; ?>
                            </div>

                            <div class="form-group col-sm-12">
                                <label for="password"><?php echo e(__('Password')); ?></label>
                                <input id="password" type="password" class="form-control" name="password" required>

                                <?php if($errors->has('password')): ?>
                                    <span class="invalid-feedback" role="alert">
                                        <strong><?php echo e($errors->first('password')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>

                            <div class="form-group col-sm-12">
                                <label for="password_confirmation"><?php echo e(__('Confirm Password')); ?></label>
                                <input id="password_confirmation" type="password" class="form-control" name="password_confirmation" required>
                            </div>

                            <div class="form-group col-sm-12">
                                <?php if($errors->has('password_confirmation')): ?>
                                    <span class="invalid-feedback" role="alert">
                                        <strong><?php echo e($errors->first('password_confirmation')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>

                            <div class="col-sm-12 text-right">
                                <button type="submit" class="btn btn-primary">
                                    <?php echo e(__('Reset Password')); ?>

                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>