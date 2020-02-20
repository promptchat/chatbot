<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <form action="<?php echo e(action('Sms\MailingParticipantController@import', $mailing)); ?>"
                  enctype="multipart/form-data" method="POST">
                <?php echo csrf_field(); ?>
                <label for="file">Import from .csv file</label>
                <input type="file" name="file" class="form-control" accept=".csv" required>
                <button type="submit" class="btn btn-info mt-2">Import</button>
            </form>
        </div>
        <div class="card-body">
            <?php $__env->startComponent('components.grid'); ?>
                <?php $__env->slot('header'); ?>
                    <th style="width: 150px">Phone</th>
                    <th>Variables</th>
                    <th style="width: 100px">Action</th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                    <?php $__currentLoopData = $participants; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $participant): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
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
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php $__env->endSlot(); ?>
            <?php echo $__env->renderComponent(); ?>
                <a href="<?php echo e(action('Sms\MailingParticipantController@create', $mailing)); ?>" class="btn btn-success"><?php echo app('translator')->getFromJson('site.buttons.add'); ?></a>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>