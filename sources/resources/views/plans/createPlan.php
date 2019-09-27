<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.plan.user.buy"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo collect([
                                        'limit_operators' => __('site.plan.user.limit_operators'),
                                        'limit_departments' => __('site.plan.user.limit_departments'),
                                        'limit_chatboxes' => __('site.plan.user.limit_chatboxes'),
                                        'limit_chatbots' => __('site.plan.user.limit_chatbots'),
                                        'limit_calendars' => __('site.plan.user.limit_calendars'),
                                        'live_chat_enabled' => __('site.plan.user.live_chat_enabled'),
                                        'days' => __('site.plan.user.days_count', ['count' => '30']),
                                        'create' => __('site.plan.user.create_title'),
                                        'create_button' => __('site.plan.user.select'),
                                        'make_your_own' => __('site.plan.user.make_your_own'),
                                    ]) ->toJson(); ?>;
    </script>
<div class="">



                <plan-create items="<?php echo e(json_encode($items->toArray())); ?>"></plan-create>

</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>