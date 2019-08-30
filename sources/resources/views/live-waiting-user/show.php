<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.left_menu.live_chat_waiting_user"); ?>
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
                                    <th>
                                        <div class="th-label">
                                            <?php echo app('translator')->getFromJson('site.analytic.user_email'); ?>
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
                                        <?php echo e($chatSession->ip); ?>

                                    </td>
                                    <td>
                                        <?php echo e($chatSession->url); ?>

                                    </td>
                                    <td>
                                        <?php echo e($chatSession->last_active); ?>

                                    </td>
                                    <td>
                                        <?php echo e($chatSession->user_email); ?>

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
                <hr/>
                <div class="row mt-3">
                    <div class="col-sm-6">
                        <?php echo app('translator')->getFromJson('site.analytic.user_email'); ?>: <a href="mailto:<?php echo e($chatSession->user_email); ?>"><?php echo e($chatSession->user_email); ?></a>
                    </div>
                    <div class="col-sm-6">
                        <form
                                role="form"
                                method="post"
                                action="<?php echo e(action('LiveChatWaitingUserController@answerToUser', $chatSession)); ?>"
                                enctype="multipart/form-data"
                        >
                            <?php echo e(csrf_field()); ?>

                            <?php echo e(method_field("patch")); ?>


                            <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.answer_to_user'); ?></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>