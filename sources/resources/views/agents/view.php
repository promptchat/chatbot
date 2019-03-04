<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Chat boxes management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col s12">
                        <a href="<?php echo e(action("AgentController@edit", $agent)); ?>" class="btn btn-primary text-uppercase pull-right"><?php echo app('translator')->getFromJson('Edit'); ?></a>
                    </div>
                </div>
                <h4>
                    <?php echo e($agent->name); ?>

                </h4>
                <p><?php echo app('translator')->getFromJson('models.agent.instructions'); ?></p>
                <code>
                    <?php echo e($agent->getWidget()); ?>

                </code>

                <div class="row">
                    <div class="col s12">
                        <a href="<?php echo e(action("AgentController@preview", $agent)); ?>" class="btn btn-primary text-uppercase pull-right"><?php echo app('translator')->getFromJson('Preview '); ?></a>
                    </div>
                </div>
            </div>
        </div>

</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>