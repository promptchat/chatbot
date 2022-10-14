<?php $__env->startSection('content'); ?>
    <p><?php echo t('mail.thank_you_for_your_request_for_appointment_on'); ?> <a href="<?php echo e($host); ?>"><?php echo e($host); ?></a></p>

    <p>
        <?php echo t('mail.the_details_you_left_with_us'); ?>:<br>
        <strong><?php echo t('mail.your_name'); ?>:</strong> <?php echo e($event->username); ?><br>
        <strong><?php echo t('mail.telephone'); ?>:</strong> <?php echo e($event->user_phone); ?><br>
        <strong><?php echo t('mail.email'); ?>:</strong> <?php echo e($event->email); ?><br>
        <strong><?php echo t('mail.comment'); ?>:</strong> <?php echo e($event->comment); ?><br>
        <strong><?php echo t('mail.callback_requested_for'); ?>:</strong> <?php echo e((new \Carbon\Carbon($event->start_time))->format('Y-m-d H:i')); ?><br>
    </p>

    <p><?php echo t('mail.please_note_your_appointment_request'); ?></p>

    <p><?php echo t('mail.we_aim_to_confirm_all_appointment_requests'); ?></p>

    <p><?php echo t('mail.please_bear_with_us_until_one'); ?></p>

    <p><?php echo t('mail.with_kind_regards'); ?></p>

    <p><a href="<?php echo e(url('/')); ?>"><?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getTitle()); ?></a></p>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>