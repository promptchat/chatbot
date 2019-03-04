<form class="delete-form d-inline-block" style="width: 30px" method="post" action="<?php echo e(action($action, $object)); ?>">
    <?php echo e(method_field('delete')); ?>

    <?php echo e(csrf_field()); ?>

    <a class="mx-1" data-toggle="modal" data-target="#modal-<?php echo e($object->id); ?>" href="#modal-<?php echo e($object->id); ?>">
        <span class="mi mi-close"></span>
    </a>

    <?php $__env->startComponent('components.modal', [
        'id' => 'modal-'.$object->id,
        'title' => __('Delete')
    ]); ?>
        <?php $__env->slot('body'); ?>
            <h5 class="text-center">Do you want to delete this record?</h5>
            <div><button type="button" class="btn btn-link" style="text-decoration: none" data-dismiss="modal">Cancel</button><button type="submit" class="btn btn-primary">Delete</button></div>
        <?php $__env->endSlot(); ?>
    <?php echo $__env->renderComponent(); ?>
</form>
