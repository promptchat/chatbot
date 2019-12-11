<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-header">
            <h3><?php echo app('translator')->getFromJson('site.transactions.title'); ?></h3>
        </div>
        <div class="card-body">
            <?php $__env->startComponent('components.grid', ['filterAction' => action('WalletController@transactions')]); ?>

                <?php $__env->slot('header'); ?>
                    <th><?php echo app('translator')->getFromJson('site.transactions.company'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.transactions.type'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.transactions.amount'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.transactions.is_confirmed'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.transactions.description'); ?></th>
                    <th><?php echo app('translator')->getFromJson('site.transactions.date'); ?></th>
                <?php $__env->endSlot(); ?>

                <?php $__env->slot('data'); ?>
                    <?php $__currentLoopData = $transactions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $transaction): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td>
                                <?php if($transaction->company_id): ?>
                                    <a href="<?php echo e(action('CompanyController@edit', $transaction->company_id)); ?>">
                                        <?php echo e($transaction->company_name); ?>

                                    </a>
                                <?php endif; ?>
                            </td>
                            <td><?php echo e($transaction->type); ?></td>
                            <td><?php echo e($transaction->amount); ?></td>
                            <td class="text-center">
                                <i class="fa <?php echo e($transaction->confirmed ? 'fa-check text-success' : 'fa-times-circle text-danger'); ?>"></i>
                            </td>
                            <td><?php echo e($transaction->meta['description'] ?? 'Not set'); ?></td>
                            <td><?php echo e($transaction->created_at); ?></td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php $__env->endSlot(); ?>

            <?php echo $__env->renderComponent(); ?>
        </div>
    </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>