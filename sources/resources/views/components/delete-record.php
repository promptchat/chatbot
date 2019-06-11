<div class="delete-form d-inline-block" style="width: 30px">
    <?php echo e(csrf_field()); ?>

    <a class="mx-1" data-toggle="modal" data-target="#modal-<?php echo e($object->id); ?>" href="#modal-<?php echo e($object->id); ?>">
        <span class="mi mi-close"></span>
    </a>

    <?php $__env->startComponent('components.modal', [
        'id' => 'modal-'.$object->id,
        'title' => __('site.delete_window.title')
    ]); ?>
        <?php $__env->slot('body'); ?>
            <h5 class="text-center"><?php echo app('translator')->getFromJson('site.delete_window.question'); ?></h5>
            <div><button type="button" class="btn btn-link" style="text-decoration: none" data-dismiss="modal"><?php echo app('translator')->getFromJson('site.delete_window.cancel'); ?></button><button type="button" class="btn btn-primary delete-form-btn" data-action="<?php echo e(action($action, $object->id)); ?>" data-id="<?php echo e($object->id); ?>"><?php echo app('translator')->getFromJson('site.delete_window.delete'); ?></button></div>
        <?php $__env->endSlot(); ?>
    <?php echo $__env->renderComponent(); ?>
</div>
