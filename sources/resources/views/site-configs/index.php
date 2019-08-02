<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.site_config.page_title"); ?>
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
                                <th class="with-100">
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('site.site_config.page_title'); ?>
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__empty_1 = true; $__currentLoopData = $siteConfigs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $siteConfig): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $siteConfig)): ?>
                                    <tr>
                                        <td>
                                            <?php echo e($siteConfig->name); ?>

                                        </td>
                                        <td class="text-right text-nowrap">
                                                <a href="<?php echo e(action("SiteConfigController@edit", $siteConfig)); ?>" class="action-button">
                                                    <span class="mi mi-edit"></span>
                                                </a>

                                        </td>
                                    </tr>
                                <?php endif; ?>
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
                        <?php echo e($siteConfigs->appends(Request::input())->links()); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>