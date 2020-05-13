<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <div class="row mb-15">
                <div class="col-sm-12">
                    <a href="<?php echo e(action('IntegrationsController@create')); ?>" class="btn btn-primary float-right"><?php echo app('translator')->getFromJson('site.buttons.add'); ?></a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <?php $__env->startComponent('components.grid', ['filterAction' => action('IntegrationsController@index')]); ?>
                        <?php $__env->slot('header'); ?>
                            <th><?php echo app('translator')->getFromJson('site.integrations.name'); ?></th>
                            <th width="23%"><?php echo app('translator')->getFromJson('site.integrations.chatbot'); ?></th>
                            <th width="23%"><?php echo app('translator')->getFromJson('site.integrations.service'); ?></th>
                            <th width="10%"></th>
                        <?php $__env->endSlot(); ?>

                        <?php $__env->slot('filters'); ?>
                            <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'name']); ?><?php echo $__env->renderComponent(); ?></td>
                            <td><?php $__env->startComponent('components.filter.filterSelect', ['name' => 'chat_user_id', 'options' => $chats]); ?><?php echo $__env->renderComponent(); ?></td>
                            <td><?php $__env->startComponent('components.filter.filterSelect',['name' => 'service', 'options' => \App\Models\ExternalChatBot\ExternalChatBot::getServices()]); ?><?php echo $__env->renderComponent(); ?></td>
                            <td></td>
                        <?php $__env->endSlot(); ?>

                        <?php $__env->slot('data'); ?>
                            <?php $__currentLoopData = $integrations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $integration): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td>
                                        <?php echo e($integration->name); ?>

                                    </td>
                                    <td>
                                        <a href="<?php echo e(action('ChatController@edit', $integration->chatUser)); ?>">
                                            <?php echo e($integration->chatUser->name); ?>

                                        </a>
                                    </td>
                                    <td>
                                        <?php echo $integration->serviceHtml(); ?>

                                    </td>
                                    <td>
                                        <a href="<?php echo e(action('IntegrationsController@edit', $integration)); ?>" class="mx-1" title="edit">
                                            <span class="mi mi-edit"></span>
                                        </a>
                                        <?php $__env->startComponent('components.delete-record', [
                                            'action' => 'IntegrationsController@destroy',
                                            'object' => $integration
                                        ]); ?>
                                        <?php echo $__env->renderComponent(); ?>
                                        <?php if($integration->service == \App\Models\Agent\Agent::WEB_SERVICE): ?>
                                            <a href="<?php echo e(action('IntegrationsController@preview', $integration)); ?>" class="mx-1" title="preview"
                                               target="_blank">
                                                <span class="mi mi-remove-red-eye"></span>
                                            </a>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <?php $__env->endSlot(); ?>
                    <?php echo $__env->renderComponent(); ?>
                    <?php echo e($integrations->links()); ?>

                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>