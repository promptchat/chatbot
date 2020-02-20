<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <form action="<?php echo e(action('Sms\MailingController@update', $mailing)); ?>" method="POST">
                <?php echo csrf_field(); ?>
                <?php echo method_field('PATCH'); ?>
                <div class="form-group">
                    <label for="name"><?php echo app('translator')->getFromJson('site.sms_service.mailing.name'); ?></label>
                    <input class="form-control" type="text" name="name" value="<?php echo e($mailing->name); ?>" required>
                </div>
                <div class="form-group">
                    <label for="start"><?php echo app('translator')->getFromJson('site.sms_service.mailing.start'); ?></label>
                    <input name="start" class="datepicker form-control" value="<?php echo e($mailing->start); ?>" required>
                </div>
                <div class="form-group">
                    <label for="phone_number_id"><?php echo app('translator')->getFromJson('site.sms_service.mailing.phone_number'); ?></label>
                    <select name="phone_number_id" class="form-control" required>
                        <?php $__currentLoopData = $phoneNumbers; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $number): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($key); ?>" <?php echo e($key == $mailing->phone_number_id ? 'selected' : ''); ?>><?php echo e($number); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="message"><?php echo app('translator')->getFromJson('site.sms_service.mailing.message'); ?></label>
                    <textarea class="form-control" name="message" cols="30" rows="10" required><?php echo e($mailing->message); ?></textarea>
                </div>
                <button type="submit" class="btn btn-info pull-right"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
            </form>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>