<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.client.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('SessionController@index'),
                'name' => __('site.client.page_title')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <div class="row mb-15">
                    <div class="col-sm-12">
                        <a href="<?php echo e(action("SessionController@createClient")); ?>" class="btn btn-primary text-uppercase pull-right"><?php echo app('translator')->getFromJson('site.buttons.add'); ?></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <?php $__env->startComponent('components.grid', ['filterAction' => action('SessionController@index')]); ?>
                            <?php $__env->slot('header'); ?>
                                <th scope="col"><?php echo app('translator')->getFromJson('site.client.agent_name'); ?></th>
                                <th scope="col"><?php echo app('translator')->getFromJson('site.client.client_name'); ?></th>
                                <th scope="col"><?php echo app('translator')->getFromJson('site.client.variables'); ?></th>
                                <th scope="col" class="small-column text-center">
                                    <a href="<?php echo e(action('SessionController@index')); ?>">
                                        <i class="fa fa-paint-brush" aria-hidden="true"></i>
                                    </a>
                                </th>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('filters'); ?>
                                <td><?php $__env->startComponent('components.filter.filterSelect', ['name' => 'agent_id', 'options' => $agents]); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><div class="form-control clear-input-filter"></div></td>
                                <td><div class="form-control clear-input-filter"></div></td>
                                <td><div class="form-control clear-input-filter"></div></td>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('data'); ?>
                                <?php $__empty_1 = true; $__currentLoopData = $sessions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $chatSession): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr>
                                        <td>
                                            <img style="width: 30px" class="mr-2" src="<?php echo e($chatSession->agent->getServiceImage()); ?>" alt="">
                                            <?php echo e($chatSession->agent->name); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->getClientName()); ?>

                                        </td>
                                        <td style="line-height: 1">
                                            <?php if($chatSession->variables): ?>
                                                <?php $__currentLoopData = $chatSession->variables; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $name => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <div>
                                                        <strong><?php echo e($name); ?>:</strong>
                                                        <?php if(is_array($value)): ?>
                                                            <span class="text-primary"><?php echo e(join(', ', $value)); ?>;</span>

                                                        <?php else: ?>
                                                            <span class="text-primary"><?php echo e($value); ?>;</span>
                                                        <?php endif; ?>

                                                    </div>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                        </td>
                                        <td class="text-right text-nowrap">
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('view', $chatSession)): ?>
                                                <a href="<?php echo e(action("AnalyticsController@showChatSessionStatistic", $chatSession)); ?>"
                                                   class="action-button">
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
                                <?php echo $sessions->appends(\Request::except('page'))->render(); ?>

                            <?php $__env->endSlot(); ?>
                        <?php echo $__env->renderComponent(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>