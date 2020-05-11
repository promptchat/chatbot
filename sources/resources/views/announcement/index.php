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
                    <a href="<?php echo e(action('AnnouncementController@create')); ?>" class="btn btn-info mb-3">
                        Create
                    </a>
                    <?php $__env->startComponent('components.grid', ['filterAction' => action('AnnouncementController@index')]); ?>
                        <?php $__env->slot('header'); ?>
                            <th scope="col">Name</th>
                            <th scope="col">State</th>
                            <th scope="col">Start</th>
                            <th scope="col">Clients count</th>
                            <th scope="col" colspan="2">Action</th>
                        <?php $__env->endSlot(); ?>

                        <?php $__env->slot('data'); ?>
                            <?php $__currentLoopData = $announcements; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $announcement): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td><?php echo e($announcement->name); ?></td>
                                    <td><?php echo e($announcement->getStringState()); ?></td>
                                    <td><?php echo e($announcement->start); ?></td>
                                    <td><?php echo e($announcement->chat_sessions_count); ?></td>
                                    <td>



                                        <?php $__env->startComponent('components.delete-record', ['action' => 'AnnouncementController@destroy', 'object' => $announcement]); ?>
                                        <?php echo $__env->renderComponent(); ?>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <?php $__env->endSlot(); ?>
                    <?php echo $__env->renderComponent(); ?>
                    <?php echo e($announcements->links()); ?>

                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>