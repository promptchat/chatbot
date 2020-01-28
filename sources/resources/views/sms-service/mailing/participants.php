<?php $__env->startSection('content'); ?>

    <div class="card">
        <div class="card-body">
            <form action="<?php echo e(action('Sms\MailingController@importParticipants', $mailing)); ?>" enctype="multipart/form-data" method="POST">
                <?php echo csrf_field(); ?>
                <label for="file">Import from .csv file</label>
                <input type="file" name="file" class="form-control" accept=".csv" required>
                <button type="submit" class="btn btn-info mt-2">Import</button>
            </form>
        </div>
        <div class="card-body">

        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.sms-service', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>