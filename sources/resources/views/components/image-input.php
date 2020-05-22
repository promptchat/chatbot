<label for="<?php echo e($name); ?>-file" class="form-group image-input-wrapper">
    <?php if(isset($label)): ?>
        <label for="<?php echo e($name); ?>" class="control-label"><?php echo e($label); ?></label>
    <?php endif; ?>

    <img class="image-input-preview" src="<?php echo e(isset($value) ? $value : \App\Models\Image::getImageById(old($name) ?: ($value ?? ''))); ?>" alt="">

    <input id="<?php echo e($name); ?>"
       type="hidden"
       class="image-input-value"
       name="<?php echo e($name); ?>"
       value="<?php echo e(old($name) ?: (isset($value) ? $value : '')); ?>"
       <?php echo e(isset($attributes) ? $attributes : ''); ?>

    >

    <input id="<?php echo e($name); ?>-file"
       type="file"
       class="image-input"
       name="image"
    >

    <?php if($errors->has($name)): ?>
        <span class="invalid-feedback">
            <strong><?php echo e($errors->first($name)); ?></strong>
        </span>
    <?php endif; ?>
</label>
