<div class="form-group select2-block <?php echo e(isset($class) ? $class : ''); ?>">
    <?php if(isset($label)): ?>
        <label for="<?php echo e($name); ?>" class="control-label">
            <?php echo e($label); ?>

            <?php if(isset($required)): ?>
                <span class="text-danger">*</span>
            <?php endif; ?>
        </label>
    <?php endif; ?>
    <select class="select2-multiple d-none form-control <?php echo e(isset($selectClass) ? $selectClass : ''); ?> <?php echo e($errors->has($name) ? ' is-invalid' : ''); ?>"
            multiple="multiple"
            id="<?php echo e($id ?? $name); ?>"
            name="<?php echo e($name); ?>"
            <?php echo e(isset($attributes) ? $attributes : ''); ?>

            <?php echo e(isset($required) ? 'required' : ''); ?>

    >
        <?php if($options): ?>
            <?php $__currentLoopData = $options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $value => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option  <?php if(in_array($value, array_wrap(old($name, $selected ?? [])))): ?> selected <?php endif; ?> value="<?php echo e($value); ?>"><?php echo e($option); ?></option>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>
    </select>

    <?php if($errors->has($name)): ?>
        <span class="invalid-feedback">
            <strong><?php echo e($errors->first($name)); ?></strong>
        </span>
    <?php endif; ?>
</div>
