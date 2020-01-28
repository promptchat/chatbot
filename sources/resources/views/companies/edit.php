<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.company.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('CompanyController@index'),
                'name' => __('site.company.page_title')
            ],
            [
                'url' => action('CompanyController@edit', $company),
                'name' => __('site.buttons.edit')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <form
                        role="form"
                        method="post"
                        action="<?php echo e(action('CompanyController@update', $company)); ?>"
                        enctype="multipart/form-data"
                >
                    <?php echo e(csrf_field()); ?>

                    <?php echo e(method_field("patch")); ?>

                    <div class="row">
                        <div class="col-sm-12 col-md-6 offset-md-3">
                            <div class="my-2 plan-block">
                                <h3 class=""><?php echo app('translator')->getFromJson('site.wallet.plan.header'); ?></h3>
                                <hr>
                                <div class="font-italic">
                                    <p><?php echo app('translator')->getFromJson('site.wallet.plan.title'); ?>
                                        : <?php echo e($plan->name ?? 'no plan'); ?></p>
                                    <p><?php echo app('translator')->getFromJson('site.wallet.plan.operators'); ?>
                                        : <?php echo e($plan->limmit_operators ?? __('site.plan.user.unlimited')); ?></p>
                                    <p><?php echo app('translator')->getFromJson('site.wallet.plan.departments'); ?>
                                        : <?php echo e($plan->limit_departments ?? __('site.plan.user.unlimited')); ?></p>
                                    <p><?php echo app('translator')->getFromJson('site.wallet.plan.chatboxes'); ?>
                                        : <?php echo e($plan->limit_chatboxes ?? __('site.plan.user.unlimited')); ?></p>
                                    <p><?php echo app('translator')->getFromJson('site.wallet.plan.calendars'); ?>
                                        : <?php echo e($plan->limit_calendars ?? __('site.plan.user.unlimited')); ?></p>

                                    <p class="text-info">
                                        Valid
                                        till: <?php echo e(Carbon\Carbon::parse($company->companyPlan->valid_till)->format('d/m/Y')); ?>

                                    </p>
                                </div>
                                <a href="<?php echo e(action('PlanController@buy')); ?>" class="btn btn-info">Change plan</a>
                                <?php if($company->companyPlan->is_subscribed): ?>
                                    <p class="font-italic mb-0 mt-3">
                                        <u>
                                            You are using subscription for with this plan. If you want to unsubscribe
                                            tell us please.
                                        </u>
                                    </p>
                                <?php endif; ?>
                            </div>

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
                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.company.phone'); ?></label>
                                <?php $__env->startComponent('components.select', [
                                'name' => 'phone_number_id',
                                'empty' => 'none',
                                 'default' => $company->phone_number_id,
                                 'options' => $phoneNumbers->mapWithKeys(function(\App\Models\PhoneNumber $number) {
                                         return [$number->id => $number->operator . " ({$number->sim_serial_number})"];
                                     })
                             ]); ?>
                                <?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.errors', ['field' => "phone_number_id"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <a href="<?php echo e(action("UserController@index", ['companyId' => $company->id])); ?>">
                                <?php echo app('translator')->getFromJson('site.company.company_users'); ?>
                            </a>
                            <hr class="my-4">
                            <?php echo $__env->make('departments.index', ['departments' => $company->departments, 'companyId' => $company->id], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 bottom-btn">
                            <button type="submit"
                                    class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>