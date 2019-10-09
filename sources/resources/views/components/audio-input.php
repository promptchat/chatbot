<label for="<?php echo e($name); ?>-file" class="form-group audio-input-wrapper">
    <?php if(isset($label)): ?>
        <label for="<?php echo e($name); ?>" class="control-label"><?php echo e($label); ?></label>
    <?php endif; ?>

    <audio  controls class="audio-input-preview my-1 d-block" src="<?php echo e(\App\Models\Image::getAudioById(old($name) ?: ($value ?? ''), $default)); ?>" >
    </audio>

    <input id="<?php echo e($name); ?>"
       type="hidden"
       class="audio-input-value"
       name="<?php echo e($name); ?>"
       value="<?php echo e(old($name) ?: (isset($value) ? $value : '')); ?>"
       <?php echo e(isset($attributes) ? $attributes : ''); ?>

    >

    <input id="<?php echo e($name); ?>-file"
       type="file"
       class="audio-input"
       name="audio"
    >

    <?php if($errors->has($name)): ?>
        <span class="invalid-feedback">
            <strong><?php echo e($errors->first($name)); ?></strong>
        </span>
    <?php endif; ?>
</label>
