<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Chat boxes management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row mb-15">
                    <div class="col-sm-12">
                        <a href="<?php echo e(action('AgentController@create')); ?>" class="btn btn-primary text-uppercase pull-right">
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
                                        <?php echo app('translator')->getFromJson('Operator name'); ?>
                                    </div>
                                </th>
                                <th class="center-align" style="width: 200px">
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('Contacts'); ?>
                                    </div>
                                </th>
                                <th class="center-align" style="width: 200px">
                                    <div class="th-label">
                                        <?php echo app('translator')->getFromJson('Chat bot'); ?>
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__currentLoopData = $agents; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $agent): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td>
                                        <?php echo e($agent->name); ?>

                                    </td>
                                    <td>
                                        <?php $__currentLoopData = $agent->contacts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $contact): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <div>
                                                <img class="agent-contact" src=<?php echo e($contact->contactType->getIcon()); ?> alt="">
                                                <span style="vertical-align: top"><?php echo e($contact->value); ?></span>
                                            </div>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </td>
                                    <td>
                                        <?php echo e($agent->chatUser->name ?? ''); ?>

                                    </td>
                                    <td class="text-right text-nowrap">
                                        <a href="<?php echo e(action("AgentController@edit", $agent)); ?>" class="action-button">
                                            <span class="mi mi-edit"></span>
                                        </a>
                                        <?php $__env->startComponent('components.delete-record',
                                                ['action' => 'AgentController@destroy',
                                                'object' => $agent]); ?>
                                        <?php echo $__env->renderComponent(); ?>
                                        <a href="<?php echo e(action("AgentController@show", $agent)); ?>" class="action-button">
                                            <span class="mi mi-remove-red-eye"></span>
                                        </a>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </tbody>
                        </table>
                        </div>
                        <?php echo e($agents->appends(Request::input())->links()); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>