<div class="form-group text-center row <?php echo e(isset($class) ? $class : ''); ?>">
    <?php if(isset($label)): ?>
        <label for="<?php echo e($name); ?>" class="control-label col-sm-4 text-right">
            <?php echo e($label); ?>

            <?php if(isset($required)): ?>
                <span class="text-danger">*</span>
            <?php endif; ?>
        </label>
    <?php endif; ?>
    <div class="col-sm-6">
        <input id="<?php echo e($name); ?>"
               type="<?php echo e(isset($type) ? $type : 'text'); ?>"
               class="form-control <?php echo e(isset($classInput) ? $classInput : ''); ?> <?php echo e($errors->has($name) ? ' is-invalid' : ''); ?>"
               name="<?php echo e($name); ?>"
               placeholder="<?php echo e(isset($placeholder) ? $placeholder : ''); ?>"
               value="<?php echo e(old($name) ?: (isset($value) ? trim($value) : '')); ?>"
                <?php echo e(isset($attributes) ? $attributes : ''); ?>

                <?php echo e(isset($required) ? 'required' : ''); ?>>

        <?php if($errors->has($name)): ?>
            <span class="invalid-feedback">
            <strong><?php echo e($errors->first($name)); ?></strong>
        </span>
        <?php endif; ?>
    </div>

</div>