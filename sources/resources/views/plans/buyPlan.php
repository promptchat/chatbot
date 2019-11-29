<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.plan.user.buy"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <form action="<?php echo e(action('PaymentController@create', $plan)); ?>">
            <div class="row">


                <div class="col-sm-4 offset-sm-4 mb-4">
                    <div class="card text-center">

                        <div class="card-body">
                            <h5 class="card-title"><u><?php echo e($plan->name); ?></u></h5>
                            <div class="plan-features">
                                <div class="card-text">
                                    <ul class="list-unstyled">
                                        <?php $__currentLoopData = [
                                                'limit_operators',
                                                'limit_departments',
                                                'limit_chatboxes',
                                                'limit_chatbots',
                                        ]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $limit): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <li><?php echo app('translator')->getFromJson('site.plan.user.'.$limit); ?>:
                                                <strong><?php echo e($plan->{$limit}?:__('site.plan.user.unlimited')); ?></strong>
                                            </li>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php if($plan->live_chat_enabled): ?>
                                            <li><?php echo app('translator')->getFromJson('site.plan.user.live_chat_enabled'); ?></li>
                                        <?php endif; ?>
                                    </ul>
                                </div>
                            </div>
                            <div class="price mt-3">
                                <div class="<?php echo e(Auth::user()->company->calculateDiscount() ? 'crossed text-secondary' : ''); ?>">
                                    <?php echo e($plan->price); ?>$
                                    /<?php echo e($plan->days ? __('site.plan.user.days_count', ['count' => $plan->days]) : __('site.plan.user.unlimited')); ?>

                                </div>
                                <?php if(Auth::user()->company->calculateDiscount()): ?>
                                    <?php $count = ceil(Auth::user()->company->calculateDiscount() / $plan->price) ?>
                                    <p class="text-success">
                                        <strong>
                                            Update on <?php echo e($plan->days * $count); ?> days
                                            for <?php echo e(round($plan->price * $count - Auth::user()->company->calculateDiscount(), 2)); ?>

                                            $!
                                        </strong>
                                    </p>
                                <?php endif; ?>

                            </div>
                        </div>
                    </div>
                </div>
                <?php if(!$plan->is_demo): ?>
                    <div class="col-sm-4 offset-sm-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <?php $__env->startComponent('components.form.checkbox', [
                                'label' => 'Subscribe!',
                                'name' => 'is_subscribed',
                            ]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
                <?php if(!$plan->is_demo && $plan->days): ?>
                    <plan-count price="<?php echo e($plan->price); ?>" discount="<?php echo e(Auth::user()->company->calculateDiscount()); ?>"
                                count="<?php echo e($count ?? 1); ?>"></plan-count>
                <?php endif; ?>
            </div>
            <div class="row">
                <div class="col-sm-4 offset-sm-4 bottom-btn text-center">
                    <button type="submit" style="width: 100%"
                            class="btn btn-primary text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                </div>
            </div>

        </form>
    </div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>