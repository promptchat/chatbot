<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AnnouncementController@index'),
                'name' => __('site.announcement.page-title')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-12">
                    <a href="<?php echo e(action('AnnouncementController@create')); ?>" class="btn btn-primary float-right mb-3">
                        Create
                    </a>
                    <?php $__env->startComponent('components.grid', ['filterAction' => action('AnnouncementController@index')]); ?>
                        <?php $__env->slot('header'); ?>
                            <th scope="col">Name</th>
                            <th scope="col" width="15%">State</th>
                            <th scope="col" width="15%">Start</th>
                            <th scope="col" width="10%">Clients count</th>
                            <th scope="col" width="5%">Action</th>
                        <?php $__env->endSlot(); ?>

                        <?php $__env->slot('data'); ?>
                            <?php $__empty_1 = true; $__currentLoopData = $announcements; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $announcement): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <tr>
                                    <td><?php echo e($announcement->name); ?></td>
                                    <td class="text-center"><?php echo e($announcement->getStringState()); ?></td>
                                    <td class="text-center"><?php echo e($announcement->start); ?></td>
                                    <td class="text-center"><?php echo e($announcement->chat_sessions_count); ?></td>
                                    <td class="text-center">



                                        <?php $__env->startComponent('components.delete-record', ['action' => 'AnnouncementController@destroy', 'object' => $announcement]); ?>
                                        <?php echo $__env->renderComponent(); ?>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                <tr>
                                    <td colspan="100%" class="text-center">
                                        <?php echo app('translator')->getFromJson('models.no_result'); ?>
                                    </td>
                                </tr>
                            <?php endif; ?>
                        <?php $__env->endSlot(); ?>
                    <?php echo $__env->renderComponent(); ?>
                    <?php echo e($announcements->links()); ?>

                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>