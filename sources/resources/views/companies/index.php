<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Companies management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\Models\Company::class)): ?>
                    <div class="row mb-15">
                        <div class="col-sm-12">
                            <a href="<?php echo e(action('CompanyController@create')); ?>" class="btn btn-primary text-uppercase pull-right">
                                <?php echo app('translator')->getFromJson('Add'); ?>
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
                                        <?php echo app('translator')->getFromJson('Name'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('Company users'); ?>
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__currentLoopData = $companies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $company): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td>
                                        <?php echo e($company->name); ?>

                                    </td>
                                    <td>
                                        <a href="<?php echo e(action("UserController@index", ['companyId' => $company->id])); ?>">
                                            <?php echo app('translator')->getFromJson('Users'); ?>
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
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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


<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>