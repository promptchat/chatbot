<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.analytic.page_title_chat"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                <tr>
                                    <th>
                                        <div class="th-label">
                                            <?php echo app('translator')->getFromJson('site.analytic.chat_box'); ?>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="th-label">
                                            <?php echo app('translator')->getFromJson('site.analytic.operators'); ?>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="th-label">
                                            <?php echo app('translator')->getFromJson('site.analytic.ip'); ?>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="th-label">
                                            <?php echo app('translator')->getFromJson('site.analytic.url'); ?>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="th-label">
                                            <?php echo app('translator')->getFromJson('site.analytic.messages'); ?>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="th-label">
                                            <?php echo app('translator')->getFromJson('site.analytic.last_active'); ?>
                                        </div>
                                    </th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php $__empty_1 = true; $__currentLoopData = $chatSessions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $chatSession): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr>
                                        <td>
                                            <?php echo e($chatSession->agent->name); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->operators->map(function($data) {
                                                    return $data->name;
                                                })->implode(', ')); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->ip); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->url); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->messages_count); ?>

                                        </td>
                                        <td>
                                            <?php echo e($chatSession->last_active); ?>

                                        </td>
                                        <td class="text-right text-nowrap">
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('view', $chatSession)): ?>
                                                <a href="<?php echo e(action("AnalyticsController@showChatSessionStatistic", $chatSession)); ?>" class="action-button">
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
                                </tbody>
                            </table>
                        </div>
                        <?php echo e($chatSessions->appends(Request::input())->links()); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>