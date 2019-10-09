<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.user.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('UserController@index'),
                'name' => __('site.user.page_title')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\User::class)): ?>
                    <div class="row mb-15">
                        <div class="col-sm-12">
                            <a href="<?php echo e(action('UserController@create', ['companyId' => $companyId])); ?>"
                               class="btn btn-primary text-uppercase pull-right">
                                <?php echo app('translator')->getFromJson('site.buttons.add'); ?>
                            </a>
                        </div>
                    </div>
                <?php endif; ?>
                <?php $__env->startComponent('components.grid', ['filterAction' => action('UserController@index')]); ?>
                    <?php $__env->slot('header'); ?>

                        <th scope="col">
                            <?php echo app('translator')->getFromJson('site.user.name'); ?>
                        </th>
                        <th scope="col">
                            <?php echo app('translator')->getFromJson('site.user.email'); ?>
                        </th>
                        <th scope="col">
                            <?php echo app('translator')->getFromJson('site.user.role'); ?>
                        </th>
                        <th scope="col" class="small-column text-center">

                        </th>
                    <?php $__env->endSlot(); ?>

                        <?php $__env->slot('filters'); ?>
                            <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'name']); ?><?php echo $__env->renderComponent(); ?></td>
                            <td><?php $__env->startComponent('components.filter.filterInput',['name' => 'email']); ?><?php echo $__env->renderComponent(); ?></td>
                            <td><?php $__env->startComponent('components.filter.filterSelect',['name' => 'role', 'options' => $userRoles]); ?><?php echo $__env->renderComponent(); ?></td>
                            <td>
                                <div class="form-control clear-input-filter"></div>
                            </td>
                        <?php $__env->endSlot(); ?>

                    <?php $__env->slot('data'); ?>
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

                                                <button class="btn btn-link" style="min-width: auto; padding: 0"
                                                        type="submit"><span class="mi mi-add"></span></button>
                                            </form>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php else: ?>

                                <tr class="<?php echo e($user->limited ? 'limited' : ''); ?>">
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
                                                <a href="<?php echo e(action("UserController@edit", $user)); ?>"
                                                   class="action-button">
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
                    <?php $__env->endSlot(); ?>
                <?php echo $__env->renderComponent(); ?>
            </div>
            <?php echo e($users->appends(Request::input())->links()); ?>

        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>