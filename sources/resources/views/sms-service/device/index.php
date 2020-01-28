<?php $__env->startSection('content'); ?>
    <div class="card">
        <div class="card-body">
            <div class="mb-3">
                <a href="<?php echo e(action('DeviceController@create')); ?>" class="btn btn-secondary"><?php echo app('translator')->getFromJson('site.sms_service.devices.add'); ?></a>
            </div>
            <?php $__env->startComponent('components.grid'); ?>
                <?php $__env->slot('header'); ?>
                    <th style="width: 350px"><?php echo app('translator')->getFromJson('site.sms_service.devices.id'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.sms_service.devices.name'); ?></th>
                    <th style="width: 80px"><?php echo app('translator')->getFromJson('site.sms_service.devices.properties'); ?></th>
                    <th style="width: 80px"><?php echo app('translator')->getFromJson('site.sms_service.devices.status'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.sms_service.devices.last_activity'); ?></th>
                    <th style="width: 80px"></th>
                    <th style="width: 80px"></th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                    <?php $__currentLoopData = $devices; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $device): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td><?php echo e(substr($device->unique_id, -4)); ?></td>
                            <td><?php echo e($device->device_info['name'] ?? 'Not defined'); ?></td>
                            <td class="text-center">
                                <?php
                                    $battery = $device->device_info['batteryLevel'] ?? 0;
                                    $properties = [
                                        100 => 'fa-battery-full text-success',
                                        75 => 'fa-battery-three-quarters text-success',
                                        50 => 'fa-battery-half text-warning',
                                        25 => 'fa-battery-quarter text-danger',
                                        0 => 'fa-battery-empty text-dark'
                                    ];
                                    $index = (round($battery * 4) / 4) * 100;
                                    $type = $properties[$index];
                                ?>
                                <i class="fa <?php echo e($type); ?>"></i>
                            </td>
                            <td class="text-center">
                                <i class="fa fa-circle <?php echo e($device->status == \App\Models\Device::STATUS_INACTIVE ? 'text-danger' : 'text-success'); ?>"/>
                            </td>
                            <td><?php echo e($device->last_activity); ?></td>
                            <td class="text-center">
                                <a href="<?php echo e(action("DeviceController@show", $device)); ?>"
                                   class="action-button">
                                    <span class="mi mi-remove-red-eye"></span>
                                </a>
                            </td>
                            <td class="text-center">
                                <?php $__env->startComponent('components.delete-record', [
                                    'action' => 'DeviceController@destroy',
                                    'object' => $device
                                ]); ?>
                                <?php echo $__env->renderComponent(); ?>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php $__env->endSlot(); ?>
            <?php echo $__env->renderComponent(); ?>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>