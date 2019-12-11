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
                'url' => action('AnalyticsController@indexChatSession'),
                'name' => __('site.analytic.page_title_chats')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <?php if(Auth::user()->isSuperAdmin()): ?>
            <div class="row">
                <div class="col-md-4">
                    <form action="">
                        <div class="form-group">
                            <label for="title"><?php echo app('translator')->getFromJson('site.analytic.company'); ?></label>
                            <div class="d-flex">
                                <?php $__env->startComponent('components.select', [
                                    'empty' => __('site.analytic.company'),
                                    'default' => $companyId,
                                    'options' => \App\Models\Company::getOptions(),
                                    'name' => 'companyId',
                                ]); ?><?php echo $__env->renderComponent(); ?>
                                <button class="btn btn-info mb-3 ml-3"><?php echo app('translator')->getFromJson('site.analytic.see'); ?></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        <?php endif; ?>
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
                        <?php $__env->startComponent('components.grid', ['filterAction' => action('AnalyticsController@indexChatSession')]); ?>
                            <?php $__env->slot('header'); ?>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.analytic.chat_box'); ?>
                                    </div>
                                </th>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.analytic.seances_count'); ?>
                                    </div>
                                </th>
                                <th scope="col" class="small-column text-center">
                                    <a href="<?php echo e(action('AnalyticsController@indexChatSession')); ?>"><i
                                                class="fa fa-paint-brush"
                                                aria-hidden="true"></i></a>
                                </th>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('filters'); ?>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'agent']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td>
                                    <div class="form-control clear-input-filter"></div>
                                </td>
                                <td>
                                    <div class="form-control clear-input-filter"></div>
                                </td>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('data'); ?>
                                <?php $__empty_1 = true; $__currentLoopData = $sessions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $chatSession): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr>
                                        <td>
                                            <?php echo e($chatSession->agent->name ?? 'Undefined'); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->seances_count); ?>

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