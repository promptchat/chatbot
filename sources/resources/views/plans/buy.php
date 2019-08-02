<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.plan.user.buy"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">

        <div class="row">


                <?php $__currentLoopData = $plans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $plan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="col-sm-4 mb-4">
                        <div class="card text-center" >

                            <div class="card-body">
                                <h5 class="card-title"><?php echo e($plan->name); ?></h5>
                                <p class=""><span  class="d-inline" >$<?php echo e($plan->price); ?></span>/<?php echo e($plan->days ? __('site.plan.user.days_count', ['count' => $plan->days]) : __('site.plan.user.unlimited')); ?></p>
                                <div class="card-text">
                                    <ul class="list-unstyled">
                                        <?php $__currentLoopData = [
                                                'limit_operators',
                                                'limit_departments',
                                                'limit_chatboxes',
                                                'limit_chatbots',
                                                'limit_calendars',
                                        ]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $limit): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li ><?php echo app('translator')->getFromJson('site.plan.user.'.$limit); ?>: <strong><?php echo e($plan->{$limit}?:__('site.plan.user.unlimited')); ?></strong></li>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php if($plan->live_chat_enabled): ?>
                                                <li ><?php echo app('translator')->getFromJson('site.plan.user.live_chat_enabled'); ?></li>
                                            <?php endif; ?>
                                    </ul>
                                </div>
                                <a href="<?php echo e(action('PlanController@buyPlan', $plan)); ?>" class="btn btn-primary"><?php echo app('translator')->getFromJson('site.plan.user.select'); ?></a>
                            </div>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <div class="col-sm-4 mb-4">
                <div class="card text-center" >

                    <div class="card-body">
                        <h5 class="card-title"><?php echo app('translator')->getFromJson('site.plan.user.create_title'); ?></h5>

                        <div class="card-text">
                            <?php echo app('translator')->getFromJson('site.plan.user.create_description'); ?>
                        </div>
                        <a href="<?php echo e(action('PlanController@createCustomPlan')); ?>" class="btn btn-primary"><?php echo app('translator')->getFromJson('site.plan.user.create_button'); ?></a>
                    </div>
                </div>
            </div>


        </div>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>