<?php $__env->startSection('content'); ?>
    <p><?php echo app('translator')->getFromJson('mail.website_visitor_requested_an_appointment_on'); ?> <a href="<?php echo e($host); ?>"><?php echo e($host); ?></a></p>

    <p>
    <?php echo app('translator')->getFromJson('mail.details_the_visitor_left'); ?>:<br>
    <strong><?php echo app('translator')->getFromJson('mail.name'); ?>:</strong> <?php echo e($event->user_name); ?><br>
    <strong><?php echo app('translator')->getFromJson('mail.telephone'); ?>:</strong> <?php echo e($event->user_phone); ?><br>
    <strong><?php echo app('translator')->getFromJson('mail.email'); ?>:</strong> <?php echo e($event->user_email); ?><br>
    <strong><?php echo app('translator')->getFromJson('mail.comment'); ?>:</strong> <?php echo e($event->comment); ?><br>
    <strong><?php echo app('translator')->getFromJson('mail.callback_requested_for'); ?>:</strong> <?php echo e((new \Carbon\Carbon($event->start_time))->format('Y-m-d H:i')); ?><br>
    </p>

    <p>
        <?php echo app('translator')->getFromJson('mail.please_confirm_this_appointment_request'); ?><br>
        <a href="<?php echo e(action("CalendarController@edit", $event->calendar_id)); ?>">Click to log in to your <?php echo e(\App\Models\SiteConfig::getTitle()); ?> calendar</a>
    </p>

    <div style="border: 2px solid #f4f4f4; border-radius: 10px; padding: 5px;">
        <p><?php echo app('translator')->getFromJson('mail.additional_details_about_this_visitor'); ?>:</p>
        <p>
            <?php echo app('translator')->getFromJson('mail.chatbot_was_used_on_following_url'); ?>: <a href="<?php echo e($url); ?>"><?php echo e($url); ?></a><br>
            <?php echo app('translator')->getFromJson('mail.time_of_chat'); ?>: <?php echo e(Carbon\Carbon::now()); ?><br>
            <?php echo app('translator')->getFromJson('mail.visitor_ip'); ?>: <?php echo e($ip); ?><br>
        </p>
    </div>
    <div style="border: 2px solid #f4f4f4; border-radius: 10px; padding: 5px;">
        <a href="<?php echo e(action('AnalyticsController@showChatSessionStatistic', $event->chat_sesion_id)); ?>"><?php echo app('translator')->getFromJson('mail.view_full_info'); ?>:</a>

    </div>

    <p><?php echo app('translator')->getFromJson('mail.with_kind_regards'); ?></p>

    <p><a href="<?php echo e(url('/')); ?>"><?php echo e(\App\Models\SiteConfig::getTitle()); ?></a></p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>