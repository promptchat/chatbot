<?php $__env->startSection('content'); ?>
    <p>A Website visitor requested an appointment on <a href="<?php echo e($host); ?>"><?php echo e($host); ?></a></p>

    <p>
    The details the visitor left:<br>
    <strong>Name:</strong> <?php echo e($event->user_name); ?><br>
    <strong>Telephone:</strong> <?php echo e($event->user_phone); ?><br>
    <strong>Email:</strong> <?php echo e($event->user_email); ?><br>
    <strong>Comment:</strong> <?php echo e($event->comment); ?><br>
    <strong>CallBack requested for:</strong> <?php echo e((new \Carbon\Carbon($event->start_time))->format('Y-m-d H:i')); ?><br>
    </p>

    <p>
        Please confirm this appointment request by either a phone call or an email using the details above.<br>
        <a href="<?php echo e(action("CalendarController@edit", $event->calendar_id)); ?>">Click to log in to your <?php echo e(\App\Models\SiteConfig::getTitle()); ?> calendar</a>
    </p>

    <div style="border: 2px solid #f4f4f4; border-radius: 10px; padding: 5px;">
        <p>Additional details about this visitor:</p>
        <p>
            Chatbot was used on following URL: <a href="<?php echo e($url); ?>"><?php echo e($url); ?></a><br>
            Time of chat: <?php echo e(Carbon\Carbon::now()); ?><br>
            IP address of visitor: <?php echo e($ip); ?><br>
        </p>
    </div>

    <p>With kind regards,</p>

    <p><a href="<?php echo e(url('/')); ?>"><?php echo e(\App\Models\SiteConfig::getTitle()); ?></a></p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('mail.mail', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>