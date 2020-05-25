<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.user.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('UserController@editPersonalData', $user),
                'name' => __('site.user.page_title')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    

    
    
    
    
    

    
    
    
    
    
    

    


    
    
    
    
    
    


    
    
    
    

    

    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    
    
    
    
    

    <div class="row">
        <div class="col-lg-4 profile-info">
            <div class="card">
                <div class="card-img-top profile-back">
                    <div class="image-content">
                        <div class="meta-box text-white">
                            <div class="meta-image text-center">
                                <form action="<?php echo e(action('UserController@editProfileImage', $user->id)); ?>">
                                    <label>
                                        <input style="display:none" type="file" class="image-input-btn">
                                        <img class="img-circle" src="<?php echo e($user->image->url ?? '/img/default_operator_img.svg'); ?>"
                                             alt="">
                                        <br/>
                                        <span><i>(click to edit)</i></span>
                                    </label>
                                </form>
                                <h3 class="my-2"><?php echo e($user->name); ?></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="personal-info">
                        <tr>
                            <th>Company</th>
                            <td><?php echo e($user->company->name); ?></td>
                        </tr>
                        <tr>
                            <th>Departments</th>
                            <td><?php echo e($user->departments()->pluck('name')->join(' ')); ?></td>
                        </tr>
                        <tr>
                            <th>Role</th>
                            <td><?php echo e($user->getUserRole()); ?></td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <ul class="nav nav-tabs row" style="box-shadow: none" role="tablist" id="nav-tab">
                <li class="col-md-3 nav-btn">
                    <a href="#home" data-toggle="tab" class="active">
                        <div class="text-center nav-tab-button py-2">
                            <i class="fa fa-user-circle"></i><br/>
                            <strong>Personal data</strong>
                        </div>
                    </a>
                </li>
                <li class="col-md-3 nav-btn">
                    <a href="#menu2" data-toggle="tab" data-toggle="tab">
                        <div class="text-center nav-tab-button py-2">
                            <i class="fa fa-bell"></i><br/>
                            <strong>Notifications</strong>
                        </div>
                    </a>
                </li>
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $user)): ?>
                    <li class="col-md-3 nav-btn">
                        <a href="#menu1" data-toggle="tab" data-toggle="tab">
                            <div class="text-center nav-tab-button py-2">
                                <i class="fa fa-cog"></i><br/>
                                <strong>Settings</strong>
                            </div>
                        </a>
                    </li>
                <?php endif; ?>
            </ul>

            <div class="tab-content mt-3" id="nav-tabContent">
                <div id="home" class="tab-pane fade active show" role="tabpanel">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-box">
                                <form action="<?php echo e(action('UserController@updatePersonalData', $user)); ?>" method="POST">
                                    <?php echo e(csrf_field()); ?>

                                    <?php echo e(method_field('PATCH')); ?>

                                    <div class="py-3 fields">
                                        <div class="my-3">
                                            <?php $__env->startComponent('components.form.input', [
                                                'label' => __('site.user.name'),
                                                'placeholder' => __('site.user.name'),
                                                'type' => 'text',
                                                'name' => 'name',
                                                'value' => $user->name,
                                                'required' => true
                                            ]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>
                                        <div class="my-3">
                                            <?php $__env->startComponent('components.form.input', [
                                                'label' => __('site.user.email'),
                                                'placeholder' => __('site.user.email'),
                                                'type' => 'email',
                                                'name' => 'email',
                                                'value' => $user->email,
                                                'required' => true
                                            ]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div class="action-block py-3">
                                            <button type="submit"
                                                    class="btn btn-primary text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-box">
                                <form action="<?php echo e(action('UserController@updatePassword', $user)); ?>" method="POST">
                                    <?php echo e(csrf_field()); ?>

                                    <?php echo e(method_field('PATCH')); ?>

                                    <div class="py-3">
                                        <div class="my-3">
                                            <?php $__env->startComponent('components.form.input', [
                                                'label' => __('site.user.new_password'),
                                                'type' => 'password',
                                                'name' => 'password',
                                            ]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>
                                        <div class="my-3">
                                            <?php $__env->startComponent('components.form.input', [
                                                'label' => __('site.user.confirm_new_password'),
                                                'type' => 'password',
                                                'name' => 'password_confirmation',
                                            ]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div class="action-block py-3">
                                            <button type="submit"
                                                    class="btn btn-primary text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu2" class="tab-pane fade" role="tabpanel">
                    <div class="row">
                        <div class="col-md-6 form-field form-box">
                            <form action="<?php echo e(action('UserController@updateSettingsData', $user)); ?>" method="POST">
                                <?php echo e(csrf_field()); ?>

                                <?php echo e(method_field('PATCH')); ?>

                                <div class="py-3">
                                    <?php if(Gate::allows('live-chat', \Auth::user())): ?>
                                        <div class="my-3 text-center">
                                            <?php $__env->startComponent('components.form.checkbox', [
                                               'label' => __('site.user.allow_short_notifications'),
                                               'type' => 'checkbox',
                                               'name' => 'short_notification_allowed',
                                               'value' => $user->short_notification_allowed,

                                           ]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>
                                        <div class="my-3 text-center">
                                            <?php $__env->startComponent('components.audio-input',  [
                                                'label' => __('site.user.short_notification'),
                                                'default' => '/audio/notification.mp3',
                                                'name' => 'short_notification_id',
                                                'value' => $user->short_notification_id,
                                            ]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>

                                        <div class="my-3 text-center">
                                            <?php $__env->startComponent('components.form.checkbox', [
                                               'label' => __('site.user.allow_long_notifications'),
                                               'name' => 'bring_notification_allowed',
                                               'value' => $user->bring_notification_allowed,

                                           ]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>

                                        <div class="my-3 text-center">
                                            <?php $__env->startComponent('components.audio-input',  [
                                                'label' => __('site.user.long_notification'),
                                                'default' => '/audio/bring.mp3',
                                                'name' => 'bring_notification_id',
                                                'value' => $user->bring_notification_id,
                                            ]); ?><?php echo $__env->renderComponent(); ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <div class="text-center">
                                    <div class="action-block py-3">
                                        <button type="submit"
                                                class="btn btn-primary text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $user)): ?>
                    <div id="menu1" class="tab-pane fade" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 form-field form-box">
                                <form action="<?php echo e(action('UserController@updateSpecificData', $user)); ?>" method="POST">
                                    <?php echo e(csrf_field()); ?>

                                    <?php echo e(method_field('PATCH')); ?>

                                    <div class="py-3">
                                        <?php echo $__env->make('components.form.select2Multiple', [
                                           'label' => __('site.user.departments'),
                                           'name' => 'user_departments[]',
                                           'options' => $departments,
                                           'selected' => $user->userDepartments->pluck('department_id')->toArray()
                                       ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                        <?php if(!$user->isSuperAdmin()): ?>
                                            <div class="form-group">
                                                <label for="title"><?php echo app('translator')->getFromJson("site.user.role"); ?></label>
                                                <?php $__env->startComponent('components.select', [
                                                    'empty' => __('site.user.select_role'),
                                                    'options' => $userRoles,
                                                    'name' => 'role',
                                                    'default' => $user->role
                                                ]); ?><?php echo $__env->renderComponent(); ?>
                                                <?php $__env->startComponent('components.errors', ['field' => "role"]); ?><?php echo $__env->renderComponent(); ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <div class="text-center">
                                        <div class="action-block py-3">
                                            <button type="submit"
                                                    class="btn btn-primary text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>