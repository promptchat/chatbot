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
                                            <?php echo app('translator')->getFromJson('site.analytic.operator'); ?>
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
                                            <?php echo app('translator')->getFromJson('site.analytic.last_active'); ?>
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
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
                                            <?php echo e($chatSession->last_active); ?>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>