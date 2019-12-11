<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.analytic.page_title_chat"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AnalyticsController@index'),
                'name' => __('site.analytic.page_title')
            ],
            [
                'url' => action('AnalyticsController@indexChatSessionStatistic'),
                'name' => __('site.analytic.page_title_chats')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <div class="row mb-5">
                    <div class="col-sm-12">
                        <a href="<?php echo e(action('TagController@index')); ?>"
                           class="btn btn-primary text-uppercase pull-left">
                            <?php echo app('translator')->getFromJson('site.analytic.tag_manage'); ?>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <?php $__env->startComponent('components.grid', ['filterAction' => action('AnalyticsController@indexChatSessionStatistic')]); ?>
                            <?php $__env->slot('header'); ?>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.analytic.chat_box'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.analytic.answered'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.analytic.operators'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.analytic.tags'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.analytic.messages'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo \Kyslik\ColumnSortable\SortableLink::render(array ('last_active', __('site.analytic.last_active')));?>
                                    </div>
                                </th>
                                <th scope="col" class="small-column text-center">
                                    <a href="<?php echo e(action('AnalyticsController@indexChatSessionStatistic')); ?>"><i
                                                class="fa fa-paint-brush"
                                                aria-hidden="true"></i></a>
                                </th>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('filters'); ?>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'agent']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterSelect', ['name' => 'answered', 'options' => ['No', 'Yes']]); ?><?php echo $__env->renderComponent(); ?></td>
                                <td> <?php $__env->startComponent('components.filter.filterInput', ['name' => 'operators']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'tags']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td>
                                    <div class="form-control clear-input-filter"></div>
                                </td>
                                <td>
                                    <div class="form-control clear-input-filter"></div>
                                </td>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('data'); ?>
                                <?php $__empty_1 = true; $__currentLoopData = $chatSessions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $chatSession): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr>
                                        <td>
                                            <?php echo e($chatSession->agent->name); ?>

                                        </td>
                                        <td class="text-center">
                                            <i class="fa <?php echo e($chatSession->answered ? 'fa-check text-success' : 'fa-stop-circle text-danger'); ?>">
                                            </i>
                                        </td>
                                        <td>
                                            <?php echo e($chatSession->operators->map(function($data) {
                                                    return $data->name;
                                                })->implode(', ')); ?>

                                        </td>
                                        <td>
                                            <ul class="tag-list">
                                                <?php $__currentLoopData = $chatSession->tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <li>
                                                        <?php echo e($tag->name); ?>

                                                        }}
                                                        $chatSession->tags->map(function($data){
                                                        return $data->name;
                                                        })
                                                        }}
                                                    </li>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </ul>
                                        </td>
                                        <td>
                                            <?php echo e($chatSession->messages_count); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->last_active); ?>

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