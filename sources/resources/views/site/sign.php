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
                    <div class="big-text">New to Chatbots?</div>
                    <p>Built for online marketplaces, <?php echo e(\App\Models\SiteConfig::getTitle()); ?> helps automate simple tasks & create better experiences for your customers.</p>
                    <p>An interactive agent using the ever so popular conversational interface which conducts a conversation between website visitors and website/listing owners via textual and visual methods.</p>
                    <div class="big-text"><?php echo e(\App\Models\SiteConfig::getTitle()); ?> boosts:</div>
                    <ul>
                        <li>built in calendar based event bookings and management</li>
                        <li>Integration to Google Maps</li>
                        <li>Social Messenger Integration (WhatsApp, FB Messenger)</li>
                        <li>Customization toolbox</li>
                        <li>Analytics</li>
                        <li>API for 3rd party systems integration</li>
                    </ul>
                    <p>
                        Contact:
                        <br>
                        <a href="tel:3393092199">USA (339)309-2199</a>
                        <br>
                        <a href="tel:447492241828">UK (44)7492 241-828</a>
                    </p>

                </div>
            </div>
            <div class="col-sm-12 col-lg-8" data-aos="fade-up">
                <div class="register">
                    <div class="big-text text-line">Create a free account</div>
                    <form role="form" method="POST" action="<?php echo e(route('register')); ?>">
                        <div class="row">
                            <?php echo e(csrf_field()); ?>


                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="name"><?php echo e(__('Name')); ?></label>
                                    <input
                                            id="name"
                                            type="text"
                                            class="form-control<?php echo e($errors->has('name') ? ' is-invalid' : ''); ?>"
                                            name="name"
                                            value="<?php echo e(old('name')); ?>"
                                            required
                                            autofocus
                                    >
                                    <?php if($errors->has('name')): ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($errors->first('name')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                                <div class="form-group">
                                    <label for="company_name"><?php echo e(__('Company name')); ?></label>
                                    <input
                                            id="company_name"
                                            type="text"
                                            class="form-control<?php echo e($errors->has('company_name') ? ' is-invalid' : ''); ?>"
                                            name="company_name"
                                            value="<?php echo e(old('company_name')); ?>"
                                            required
                                    >
                                    <?php if($errors->has('company_name')): ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($errors->first('company_name')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="register_email"><?php echo e(__('E-Mail Address')); ?></label>
                                    <input id="register_email" type="email" class="form-control<?php echo e($errors->has('register_email') ? ' is-invalid' : ''); ?>" name="register_email" value="<?php echo e(old('register_email')); ?>" required>

                                    <?php if($errors->has('register_email')): ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($errors->first('register_email')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                                <div class="form-group">
                                    <label for="register_password"><?php echo e(__('Password')); ?></label>
                                    <input id="register_password" type="password" class="form-control<?php echo e($errors->has('register_password') ? ' is-invalid' : ''); ?>" name="register_password" required>

                                    <?php if($errors->has('register_password')): ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($errors->first('register_password')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>

                                <div class="form-group">
                                    <label for="password_confirm"><?php echo e(__('Confirm Password')); ?></label>
                                    <input id="password_confirm" type="password" class="form-control" name="register_password_confirmation" required>
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

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>