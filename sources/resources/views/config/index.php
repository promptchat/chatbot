<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.button_setting.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\Models\Config::class)): ?>
                    <div class="row mb-15">
                        <div class="col-sm-12">
                            <a href="<?php echo e(action('ConfigController@create')); ?>" class="btn btn-primary text-uppercase pull-right">
                                <?php echo app('translator')->getFromJson('site.buttons.add'); ?>
                            </a>
                        </div>
                    </div>
                <?php endif; ?>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="table-responsive">
                        <table class="table table-sm">
                            <thead>
                            <tr>
                                <th>
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.button_setting.name'); ?>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__empty_1 = true; $__currentLoopData = $configs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $config): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <tr>
                                    <td>
                                        <?php echo e($config->name); ?>

                                    </td>
                                    <td class="text-right text-nowrap">
                                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $config)): ?>
                                            <a href="<?php echo e(action("ConfigController@edit", $config)); ?>" class="action-button">
                                                <span class="mi mi-edit"></span>
                                            </a>
                                        <?php endif; ?>
                                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $config)): ?>
                                            <?php $__env->startComponent('components.delete-record',
                                                    ['action' => 'ConfigController@destroy',
                                                    'object' => $config]); ?>
                                            <?php echo $__env->renderComponent(); ?>
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
                        <?php echo e($configs->appends(Request::input())->links()); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>