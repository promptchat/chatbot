<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-header">
            <?php echo app('translator')->getFromJson('site.integrations.title'); ?>
        </div>
        <div class="card-body">
            <?php $__env->startComponent('components.grid', ['filterAction' => action('IntegrationsController@index')]); ?>
                <?php $__env->slot('header'); ?>
                    <th><?php echo app('translator')->getFromJson('site.integrations.chatbot'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.integrations.service'); ?></th>
                    <th></th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('filters'); ?>
                    <td><?php $__env->startComponent('components.filter.filterSelect', ['name' => 'chat_user_id', 'options' => $chats]); ?><?php echo $__env->renderComponent(); ?></td>
                    <td><?php $__env->startComponent('components.filter.filterSelect',['name' => 'service', 'options' => \App\Models\ExternalChatBot\ExternalChatBot::getServices()]); ?><?php echo $__env->renderComponent(); ?></td>
                    <td></td>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                    <?php $__currentLoopData = $integrations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $integration): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td>
                                <a href="<?php echo e(action('ChatController@edit', $integration->chatUser->id)); ?>">
                                    <?php echo e($integration->chatUser->name); ?>

                                </a>
                            </td>
                            <td>
                                <?php echo e($integration->serviceHtml()); ?>

                            </td>
                            <td>
                                <a href="<?php echo e(action('IntegrationsController@edit', $integration)); ?>">
                                    <i class="mi mi-edit"></i>
                                </a>
                                <?php $__env->startComponent('components.delete-record', [
                                    'action' => 'IntegrationsController@destroy',
                                    'object' => $integration
                                ]); ?>
                                <?php echo $__env->renderComponent(); ?>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php $__env->endSlot(); ?>
            <?php echo $__env->renderComponent(); ?>
            <?php echo e($integrations->links()); ?>

            <a href="<?php echo e(action('IntegrationsController@create')); ?>" class="btn btn-info"><?php echo app('translator')->getFromJson('site.buttons.add'); ?></a>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>