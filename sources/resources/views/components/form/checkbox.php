<div class="form-group <?php echo e(isset($class) ? $class : ''); ?>">
    <div class="custom-control custom-checkbox d-inline-block">

        <input
               type="hidden"
               name="<?php echo e($name); ?>"
               value="0"
        >


        <input id="<?php echo e($name); ?>"
               type="checkbox"
               class="custom-control-input <?php echo e(isset($classInput) ? $classInput : ''); ?> <?php echo e($errors->has($name) ? ' is-invalid' : ''); ?>"
               name="<?php echo e($name); ?>"
               value="1"
               <?php if(old($name) ?: (isset($value) ? $value : false)): ?>
                   checked
               <?php endif; ?>
               <?php echo e(isset($attributes) ? $attributes : ''); ?>

        >

        <?php if(isset($label)): ?>
            <label class="custom-control-label" for="<?php echo e($name); ?>">
                <?php echo e($label); ?>

                <?php if(isset($required)): ?>
                    <span class="text-danger">*</span>
                <?php endif; ?>
            </label>
        <?php endif; ?>

    </div>

    <?php if($errors->has($name)): ?>
        <span class="invalid-feedback">
            <strong><?php echo e($errors->first($name)); ?></strong>
        </span>
    <?php endif; ?>
</div>