<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Calendars management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row mb-15">
                    <div class="col-sm-12">
                        <a href="<?php echo e(action('CalendarController@create')); ?>" class="btn btn-primary text-uppercase pull-right">
                            <?php echo app('translator')->getFromJson('Add'); ?>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="table-responsive">
                        <table class="table table-sm">
                            <thead>
                            <tr>
                                <th class="with-100">
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('Calendar name'); ?>
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__currentLoopData = $calendars; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $calendar): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td>
                                        <?php echo e($calendar->name); ?>

                                    </td>
                                    <td class="text-right text-nowrap">
                                        <a href="<?php echo e(action("CalendarController@edit", $calendar)); ?>" class="action-button">
                                            <span class="mi mi-edit"></span>
                                        </a>
                                        <?php $__env->startComponent('components.delete-record',
                                                ['action' => 'CalendarController@destroy',
                                                'object' => $calendar]); ?>
                                        <?php echo $__env->renderComponent(); ?>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </tbody>
                        </table>
                        </div>
                        <?php echo e($calendars->appends(Request::input())->links()); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>