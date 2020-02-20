<?php $__env->startSection('content'); ?>
    <script>
        window.numbers = <?php echo json_encode($numbers); ?>;
    </script>
    <div class="card">
        <div class="card-body">
            <integration-creator chat_users="<?php echo e(json_encode($chatUsers)); ?>"
                                 services="<?php echo e(json_encode($services)); ?>"

            ></integration-creator>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>