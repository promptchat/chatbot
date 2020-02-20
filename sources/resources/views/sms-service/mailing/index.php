<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <div class="mb-3">
                <a href="<?php echo e(action('Sms\MailingController@create')); ?>"
                   class="btn btn-secondary"><?php echo app('translator')->getFromJson('site.buttons.add'); ?></a>
            </div>
            <?php $__env->startComponent('components.grid'); ?>

                <?php $__env->slot('header'); ?>
                    <th><?php echo app('translator')->getFromJson('site.sms_service.mailing.name'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.sms_service.mailing.state'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.sms_service.mailing.message'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.sms_service.mailing.start'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.sms_service.mailing.participants'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.sms_service.mailing.phone_number'); ?></th>
                    <th></th>
                    <th></th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                    <?php $__currentLoopData = $mailings; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mailing): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <tr>
                                <td><?php echo e($mailing->name); ?></td>
                                <td><?php echo e($mailing->state()); ?></td>
                                <td><?php echo e($mailing->message); ?></td>
                                <td><?php echo e($mailing->start); ?></td>
                                <td class="text-center">
                                    <a href="<?php echo e(action('Sms\MailingParticipantController@index', $mailing)); ?>">
                                        <?php echo app('translator')->getFromJson('site.sms_service.mailing.participants'); ?> <i class="fa fa-list-ol"></i>
                                    </a>
                                </td>
                                <td><?php echo e($mailing->phoneNumber->sim_serial_number); ?></td>
                                <td class="text-center">
                                    <a href="<?php echo e(action("Sms\MailingController@edit", $mailing)); ?>"
                                       class="action-button">
                                        <span class="mi mi-edit"></span>
                                    </a>
                                </td>
                                <td class="text-center">
                                    <?php $__env->startComponent('components.delete-record', [
                                        'action' => 'Sms\MailingController@destroy',
                                        'object' => $mailing
                                    ]); ?>
                                    <?php echo $__env->renderComponent(); ?>
                                </td>
                            </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php $__env->endSlot(); ?>

            <?php echo $__env->renderComponent(); ?>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>