<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.company.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('CompanyController@update', $company)); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <?php echo e(method_field("patch")); ?>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <div class="form-group">
                            <label for="title"><?php echo app('translator')->getFromJson('site.company.name'); ?></label>
                            <input
                                    placeholder="<?php echo app('translator')->getFromJson('site.company.name'); ?>"
                                    type="text"
                                    name="name"
                                    value="<?php echo e($company->name ?? old("name")); ?>"
                                    class="form-control"
                            >
                            <?php $__env->startComponent('components.errors', ['field' => "name"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
                        <a href="<?php echo e(action("UserController@index", ['companyId' => $company->id])); ?>">
                            <?php echo app('translator')->getFromJson('site.company.company_users'); ?>
                        </a>
                        <hr class="my-4">
                        <?php echo $__env->make('departments.index', ['departments' => $company->departments, 'companyId' => $company->id], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
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