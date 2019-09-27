<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.plan.user.buy"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="">
    <form action="<?php echo e(action('PaymentController@create', $plan)); ?>">
        <div class="row">


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
                                        ]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $limit): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li ><?php echo app('translator')->getFromJson('site.plan.user.'.$limit); ?>: <strong><?php echo e($plan->{$limit}?:__('site.plan.user.unlimited')); ?></strong></li>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php if($plan->live_chat_enabled): ?>
                                                <li ><?php echo app('translator')->getFromJson('site.plan.user.live_chat_enabled'); ?></li>
                                        <?php endif; ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <plan-count price="<?php echo e($plan->price); ?>"></plan-count>
            </div>
        <div class="row">
            <div class="col-sm-12 bottom-btn">
                <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
            </div>
        </div>

    </form>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>