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
                    <th scope="col" rowspan="2"><?php echo app('translator')->getFromJson('site.analytic.statistic.url'); ?></th>
                    <th colspan="2"><?php echo app('translator')->getFromJson('site.analytic.statistic.sessions'); ?></th>
                    <th colspan="2"><?php echo app('translator')->getFromJson('site.analytic.statistic.clicks'); ?></th>
                    <th style="background-color: rgba(255, 0, 0, 0.1)" colspan="3"><?php echo app('translator')->getFromJson('site.analytic.statistic.livechat'); ?></th>
                    <th style="background-color: rgba(0, 0, 255, 0.1)" colspan="3"><?php echo app('translator')->getFromJson('site.analytic.statistic.chatbot'); ?></th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('subheader'); ?>
                    <th><?php echo app('translator')->getFromJson('site.analytic.statistic.total'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.analytic.statistic.unique'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.analytic.statistic.total'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.analytic.statistic.unique'); ?></th>
                    <th style="background-color: rgba(255, 0, 0, 0.1)"><?php echo app('translator')->getFromJson('site.analytic.statistic.total'); ?></th>
                    <th style="background-color: rgba(255, 0, 0, 0.1)"><?php echo app('translator')->getFromJson('site.analytic.statistic.unique'); ?></th>
                    <th style="background-color: rgba(255, 0, 0, 0.1)"><?php echo app('translator')->getFromJson('site.analytic.statistic.avg_duration'); ?></th>
                    <th style="background-color: rgba(0, 0, 255, 0.1)"><?php echo app('translator')->getFromJson('site.analytic.statistic.total'); ?></th>
                    <th style="background-color: rgba(0, 0, 255, 0.1)"><?php echo app('translator')->getFromJson('site.analytic.statistic.unique'); ?></th>
                    <th style="background-color: rgba(0, 0, 255, 0.1)"><?php echo app('translator')->getFromJson('site.analytic.statistic.avg_duration'); ?></th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                        <tr>
                            <td>All</td>
                            <td><?php echo e($all->count_total); ?></td>
                            <td><?php echo e($all->count_unique); ?></td>
                            <td><?php echo e($all->opens_total); ?></td>
                            <td><?php echo e($all->opens_unique); ?></td>
                            <td style="background-color: rgba(255, 0, 0, 0.1)"><?php echo e($all->livechat_total); ?></td>
                            <td style="background-color: rgba(255, 0, 0, 0.1)"><?php echo e($all->livechat_unique); ?></td>
                            <td style="background-color: rgba(255, 0, 0, 0.1)"><?php echo e(round($all->livechat_duration /60, 2)); ?> min</td>
                            <td style="background-color: rgba(0, 0, 255, 0.1)"><?php echo e($all->chatbot_total); ?></td>
                            <td style="background-color: rgba(0, 0, 255, 0.1)"><?php echo e($all->chatbot_unique); ?></td>
                            <td style="background-color: rgba(0, 0, 255, 0.1)"><?php echo e(round($all->chatbot_duration /60, 2)); ?> min</td>
                        </tr>
                    <?php $__empty_1 = true; $__currentLoopData = $pages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $page): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td><?php echo e($page->url); ?></td>
                            <td><?php echo e($page->count_total); ?></td>
                            <td><?php echo e($page->count_unique); ?></td>
                            <td><?php echo e($page->opens_total); ?></td>
                            <td><?php echo e($page->opens_unique); ?></td>
                            <td style="background-color: rgba(255, 0, 0, 0.1)"><?php echo e($page->livechat_total); ?></td>
                            <td style="background-color: rgba(255, 0, 0, 0.1)"><?php echo e($page->livechat_unique); ?></td>
                            <td style="background-color: rgba(255, 0, 0, 0.1)"><?php echo e(round($page->livechat_duration /60, 2)); ?> min</td>
                            <td style="background-color: rgba(0, 0, 255, 0.1)"><?php echo e($page->chatbot_total); ?></td>
                            <td style="background-color: rgba(0, 0, 255, 0.1)"><?php echo e($page->chatbot_unique); ?></td>
                            <td style="background-color: rgba(0, 0, 255, 0.1)"><?php echo e(round($page->chatbot_duration /60, 2)); ?> min</td>
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