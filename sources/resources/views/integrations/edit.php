<?php $__env->startSection('content'); ?>
    <script>
        window.configs = <?php echo json_encode($configs); ?>;
        window.languages = <?php echo json_encode($languages); ?>;
        window.translates = <?php echo json_encode($translates); ?>;
    </script>
    <div class="card">
        <div class="card-body">
            <integration-creator chat_users="<?php echo e(json_encode($chatUsers)); ?>"
                                 services="<?php echo e(json_encode($services)); ?>"
                                 departments="<?php echo e(json_encode($departments)); ?>"
                                 agent="<?php echo e(json_encode($agent)); ?>"
                                 edit="1"
            ></integration-creator>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>