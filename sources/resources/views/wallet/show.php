<?php $__env->startSection('content'); ?>
    <?php if(Session::has('error')): ?>
        <div class="alert alert-danger">
            <p>
                <?php echo e(Session::get('error')); ?>

            </p>
        </div>
    <?php endif; ?>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><?php echo app('translator')->getFromJson('site.wallet.replenish'); ?></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="<?php echo e(Auth::user()->isSuperAdmin() ?
                    action('WalletController@adminReplenish', $company) :
                    action('WalletController@replenish')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <div class="modal-body">
                        <div class="form-group">
                            <label><?php echo app('translator')->getFromJson('site.wallet.amount'); ?></label>
                            <input name="amount" class="form-control" placeholder="100.00 USD"/>
                        </div>
                        <div class="form-group">
                            <label><?php echo app('translator')->getFromJson('site.wallet.description'); ?></label>
                            <textarea name="description" class="form-control"
                                      placeholder="<?php echo e(__('site.wallet.description')); ?>"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success"><?php echo app('translator')->getFromJson('site.wallet.add'); ?></button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between balance-block pb-3">
                            <div class="">
                                <h3 class=""><?php echo app('translator')->getFromJson('site.wallet.balance'); ?></h3>
                                <button type="button" class="btn btn-info" data-toggle="modal"
                                        data-target="#exampleModal"><?php echo app('translator')->getFromJson('site.wallet.add_funds'); ?>
                                </button>
                            </div>
                            <div class="pull-right">
                                <h3> <?php echo e(Auth::user()->company->balance / 100); ?> $</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <div class="card-title">
                            <?php echo app('translator')->getFromJson('site.wallet.latest_transactions'); ?>
                        </div>
                        <hr>
                        <div class="table-responsive">
                            <table class="table border-0">
                                <tbody>
                                <?php $__currentLoopData = $transactions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $transaction): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td class="border-0 d-flex" scope="row" style="font-size: 16px;">
                                            <img src="<?php echo e($transaction->type == 'deposit' ? '/icons/arrow.png' : '/icons/shopping.png'); ?>"
                                                 style="width: 32px; height: 32px;">
                                            <p class="ml-3 mb-0 text-capitalize"><?php echo e($transaction->meta['description']); ?></p>
                                        </td>
                                        <td class="border-0" scope="row" style="font-size: 16px; vertical-align: top">
                                            <p class="mb-0">
                                                <i class="fa <?php echo e($transaction->confirmed ? 'fa-check text-success' : 'fa-ban text-danger'); ?>"></i>
                                                <?php echo e($transaction->confirmed ? __('site.wallet.confirm') : __('site.wallet.decline')); ?>

                                            </p>
                                        </td>
                                        <td class="border-0" scope="row" style="font-size: 16px">
                                            <p class="mb-0 <?php echo e($transaction->type == 'deposit' ? 'text-success' : 'text-danger'); ?>">
                                                $<?php echo e(abs($transaction->amount / 100)); ?>

                                            </p>
                                            <p class="mb-0 text-secondary"
                                               style="font-size: 14px;"><?php echo app('translator')->getFromJson('site.wallet.amount'); ?></p>
                                        </td>
                                        <td class="border-0" scope="row" style="font-size: 16px">
                                            <?php echo e($transaction->created_at->format('d/m/Y')); ?>

                                            <p class="mb-0 text-secondary"
                                               style="font-size: 14px;"><?php echo app('translator')->getFromJson('site.wallet.date'); ?></p>
                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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