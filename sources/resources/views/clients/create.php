<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <form action="<?php echo e(action('SessionController@createClient')); ?>" method="POST">
                <?php echo csrf_field(); ?>
                <?php $__env->startComponent('components.form.select2', [
                    'label' => 'Integration (SmsChat only)',
                    'name' => 'agent_id',
                    'options' => $agents,
                    'required' => true
                ]); ?>
                <?php echo $__env->renderComponent(); ?>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" name="phone" required>
                </div>
                <button type="submit" class="btn btn-success">Save</button>
            </form>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>