<?php $__env->startSection('body'); ?>
    <div
        id="app"
        class="d-flex justify-content-center align-items-center"
        style="height: 90vh; color: green;"
    >
        Payment success
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>