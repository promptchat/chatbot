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
                'url' => action('AnalyticsController@indexBotSessionStatistic'),
                'name' => __('site.analytic.page_title_bots')
            ],
            [
                'url' => action('AnalyticsController@showChatSessionStatistic', $chatSession),
                'name' => __('site.analytic.page_title_chat')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <div class="row mb-4">
                    <div class="col-md-3">
                        <div class="card d-flex py-4 bg-info text-white">
                            <div class="row">
                                <div class="col-3">
                                    <i class="fa fa-comments" style="font-size: 80px"></i>
                                </div>
                                <div class="col-9 text-right">
                                    <div style="font-size: 30px;">
                                        <?php echo e($liveMessages->count()); ?>

                                    </div>
                                    <div class="" style="font-size: 15px;">
                                        <?php echo app('translator')->getFromJson('site.analytic.statistic.session.messages'); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card d-flex py-4 bg-warning text-white">
                            <div class="row">
                                <div class="col-3">
                                    <i class="fa fa-globe" style="font-size: 80px"></i>
                                </div>
                                <div class="col-9 text-right">
                                    <div style="font-size: 15px;">
                                        <p class="mb-0"><?php echo e($data['ip']); ?></p>
                                        <?php echo e($data['geo']['city'] ?? ''); ?> <?php echo e($data['geo']['country'] ?? ' ' . __('site.analytic.statistic.session.unknown')); ?>

                                    </div>
                                    <div class="" style="font-size: 15px;">
                                        <?php echo app('translator')->getFromJson('site.analytic.statistic.session.last_activity'); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card d-flex py-4 bg-success text-white">
                            <div class="row">
                                <div class="col-3">
                                    <i class="fa fa-eye" style="font-size: 80px"></i>
                                </div>
                                <div class="col-9 text-right">
                                    <div style="font-size: 30px;">
                                        <?php echo e($data['pages_count']); ?>

                                    </div>
                                    <div class="" style="font-size: 15px;">
                                        <?php echo app('translator')->getFromJson('site.analytic.statistic.session.pages'); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card d-flex py-4 bg-danger text-white">
                            <div class="row">
                                <div class="col-3">
                                    <i class="fa fa-comments" style="font-size: 80px"></i>
                                </div>
                                <div class="col-9 text-right">
                                    <div style="font-size: 30px;">
                                        <?php echo e($data['seances_count']); ?>

                                    </div>
                                    <div class="" style="font-size: 15px;">
                                        <?php echo app('translator')->getFromJson('site.analytic.statistic.session.seances'); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card d-flex py-2">
                            <div class="card-header">
                                <h4><?php echo app('translator')->getFromJson('site.analytic.statistic.session.actions'); ?></h4>
                            </div>
                            <actions-timeline actions="<?php echo e(json_encode($data['actions'])); ?>"></actions-timeline>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="border px-3">
                            <div class="position-relative operator-page">
                                <ul class="chat" style="height: auto">
                                    <?php $__empty_1 = true; $__currentLoopData = $liveMessages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $liveMessage): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                        <li class="chat-element <?php echo e($liveMessage->user_id ? 'left' : 'right'); ?>">
                                            <?php if($liveMessage->user_id): ?>
                                                <div class="user-img">
                                                    <img src="<?php echo e($liveMessage->user->getPhoto()); ?>">
                                                </div>
                                            <?php endif; ?>
                                            <div class="time"><?php echo e($liveMessage->user_id ? $liveMessage->user->name.',' : ''); ?> <?php echo e($liveMessage->created_at); ?></div>
                                            <div class="message"><?php echo e($liveMessage->message); ?></div>
                                        </li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                        <?php echo app('translator')->getFromJson('site.no_result'); ?>
                                    <?php endif; ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>