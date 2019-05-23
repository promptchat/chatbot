<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Accounts management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\User::class)): ?>
                    <div class="row mb-15">
                        <div class="col-sm-12">
                            <a href="<?php echo e(action('UserController@create', ['companyId' => $companyId])); ?>" class="btn btn-primary text-uppercase pull-right">
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
                                        <?php echo app('translator')->getFromJson('Email'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('Role'); ?>
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if($user->deleted_at): ?>
                                    <tr style="opacity: 0.5">
                                        <td>
                                            <?php echo e($user->name); ?>

                                        </td>
                                        <td>
                                            <?php echo e($user->email); ?>

                                        </td>
                                        <td>
                                            <?php echo e($user->getUserRole()); ?>

                                        </td>
                                        <td class="text-right text-nowrap">
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $user)): ?>
                                                <form
                                                        role="form"
                                                        method="post"
                                                        action="<?php echo e(action('UserController@restore', $user)); ?>"
                                                        enctype="multipart/form-data"
                                                >
                                                    <?php echo e(csrf_field()); ?>

                                                    <?php echo e(method_field("patch")); ?>

                                                    <button class="btn btn-link" style="min-width: auto; padding: 0" type="submit"><span class="mi mi-add"></span></button>
                                                </form>
                                            <?php endif; ?>
                                        </td>
                                    </tr>
                                <?php else: ?>
                                    <tr>
                                        <td>
                                            <?php echo e($user->name); ?>

                                        </td>
                                        <td>
                                            <?php echo e($user->email); ?>

                                        </td>
                                        <td>
                                            <?php echo e($user->getUserRole()); ?>

                                        </td>
                                        <td class="text-right text-nowrap">
                                            <div class="d-inline-flex align-items-center">
                                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $user)): ?>
                                                <a href="<?php echo e(action("UserController@edit", $user)); ?>" class="action-button">
                                                    <span class="mi mi-edit"></span>
                                                </a>
                                                <?php endif; ?>
                                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $user)): ?>
                                                    <?php $__env->startComponent('components.delete-record',
                                                            ['action' => 'UserController@destroy',
                                                            'object' => $user]); ?>
                                                    <?php echo $__env->renderComponent(); ?>
                                                <?php endif; ?>
                                            </div>
                                        </td>
                                    </tr>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </tbody>
                        </table>
                        </div>
                        <?php echo e($users->appends(Request::input())->links()); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>