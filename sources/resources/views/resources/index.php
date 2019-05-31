<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Translate management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="table-responsive">
                        <table class="table table-sm">
                            <thead>
                            <tr>
                                <th style="width: 100px">
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('Resource'); ?>
                                    </div>
                                </th>
                                <th class="center-align" >
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('Value'); ?>
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__empty_1 = true; $__currentLoopData = $translates; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <tr>
                                    <td>
                                        <?php echo e($key); ?>

                                    </td>
                                    <td>
                                        <?php echo e($value); ?>

                                    </td>

                                    <td class="text-right text-nowrap">
                                        <a href="<?php echo e(action("ResourcesController@edit", $key)); ?>" class="action-button">
                                            <span class="mi mi-edit"></span>
                                        </a>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                <tr>
                                    <td colspan="100%">
                                        <?php echo app('translator')->getFromJson('models.no_result'); ?>
                                    </td>
                                </tr>
                            <?php endif; ?>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>