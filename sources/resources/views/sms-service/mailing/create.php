<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <form action="<?php echo e(action('Sms\MailingController@store')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <div class="form-group">
                        <label for="name"><?php echo app('translator')->getFromJson('site.sms_service.mailing.name'); ?></label>
                        <input type="text" name="name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="start"><?php echo app('translator')->getFromJson('site.sms_service.mailing.start'); ?></label>
                        <input name="start" class="form-control" id='datetimepicker1' required>
                    </div>
                    <div class="form-group">
                        <label for="phone_number_id"><?php echo app('translator')->getFromJson('site.sms_service.mailing.phone_number'); ?></label>
                        <select class="form-control" name="phone_number_id" required>
                            <?php $__currentLoopData = $phoneNumbers; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $number): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($key); ?>"><?php echo e($number); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message"><?php echo app('translator')->getFromJson('site.sms_service.mailing.message'); ?></label>
                        <input type="text" class="form-control" name="message" required>
                    </div>
                    <button type="submit" class="btn btn-info pull-right"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>