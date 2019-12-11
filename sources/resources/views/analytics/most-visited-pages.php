<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AnalyticsController@index'),
                'name' => __('site.analytic.page_title')
            ],
            [
                'url' => action('AnalyticsController@mostVisitedPages'),
                'name' => __('site.analytics.most_visited')
            ]
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <?php $__env->startComponent('components.grid', ['filterAction' => action('AnalyticsController@mostVisitedPages')]); ?>
                <?php $__env->slot('header'); ?>
                    <th scope="col"><?php echo app('translator')->getFromJson('site.analytic.statistic.url'); ?></th>
                    <th scope="col"><?php echo app('translator')->getFromJson('site.analytic.statistic.visits'); ?></th>
                    <th scope="col"><?php echo app('translator')->getFromJson('site.analytic.statistic.chatbox'); ?></th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('filters'); ?>
                    <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'url']); ?><?php echo $__env->renderComponent(); ?></td>
                    <td>
                        <div class="form-control clear-input-filter"></div>
                    </td>
                    <td><?php $__env->startComponent('components.filter.filterSelect', ['name' => 'agent', 'options' => $agents]); ?><?php echo $__env->renderComponent(); ?></td>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                    <?php $__empty_1 = true; $__currentLoopData = $pages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $page): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td><?php echo e($page->url); ?></td>
                            <td><?php echo e($page->visits); ?></td>
                            <td>
                                <a href="<?php echo e(action('AgentController@edit', $page->agent_id)); ?>" target="_blank">
                                    <?php echo e($page->agent_name ?? ''); ?>

                                </a>
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
            <?php echo $__env->renderComponent(); ?>
            <?php echo e($pages->links()); ?>

        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>