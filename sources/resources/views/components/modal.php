<div class="modal fade" id="<?php echo e($id); ?>" data-toggle="modal" role="dialog" aria-labelledby="<?php echo e($id); ?>-label" aria-hidden="true">
    <div class="modal-dialog <?php echo e(isset($modalClass) ? $modalClass : ''); ?>" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="<?php echo e($id); ?>-label"><?php echo e($title); ?></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php if(isset($body)): ?>
                    <?php echo e($body); ?>

                <?php endif; ?>
            </div>
        </div>
    </div>
</div>