<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Accounts management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('UserController@updatePersonalData', $user)); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <?php echo e(method_field("patch")); ?>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('Name'),
                            'placeholder' => __('Enter the name'),
                            'type' => 'text',
                            'name' => 'name',
                            'value' => $user->name,
                            'required' => true
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('Email'),
                            'placeholder' => __('Enter the email'),
                            'type' => 'email',
                            'name' => 'email',
                            'value' => $user->email,
                            'required' => true
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.image-input',  [
                            'label' => __('Photo'),
                            'name' => 'image_id',
                            'value' => $user->image_id,
                        ]); ?><?php echo $__env->renderComponent(); ?>


                        <?php $__env->startComponent('components.form.checkbox', [
                           'label' => __('Allow short notifications'),
                           'type' => 'checkbox',
                           'name' => 'short_notification_allowed',
                           'value' => $user->short_notification_allowed,

                       ]); ?><?php echo $__env->renderComponent(); ?>


                        <?php $__env->startComponent('components.audio-input',  [
                            'label' => __('Short notification'),
                            'default' => '/audio/notification.mp3',
                            'name' => 'short_notification_id',
                            'value' => $user->short_notification_id,
                        ]); ?><?php echo $__env->renderComponent(); ?>


                        <?php $__env->startComponent('components.form.checkbox', [
                           'label' => __('Allow long notifications'),
                           'name' => 'bring_notification_allowed',
                           'value' => $user->bring_notification_allowed,

                       ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.audio-input',  [
                            'label' => __('Long notification'),
                            'default' => '/audio/bring.mp3',
                            'name' => 'bring_notification_id',
                            'value' => $user->bring_notification_id,
                        ]); ?><?php echo $__env->renderComponent(); ?>
                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('New password'),
                            'type' => 'password',
                            'name' => 'password',
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php $__env->startComponent('components.form.input', [
                            'label' => __('Confirm new password'),
                            'type' => 'password',
                            'name' => 'password_confirmation',
                        ]); ?><?php echo $__env->renderComponent(); ?>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 bottom-btn">
                <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('Save'); ?></button>
            </div>
        </div>
    </form>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>