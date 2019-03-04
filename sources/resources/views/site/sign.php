<?php $__env->startSection('content'); ?>

    <div class="container sign-page">
        <div class="row main-line">
            <div class="col-lg-3"><span class="big-text">Sign In</span></div>
            <div class="col-lg-9 d-flex align-items-center justify-content-end">
                <form role="form" class="form-inline" method="POST" action="<?php echo e(route('login')); ?>">
                    <?php echo e(csrf_field()); ?>


                    <div class="form-group">
                        <input
                            id="email"
                            type="email"
                            class="form-control"
                            name="email"
                            value="<?php echo e(old('email')); ?>"
                            placeholder=<?php echo e(__('E-Mail Address')); ?>

                            autofocus
                        >
                    </div>

                    <div class="form-group mx-md-3">
                        <input
                            id="password"
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder=<?php echo e(__('Password')); ?>

                        >
                    </div>
                    <div class="form-group mr-md-3">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" <?php echo e(old('remember') ? 'checked' : ''); ?> class="custom-control-input" name='remember' id="remember-me"/>
                            <label for="remember-me" class="custom-control-label text-white">  <?php echo e(__('Remember Me')); ?></label>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary text-uppercase"><?php echo e(__('Sign in')); ?></button>
                    </div>
                </form>
            </div>
            <div class="col-sm-12 text-right">
                <a class="text-white my-1 d-block" href="<?php echo e(route('password.request')); ?>">
                    <?php echo e(__('Forgot Your Password?')); ?>

                </a>
            </div>
        </div>

        <div class="form-group text-right">
            <?php if($errors->has('email')): ?>
                <span class="help-block">
                    <strong><?php echo e($errors->first('email')); ?></strong>
                </span>
            <?php endif; ?>
            <?php if($errors->has('password')): ?>
                <span class="help-block">
                    <strong><?php echo e($errors->first('password')); ?></strong>
                </span>
            <?php endif; ?>
        </div>

        <div class="row mt-4">
            <div class="col-sm-12 col-lg-4" data-aos="fade-up">
                <div class="info">
                    <div class="big-text">Not a Member?</div>
                    <p>The benefits of signing up to <?php echo e(\App\Models\SiteConfig::getTitle()); ?>:</p>
                    <ol>
                        <li><?php echo e(\App\Models\SiteConfig::getTitle()); ?> is your game-changing solution in today’s incredibly competitive world of live chat</li>
                        <li>No one produces and designs chat & chatbot solutionsmore creatively, more quickly and more cost-effectively than <?php echo e(\App\Models\SiteConfig::getTitle()); ?></li>
                        <li>Better chat functionalities  mean more response and more response leads to happier customers who will take more answers – bolstering your bottom line.</li>
                        <li>We Make Chat Coversation More Profitable!</li>
                    </ol>
                </div>
            </div>
            <div class="col-sm-12 col-lg-8" data-aos="fade-up">
                <div class="register">
                    <div class="big-text text-line">Become a Member</div>
                    <form role="form" method="POST" action="<?php echo e(route('register')); ?>">
                        <div class="row">
                            <?php echo e(csrf_field()); ?>


                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="register-name"><?php echo e(__('Name')); ?></label>
                                    <input id="register-name" type="text" class="form-control<?php echo e($errors->has('name') ? ' is-invalid' : ''); ?>" name="name" value="<?php echo e(old('name')); ?>" required autofocus>

                                    <?php if($errors->has('register-name')): ?>
                                        <span class="invalid-feedback" role="alert">
                                        <strong><?php echo e($errors->first('register-name')); ?></strong>
                                    </span>
                                    <?php endif; ?>
                                </div>
                                <div class="form-group">
                                    <label for="register-email"><?php echo e(__('E-Mail Address')); ?></label>
                                    <input id="register-email" type="email" class="form-control<?php echo e($errors->has('register-email') ? ' is-invalid' : ''); ?>" name="register-email" value="<?php echo e(old('register-email')); ?>" required>

                                    <?php if($errors->has('register-email')): ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($errors->first('register-email')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="register-password"><?php echo e(__('Password')); ?></label>
                                    <input id="register-password" type="password" class="form-control<?php echo e($errors->has('register-password') ? ' is-invalid' : ''); ?>" name="register-password" required>

                                    <?php if($errors->has('register-password')): ?>
                                        <span class="invalid-feedback" role="alert">
                                    <strong><?php echo e($errors->first('register-password')); ?></strong>
                                </span>
                                    <?php endif; ?>
                                </div>

                                <div class="form-group">
                                    <label for="password-confirm"><?php echo e(__('Confirm Password')); ?></label>
                                    <input id="password-confirm" type="password" class="form-control" name="register-password_confirmation" required>
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" name="terms" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">I accept the <a target="_blank" href="/terms-and-conditions">Terms and Conditions</a> and <a target="_blank" href="/privacy-policy">Privacy Policy</a>.</label>
                                    <?php if($errors->has('terms')): ?>
                                        <span class="invalid-feedback d-block" role="alert">
                                            <strong><?php echo e($errors->first('terms')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="col-sm-12 text-right">
                                <button type="submit" class="btn btn-primary text-uppercase"><?php echo e(__('Sign up')); ?></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>