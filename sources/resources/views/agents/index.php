<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.chat_box.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\Models\Agent::class)): ?>
                    <div class="row mb-15">
                        <div class="col-sm-12">
                            <a href="<?php echo e(action('AgentController@create')); ?>" class="btn btn-primary text-uppercase pull-right">
                                <?php echo app('translator')->getFromJson('site.buttons.add'); ?>
                            </a>
                        </div>
                    </div>
                <?php endif; ?>
                <div class="row">
                    <div class="col-sm-12">
                        <?php $__env->startComponent('components.grid', ['filterAction' => action('AgentController@index')]); ?>
                            <?php $__env->slot('header'); ?>
                                <th scope="col">@sortablelink('name', __('site.chat_box.name_small'))</th>
                                <th scope="col">@sortablelink('department.name', __('site.chat_box.department'))</th>
                                <th scope="col"><?php echo app('translator')->getFromJson('site.chat_box.contacts'); ?></th>
                                <th scope="col">@sortablelink('chatUser.name', __('site.chat_box.chat_bot'))</th>
                                <th scope="col" class="small-column text-center">
                                    <a href="<?php echo e(action('AgentController@index')); ?>"><i class="fa fa-paint-brush" aria-hidden="true"></i></a>
                                </th>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('filters'); ?>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'name']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterSelect',['name' => 'department_id', 'options' => $departments]); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><div class="form-control clear-input-filter"></div></td>
                                <td><?php $__env->startComponent('components.filter.filterSelect',['name' => 'chat_user_id', 'options' => $userChats]); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><div class="form-control clear-input-filter"></div></td>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('data'); ?>
                                <?php $__empty_1 = true; $__currentLoopData = $agents; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $agent): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr class="<?php echo e($agent->limited ? 'limited' : ''); ?>">
                                        <td>
                                            <?php echo e($agent->name); ?>

                                        </td>
                                        <td>
                                            <?php echo e($agent->department->name ?? ''); ?>

                                        </td>
                                        <td>
                                            <?php $__currentLoopData = $agent->contacts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $contact): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <div>
                                                    <img class="agent-contact" src=<?php echo e($contact->contactType->getIcon()); ?> alt="">
                                                    <span style="vertical-align: top"><?php echo e($contact->value); ?></span>
                                                </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </td>
                                        <td>
                                            <?php echo e($agent->chatUser->name ?? ''); ?>

                                        </td>
                                        <td class="text-right text-nowrap">
                                            <div class="d-inline-flex align-items-center">
                                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $agent)): ?>
                                                    <a href="<?php echo e(action("AgentController@edit", $agent)); ?>" class="action-button">
                                                        <span class="mi mi-edit"></span>
                                                    </a>
                                                <?php endif; ?>
                                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $agent)): ?>
                                                    <?php $__env->startComponent('components.delete-record',
                                                            ['action' => 'AgentController@destroy',
                                                            'object' => $agent]); ?>
                                                    <?php echo $__env->renderComponent(); ?>
                                                <?php endif; ?>
                                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('view', $agent)): ?>
                                                    <a href="<?php echo e(action("AgentController@show", $agent)); ?>" class="action-button d-inline-flex align-items-center flex-column">
                                                        <span class="mi mi-remove-red-eye"></span><span class="ml-1 text-uppercase">
                                                        <?php echo app('translator')->getFromJson('site.chat_box.code'); ?>
                                                    </span>
                                                    </a>
                                                <?php endif; ?>
                                            </div>
                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                    <tr>
                                        <td colspan="100%">
                                            <?php echo app('translator')->getFromJson('models.no_result'); ?>
                                        </td>
                                    </tr>
                                <?php endif; ?>
                            <?php $__env->endSlot(); ?>
                            <?php $__env->slot('paginator'); ?>
                                <?php echo $agents->appends(\Request::except('page'))->render(); ?>

                            <?php $__env->endSlot(); ?>
                        <?php echo $__env->renderComponent(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>