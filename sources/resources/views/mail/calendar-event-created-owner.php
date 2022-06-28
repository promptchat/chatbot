<?php $__env->startSection('content'); ?>
    <p>@translate('mail.website_visitor_requested_an_appointment_on') <a href="<?php echo e($host); ?>"><?php echo e($host); ?></a></p>

    <p>
        @translate('mail.details_the_visitor_left'):<br>
        <strong>@translate('mail.name'):</strong> <?php echo e($event->username); ?><br>
        <strong>@translate('mail.telephone'):</strong> <?php echo e($event->user_phone); ?><br>
        <strong>@translate('mail.email'):</strong> <?php echo e($event->email); ?><br>
        <strong>@translate('mail.comment'):</strong> <?php echo e($event->comment); ?><br>
        <strong>@translate('mail.callback_requested_for'):</strong> <?php echo e((new \Carbon\Carbon($event->start_time))->format('Y-m-d H:i')); ?><br>
    </p>

    <p>
        @translate('mail.please_confirm_this_appointment_request')<br>
        <a href="<?php echo e(env('APP_URL')."/calendars/".$event->calendar_id."/edit"); ?>">Click to log in to your <?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getTitle()); ?> calendar</a>
    </p>

    <div style="border: 2px solid #f4f4f4; border-radius: 10px; padding: 5px;">
        <p>@translate('mail.additional_details_about_this_visitor'):</p>
        <p>
            @translate('mail.chatbot_was_used_on_following_url'): <a href="<?php echo e($url); ?>"><?php echo e($url); ?></a><br>
            @translate('mail.time_of_chat'): <?php echo e(Carbon\Carbon::now()); ?><br>
            @translate('mail.visitor_ip'): <?php echo e($ip); ?><br>
        </p>
    </div>

    <p>@translate('mail.with_kind_regards')</p>

    <p><a href="<?php echo e(url('/')); ?>"><?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getTitle()); ?></a></p>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>