<?php $__env->startSection('content'); ?>

    <div class="container">
        <div class="authorization-form">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <img src="<?php echo e(url('storage/'.\App\Models\SiteConfig::getLogo())); ?>" class="authorization-logo" style="margin: 15px 0">
                    </div>
                    <form role="form" method="POST" action="<?php echo e(route('login')); ?>">
                        <div class="row">
                            <?php echo e(csrf_field()); ?>

                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label  for="email"><?php echo e(__('E-Mail Address')); ?></label>
                                    <input id="email" type="email" class="form-control" name="email" value="<?php echo e(old('email')); ?>" required autofocus>
                                    <?php if($errors->has('email')): ?>
                                        <span class="help-block">
                                        <strong><?php echo e($errors->first('email')); ?></strong>
                                    </span>
                                    <?php endif; ?>
                                </div>

                                <div class="form-group">
                                    <label  for="password"><?php echo e(__('Password')); ?></label>
                                    <input id="password" type="password" class="form-control" name="password" required>
                                    <?php if($errors->has('password')): ?>
                                        <span class="help-block">
                                        <strong><?php echo e($errors->first('password')); ?></strong>
                                    </span>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <div class="col-sm-6 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" <?php echo e(old('remember') ? 'checked' : ''); ?> class="custom-control-input" name='remember' id="remember-me"/>
                                    <label for="remember-me" class="custom-control-label">  <?php echo e(__('Remember Me')); ?></label>
                                </div>
                            </div>
                            <div class="col-sm-6 text-right">
                                <button type="submit" class="btn btn-primary text-uppercase"><?php echo e(__('Login')); ?></button>
                            </div>
                            <div class="col-sm-12">
                                <a class="grey-text" href="<?php echo e(route('password.request')); ?>">
                                    <?php echo e(__('Forgot Your Password?')); ?>

                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>