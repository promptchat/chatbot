<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Clicks analytic for last week"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2">
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <a href="<?php echo e(action('AnalyticsController@indexBotSessionStatistic')); ?>" class="btn btn-primary text-uppercase">
                                    <?php echo app('translator')->getFromJson('View Bots Session Statistic'); ?>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <a href="<?php echo e(action('AnalyticsController@indexChatSessionStatistic')); ?>" class="btn btn-primary text-uppercase">
                                    <?php echo app('translator')->getFromJson('View Chats Session Statistic'); ?>
                                </a>
                            </div>
                        </div>

                        <form action="" method="get" class="filter-form row">
                            <div class="form-group col-sm-6">
                                <label for="title"><?php echo app('translator')->getFromJson('models.analytic.from'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('models.analytic.from'); ?>"
                                        type="text"
                                        name="from"
                                        value="<?php echo e($from); ?>"
                                        class="form-control datepicker"
                                        autocomplete="off"
                                >
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="title"><?php echo app('translator')->getFromJson('models.analytic.to'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('models.analytic.to'); ?>"
                                        type="text"
                                        name="to"
                                        value="<?php echo e($to); ?>"
                                        class="form-control datepicker"
                                        autocomplete="off"
                                >
                            </div>
                        </form>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2">
                        <h4>Summary</h4>
                        <div class="table-responsive">
                        <table class="table table-sm">
                            <?php $__currentLoopData = $statistic; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <th><?php echo e(__('models.analytic.statistic.'.$key)); ?></th>
                                    <td><?php echo e($value); ?></td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </table>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2">
                        <analytics from="<?php echo e($from); ?>" to="<?php echo e($to); ?>"/>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>