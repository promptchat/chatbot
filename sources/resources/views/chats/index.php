<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.chatbots.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\Models\ChatUser\ChatUser::class)): ?>
                    <div class="row mb-15">
                        <div class="col-sm-12">
                            <a href="<?php echo e(action('ChatController@create')); ?>"
                               class="btn btn-primary text-uppercase pull-right">
                                <?php echo app('translator')->getFromJson('site.buttons.add'); ?>
                            </a>
                        </div>
                    </div>
                <?php endif; ?>
                <div class="row">
                    <div class="col-sm-12">
                        <?php $__env->startComponent('components.grid', ['filterAction' => action('ChatController@index')]); ?>
                            <?php $__env->slot('header'); ?>
                                <th scope="col">@sortablelink('name', __('site.chatbots.chat_name'))</th>
                                <th></th>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('filters'); ?>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'name']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td>
                                    <div class="form-control clear-input-filter"></div>
                                </td>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('data'); ?>
                                <?php $__empty_1 = true; $__currentLoopData = $chats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $chat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>

                                    <tr class="<?php echo e($chat->limited ? 'limited' : ''); ?>">
                                        <td>
                                            <?php echo e($chat->name); ?>

                                        </td>
                                        <td class="text-right text-nowrap">
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $chat)): ?>
                                                <a href="<?php echo e(action("ChatController@edit", $chat)); ?>"
                                                   class="action-button">
                                                    <span class="mi mi-edit"></span>
                                                </a>
                                            <?php endif; ?>
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $chat)): ?>
                                                <?php $__env->startComponent('components.delete-record',
                                                        ['action' => 'ChatController@destroy',
                                                        'object' => $chat]); ?>
                                                <?php echo $__env->renderComponent(); ?>
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
                                <?php echo $chats->appends(\Request::except('page'))->render(); ?>

                            <?php $__env->endSlot(); ?>
                        <?php echo $__env->renderComponent(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>