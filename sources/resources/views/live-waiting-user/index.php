<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.left_menu.live_chat_waiting_user"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('LiveChatWaitingUserController@index'),
                'name' => __('site.left_menu.live_chat_waiting_user')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <?php $__env->startComponent('components.grid', ['filterAction' => action('LiveChatWaitingUserController@index')]); ?>
                            <?php $__env->slot('header'); ?>
                                <th scope="col">@sortablelink('agent_id', __('site.analytic.chat_box'))</th>
                                <th scope="col">@sortablelink('ip', __('site.analytic.ip'))</th>
                                <th scope="col">@sortablelink('url', __('site.analytic.url'))</th>
                                <th scope="col">@sortablelink('messages_count', __('site.analytic.messages'))</th>
                                <th scope="col">@sortablelink('last_active', __('site.analytic.last_active'))</th>
                                <th scope="col">@sortablelink('user_email', __('site.analytic.user_email'))</th>
                                <th scope="col" class="small-column text-center">
                                    <a href="<?php echo e(action('LiveChatWaitingUserController@index')); ?>"><i class="fa fa-paint-brush" aria-hidden="true"></i></a>
                                </th>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('filters'); ?>
                                <td><?php $__env->startComponent('components.filter.filterSelect',['name' => 'agent_id', 'options' => $agents]); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'ip']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'url']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'messages_count']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'last_active', 'class' => 'datepicker']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'user_email']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><div class="form-control clear-input-filter"></div></td>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('data'); ?>
                                <?php $__empty_1 = true; $__currentLoopData = $chatSessions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $chatSession): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr>
                                        <td>
                                            <?php echo e($chatSession->agent->name); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->ip); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->url); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->messages_count); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->last_active); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->user_email); ?>

                                        </td>
                                        <td class="text-right text-nowrap">
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('view', $chatSession)): ?>
                                                <a href="<?php echo e(action("LiveChatWaitingUserController@show", $chatSession)); ?>" class="action-button">
                                                    <span class="mi mi-remove-red-eye"></span>
                                                </a>
                                            <?php endif; ?>
                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                    <tr>
                                        <td colspan="100%">
                                            <?php echo app('translator')->getFromJson('site.no_result'); ?>
                                        </td>
                                    </tr>
                                <?php endif; ?>
                            <?php $__env->endSlot(); ?>
                            <?php $__env->slot('paginator'); ?>
                                <?php echo $chatSessions->appends(\Request::except('page'))->render(); ?>

                            <?php $__env->endSlot(); ?>
                        <?php echo $__env->renderComponent(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>