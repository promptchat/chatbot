<?php $__env->startSection('content'); ?>

    <div class="">
        <div class="authorization-form">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <img src="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>" class="authorization-logo" style="margin: 15px 0">
                    </div>

                    <form role="form" method="POST" action="<?php echo e(route('register')); ?>">
                        <div class="row">
                        <?php echo e(csrf_field()); ?>


                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label for="name"><?php echo e(__('Name')); ?></label>
                                    <input id="name" type="text" class="form-control<?php echo e($errors->has('name') ? ' is-invalid' : ''); ?>" name="name" value="<?php echo e(old('name')); ?>" required autofocus>

                                    <?php if($errors->has('name')): ?>
                                        <span class="invalid-feedback" role="alert">
                                        <strong><?php echo e($errors->first('name')); ?></strong>
                                    </span>
                                    <?php endif; ?>
                                </div><div class="form-group">
                                    <label for="email"><?php echo e(__('E-Mail Address')); ?></label>
                                    <input id="email" type="email" class="form-control<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" name="email" value="<?php echo e(old('email')); ?>" required>

                                    <?php if($errors->has('email')): ?>
                                        <span class="invalid-feedback" role="alert">
                                    <strong><?php echo e($errors->first('email')); ?></strong>
                                </span>
                                    <?php endif; ?>
                                </div>

                                <div class="form-group">
                                    <label for="password"><?php echo e(__('Password')); ?></label>
                                    <input id="password" type="password" class="form-control<?php echo e($errors->has('password') ? ' is-invalid' : ''); ?>" name="password" required>

                                    <?php if($errors->has('password')): ?>
                                        <span class="invalid-feedback" role="alert">
                                    <strong><?php echo e($errors->first('password')); ?></strong>
                                </span>
                                    <?php endif; ?>
                                </div>

                                <div class="form-group">
                                    <label for="password-confirm"><?php echo e(__('Confirm Password')); ?></label>
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                                </div>
                            </div>

                            <div class="col-sm-12 text-right">
                                <button type="submit" class="btn btn-primary text-uppercase"><?php echo e(__('Register')); ?></button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>