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
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\Models\Company::class)): ?>
                    <div class="row mb-15">
                        <div class="col-sm-12">
                            <a href="<?php echo e(action('CompanyController@create')); ?>" class="btn btn-primary text-uppercase pull-right">
                                <?php echo app('translator')->getFromJson('site.buttons.add'); ?>
                            </a>
                        </div>
                    </div>
                <?php endif; ?>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="table-responsive">
                        <table class="table table-sm">
                            <thead>
                            <tr>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson("site.company.name"); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.company.company_users'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.company.wallet'); ?>
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__empty_1 = true; $__currentLoopData = $companies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $company): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <tr>
                                    <td>
                                        <?php echo e($company->name); ?>

                                    </td>
                                    <td>
                                        <a href="<?php echo e(action("UserController@index", ['companyId' => $company->id])); ?>">
                                            <?php echo app('translator')->getFromJson('site.company.users'); ?>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="<?php echo e(action('WalletController@show', Auth::user()->company)); ?>">
                                            <?php echo app('translator')->getFromJson('site.company.wallet'); ?>
                                        </a>
                                    </td>
                                    <td class="text-right text-nowrap">
                                        <div class="d-inline-flex align-items-center">
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $company)): ?>
                                                <a href="<?php echo e(action("CompanyController@edit", $company)); ?>" class="action-button">
                                                    <span class="mi mi-edit"></span>
                                                </a>
                                            <?php endif; ?>
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $company)): ?>
                                                <?php $__env->startComponent('components.delete-record',
                                                        ['action' => 'CompanyController@destroy',
                                                        'object' => $company]); ?>
                                                <?php echo $__env->renderComponent(); ?>
                                            <?php endif; ?>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                <tr>
                                    <td colspan="100%">
                                        <?php echo app('translator')->getFromJson('site.no_result'); ?>
                                    </td>
                                </tr>
                            <?php endif; ?>
                            </tbody>
                        </table>
                        </div>
                        <?php echo e($companies->appends(Request::input())->links()); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>