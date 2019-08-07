<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.user.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<div class="container">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('UserController@store')); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <input hidden name="company_id" value="<?php echo e($companyId); ?>">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <div class="form-group">
                            <label for="name"><?php echo app('translator')->getFromJson("site.user.name"); ?></label>
                            <input
                                    class="form-control"
                                    placeholder="<?php echo app('translator')->getFromJson("site.user.name"); ?>"
                                    type="text"
                                    name="name"
                                    value="<?php echo e(old("name")); ?>"
                            >
                            <?php $__env->startComponent('components.errors', ['field' => "name"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
                        <div class="form-group">
                            <label for="email"><?php echo app('translator')->getFromJson("site.user.email"); ?></label>
                            <input
                                    placeholder="<?php echo app('translator')->getFromJson("site.user.email"); ?>"
                                    type="email"
                                    name="email"
                                    value="<?php echo e(old("email")); ?>"
                                    class="form-control"
                            >
                            <?php $__env->startComponent('components.errors', ['field' => "email"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
                        <div class="form-group">
                            <label for="password"><?php echo app('translator')->getFromJson("site.user.password"); ?></label>
                            <input
                                    placeholder="<?php echo app('translator')->getFromJson("site.user.password"); ?>"
                                    type="password"
                                    name="password"
                                    value="<?php echo e(old("password")); ?>"
                                    class="form-control"
                            >
                            <?php $__env->startComponent('components.errors', ['field' => "password"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
                        <div class="form-group">
                            <label for="title"><?php echo app('translator')->getFromJson("site.user.role"); ?></label>
                            <?php $__env->startComponent('components.select', [
                                'empty' => __('site.user.select_role'),
                                'options' => $userRoles,
                                'name' => 'role',
                            ]); ?><?php echo $__env->renderComponent(); ?>
                            <?php $__env->startComponent('components.errors', ['field' => "role"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>

                        <?php $__env->startComponent('components.image-input',  [
                            'label' => __('site.user.photo'),
                            'name' => 'image_id',
                        ]); ?><?php echo $__env->renderComponent(); ?>

                        <?php echo $__env->make('components.form.select2Multiple', [
                            'label' => __('site.user.departments'),
                            'name' => 'user_departments[]',
                            'selected' => old('user_departments') ?: $departments->keys()->slice(0,1)->toArray(),
                            'options' => $departments,
                        ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 bottom-btn">
                <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
            </div>
        </div>
    </form>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>