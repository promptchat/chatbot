<?php
    $_name = isset($inputName) ? $inputName : "filter[$name]";
    $_requestName = str_replace(['[]', '][', '[', ']', ' '], ['', '.', '.', '', '.'], $_name);
?>
<div class="select2-block <?php echo e(isset($label) ? 'form-group' : ''); ?>">
    <?php if(isset($label)): ?>
        <label for="<?php echo e($name); ?>" class="control-label">
            <?php echo e($label); ?>

            <?php if(isset($required)): ?>
                <span class="text-danger">*</span>
            <?php endif; ?>
        </label>
    <?php endif; ?>
    <select class="form-control select2 select-filter" id="<?php echo e($_name); ?>" name="<?php echo e($_name); ?>" <?php echo e(isset($notSubmit) ? ' ' : 'onchange=this.form.submit()'); ?>>
        <?php if($prompt = isset($prompt) ? $prompt : 'All'): ?>
            <option value=""><?php echo e($prompt); ?></option>
        <?php endif; ?>
        <?php $__currentLoopData = $options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $value => $name): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <option <?php echo e($value == ($selected ?? request()->input($_requestName)) ? 'selected': ''); ?> value="<?php echo e($value); ?>"><?php echo e($name); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
</div>

