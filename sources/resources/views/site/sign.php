<?php $__env->startSection('content'); ?>
    <div class="container sign-page">
        <div class="row main-line">
            <div class="col-lg-3"><span class="big-text"><?php echo app('translator')->getFromJson('site.sign.sign_in'); ?></span></div>
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
                                placeholder=<?php echo e(__('site.sign.email')); ?>

                                        autofocus
                        >
                    </div>

                    <div class="form-group mx-md-3">
                        <input
                                id="password"
                                type="password"
                                class="form-control"
                                name="password"
                                placeholder=<?php echo e(__('site.sign.password')); ?>

                        >
                    </div>
                    <div class="form-group mr-md-3">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" <?php echo e(old('remember') ? 'checked' : ''); ?> class="custom-control-input"
                                   name='remember' id="remember-me"/>
                            <label for="remember-me"
                                   class="custom-control-label text-white">  <?php echo e(__('site.sign.remember_me')); ?></label>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit"
                                class="btn btn-primary text-uppercase"><?php echo e(__('site.sign.sign_in')); ?></button>
                    </div>
                </form>
            </div>
            <div class="col-sm-12 text-right">
                <a class="text-white my-1 d-block" href="<?php echo e(route('password.request')); ?>">
                    <?php echo e(__('site.sign.forgot_password')); ?>

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
                    <div class="big-text"><?php echo app('translator')->getFromJson('site.sign.left_text.new_to_chatbots'); ?></div>
                    <p><?php echo app('translator')->getFromJson('site.sign.left_text.p1', ['title' => \App\Models\SiteConfig::getTitle()]); ?></p>
                    <p><?php echo app('translator')->getFromJson('site.sign.left_text.p2'); ?></p>
                    <div class="big-text"><?php echo e(\App\Models\SiteConfig::getTitle()); ?> <?php echo app('translator')->getFromJson('site.sign.left_text.boosts'); ?></div>
                    <?php echo app('translator')->getFromJson('site.sign.left_text.list'); ?>
                </div>
            </div>
            <div class="col-sm-12 col-lg-8" data-aos="fade-up">
                <div class="register">
                    <div class="big-text text-line"><?php echo app('translator')->getFromJson('site.sign.create_free_account'); ?></div>
                    <form role="form" method="POST" action="<?php echo e(route('register')); ?>">
                        <div class="row">
                            <?php echo e(csrf_field()); ?>


                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="name"><?php echo app('translator')->getFromJson('site.sign.name'); ?></label>
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
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="company_name"><?php echo app('translator')->getFromJson('site.sign.company_name'); ?></label>
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
                                    <label for="register_email"><?php echo app('translator')->getFromJson('site.sign.phone'); ?></label>
                                    <input id="register_email" type="text"
                                           class="form-control <?php echo e($errors->has('register_phone') ? ' is-invalid' : ''); ?>"
                                           name="register_phone" value="<?php echo e(old('register_phone')); ?>" required>

                                    <?php if($errors->has('register_phone')): ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($errors->first('register_phone')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="register_email"><?php echo app('translator')->getFromJson('site.sign.email'); ?></label>
                                    <input id="register_email" type="email"
                                           class="form-control<?php echo e($errors->has('register_email') ? ' is-invalid' : ''); ?>"
                                           name="register_email" value="<?php echo e(old('register_email')); ?>" required>

                                    <?php if($errors->has('register_email')): ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($errors->first('register_email')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="register_password"><?php echo app('translator')->getFromJson('site.sign.password'); ?></label>
                                    <input id="register_password" type="password"
                                           class="form-control<?php echo e($errors->has('register_password') ? ' is-invalid' : ''); ?>"
                                           name="register_password" required>

                                    <?php if($errors->has('register_password')): ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($errors->first('register_password')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="password_confirm"><?php echo app('translator')->getFromJson('site.sign.confirm_password'); ?></label>
                                    <input id="password_confirm" type="password" class="form-control"
                                           name="register_password_confirmation" required>
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" name="terms" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1"><?php echo app('translator')->getFromJson('site.sign.accept'); ?> <a
                                                target="_blank"
                                                href="/terms-and-conditions"><?php echo app('translator')->getFromJson('site.sign.terms_and_conditions'); ?></a> <?php echo app('translator')->getFromJson('site.sign.and'); ?>
                                        <a target="_blank" href="/privacy-policy"><?php echo app('translator')->getFromJson('site.sign.privacy_policy'); ?></a>.</label>
                                    <?php if($errors->has('terms')): ?>
                                        <span class="invalid-feedback d-block" role="alert">
                                            <strong><?php echo e($errors->first('terms')); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="col-sm-12 text-right">
                                <button type="submit"
                                        class="btn btn-primary text-uppercase"><?php echo app('translator')->getFromJson('site.sign.sign_up'); ?></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>