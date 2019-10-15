<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson('site.tags.page-title'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AnalyticsController@index'),
                'name' => __('site.analytic.page_title')
            ],
            [
                'url' => action('TagController@index'),
                'name' => __('site.tags.page_title')
            ],
        ]
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-12">
                    <?php $__env->startComponent('components.grid', ['filterAction' => action('TagController@index')]); ?>
                        <?php $__env->slot('header'); ?>
                            <th><?php echo app('translator')->getFromJson('site.tags.title'); ?></th>
                            <th><?php echo \Kyslik\ColumnSortable\SortableLink::render(array ('chat_sessions_count', __('site.tags.chats')));?></th>
                            <th scope="col" class="small-column text-center">
                                <a href=""><i
                                            class="fa fa-edit"
                                            aria-hidden="true"></i></a>
                            </th>
                            <th scope="col" class="small-column text-center">
                                <a href=""><i
                                            class="fa fa-trash"
                                            aria-hidden="true"></i></a>
                            </th>
                        <?php $__env->endSlot(); ?>

                        <?php $__env->slot('filters'); ?>
                            <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'name']); ?><?php echo $__env->renderComponent(); ?></td>
                            <td>
                                <div class="form-control clear-input-filter"></div>
                            </td>
                            <td>
                                <div class="form-control clear-input-filter"></div>
                            </td>
                            <td>
                                <div class="form-control clear-input-filter"></div>
                            </td>
                        <?php $__env->endSlot(); ?>

                        <?php $__env->slot('data'); ?>
                            <?php $__empty_1 = true; $__currentLoopData = $tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <tr>
                                    <td><?php echo e($tag->name); ?></td>
                                    <td><?php echo e($tag->chat_sessions_count); ?></td>
                                    <td class="text-right text-nowrap">
                                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $tag)): ?>
                                            <a href="<?php echo e(action("TagController@edit", $tag)); ?>"
                                               class="action-button">
                                                <?php echo app('translator')->getFromJson('site.buttons.edit'); ?>
                                            </a>
                                        <?php endif; ?>
                                    </td>
                                    <td>
                                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $tag)): ?>
                                            <?php $__env->startComponent('components.delete-record',
                                                    ['action' => 'TagController@destroy',
                                                    'object' => $tag]); ?>
                                            <?php echo $__env->renderComponent(); ?>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <?php endif; ?>
                        <?php $__env->endSlot(); ?>
                    <?php echo $__env->renderComponent(); ?>
                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>