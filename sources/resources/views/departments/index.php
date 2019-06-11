<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\Models\Department::class)): ?>
    <a href="<?php echo e(action('DepartmentController@create', ['companyId' => $companyId])); ?>" class="btn btn-primary text-uppercase pull-right">
        <?php echo app('translator')->getFromJson('site.buttons.add'); ?>
    </a>
<?php endif; ?>
<div class="table-responsive">
    <table class="table table-sm">
        <thead>
        <tr>
            <th>
                <div class="th-label">
                    <?php echo app('translator')->getFromJson('site.department.department'); ?>
                </div>
            </th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <?php $__empty_1 = true; $__currentLoopData = $departments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $department): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <tr>
                <td><?php echo e($department->name); ?></td>
                <td class="text-right text-nowrap">
                    <div class="d-inline-flex align-items-center">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $department)): ?>
                            <a href="<?php echo e(action("DepartmentController@edit", $department)); ?>" class="action-button">
                                <span class="mi mi-edit"></span>
                            </a>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $department)): ?>
                            <?php $__env->startComponent('components.delete-record',
                                    ['action' => 'DepartmentController@destroy',
                                    'object' => $department]); ?>
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