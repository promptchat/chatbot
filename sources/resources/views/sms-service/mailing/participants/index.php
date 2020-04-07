<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-header">
            <h3>Mailing participants</h3>
            <p class="text-secondary mb-0"><?php echo app('translator')->getFromJson('site.sms_service.mailing.warning'); ?></p>
        </div>
        <participants-upload-progress mailing_id="<?php echo e($mailing->id); ?>" loading="<?php echo e($mailing->state === \App\Models\Mailing::STATE_PARTICIPANTS_UPLOADING); ?>"></participants-upload-progress>
        <div class="card-body">
            <?php $__env->startComponent('components.grid'); ?>
                <?php $__env->slot('header'); ?>
                    <th style="width: 150px">Phone</th>
                    <th>Variables</th>
                    <th style="width: 100px">Action</th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                    <?php $__empty_1 = true; $__currentLoopData = $participants; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $participant): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td><?php echo e($participant->phone); ?></td>
                            <td>
                                <?php $__currentLoopData = $participant->variables; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <strong class="text-capitalize"><?php echo e($key); ?></strong> : <?php echo e($value); ?><br>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </td>
                            <td>
                                <a href="<?php echo e(action('Sms\MailingParticipantController@edit', [$mailing, $participant])); ?>">
                                    <i class="mi mi-edit"></i>
                                </a>
                                <?php $__env->startComponent('components.delete-record', [
                                    'action' => 'Sms\MailingParticipantController@destroy',
                                    'object' => $participant
                                                                    ]); ?>
                                <?php echo $__env->renderComponent(); ?>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="100%">
                                <?php echo app('translator')->getFromJson('models.no_result'); ?>
                            </td>
                        </tr>
                    <?php endif; ?>
                <?php $__env->endSlot(); ?>
            <?php echo $__env->renderComponent(); ?>
            <?php echo e($participants->links()); ?>

            <a href="<?php echo e(action('Sms\MailingParticipantController@create', $mailing)); ?>"
               class="btn btn-success"><?php echo app('translator')->getFromJson('site.buttons.add'); ?></a>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>