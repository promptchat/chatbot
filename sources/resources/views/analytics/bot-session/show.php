<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.analytic.page_title_bot"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <h3><?php echo e($chatUser->name); ?></h3>
                        <form action="" method="get" class="filter-form row">
                            <div class="form-group col-lg-3 col-sm-6">
                                <label for="title"><?php echo app('translator')->getFromJson('site.analytic.from'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.analytic.from'); ?>"
                                        type="text"
                                        name="from"
                                        value="<?php echo e($from); ?>"
                                        class="form-control datepicker"
                                        autocomplete="off"
                                >
                            </div>
                            <div class="form-group col-lg-3 col-sm-6">
                                <label for="title"><?php echo app('translator')->getFromJson('site.analytic.to'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.analytic.to'); ?>"
                                        type="text"
                                        name="to"
                                        value="<?php echo e($to); ?>"
                                        class="form-control datepicker"
                                        autocomplete="off"
                                >
                            </div>
                        </form>
                        <br>
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                <tr>
                                    <th><?php echo app('translator')->getFromJson('site.analytic.id'); ?></th>
                                    <th><?php echo app('translator')->getFromJson('site.analytic.ip'); ?></th>
                                    <th><?php echo app('translator')->getFromJson('site.analytic.url'); ?></th>
                                    <th><?php echo app('translator')->getFromJson('site.analytic.created_at'); ?></th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php $__empty_1 = true; $__currentLoopData = $sessions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $session): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr>
                                        <td>
                                            <?php echo e($session->id); ?>

                                        </td>
                                        <td>
                                            <?php echo e($session->ip); ?>

                                        </td>
                                        <td>
                                            <?php echo e($session->url); ?>

                                        </td>
                                        <td>
                                            <?php echo e($session->created_at); ?>

                                        </td>
                                        <td>
                                            <?php if($session->contact_clicks_count > 0): ?>
                                                <a class="edit-button load-form-modal d-flex align-items-center"
                                                   href="<?php echo e(action('AnalyticsController@showBotSessionStatisticDetail', $session)); ?>"
                                                   data-toggle="modal" data-target="#show-form-modal"
                                                   style="text-decoration: none"
                                                >
                                                    <?php echo e($session->contact_clicks_count); ?>

                                                    <span class="mi mi-remove-red-eye ml-1"></span>
                                                </a>
                                            <?php endif; ?>
                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                    <tr>
                                        <td colspan="100%">
                                            <?php echo app('translator')->getFromJson('site.no_result'); ?>
                                        </td>
                                    </tr>
                                <?php endif; ?>
                                </tbody>
                            </table>
                        </div>

                        <?php echo e($sessions->appends(Request::input())->links()); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php $__env->startComponent('components.modal', [
        'id' => 'show-form-modal',
        'title' => __('site.analytic.detail')
    ]); ?><?php echo $__env->renderComponent(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>