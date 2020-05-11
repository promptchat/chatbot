<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <a href="<?php echo e(action('SessionController@createClient')); ?>" class="btn btn-info mb-3">Add</a>
            <?php $__env->startComponent('components.grid'); ?>
                <?php $__env->slot('header'); ?>
                    <th>#</th>
                    <th>Integration</th>
                    <th>Last active</th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                    <?php $__currentLoopData = $clients; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $client): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td><?php echo e($key+1); ?></td>
                            <td><a href="<?php echo e(action('IntegrationsController@edit', $client->agent)); ?>"><?php echo $client->agent->serviceHtml(); ?></a></td>
                            <td><?php echo e($client->updated_at); ?></td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php $__env->endSlot(); ?>
            <?php echo $__env->renderComponent(); ?>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>