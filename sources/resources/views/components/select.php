<select  class="custom-select" id="id_<?php echo e($name); ?>" name="<?php echo e($name); ?>" <?php if($required ?? false): ?> required <?php endif; ?>>
    <?php if(!isset($empty) || $empty !== false ): ?><option value=""><?php echo e($label ?? $empty); ?></option><?php endif; ?>
    <?php $__currentLoopData = $options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $val =>  $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <option value="<?php echo e($val); ?>" <?php if(old($name, $default ?? null) == $val): ?> selected <?php endif; ?>><?php echo e($option); ?></option>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</select>

<?php if($errors->has($name)): ?>
    <span class="help-block">
        <?php $__currentLoopData = $errors->get($name); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php echo e($error); ?><?php if($loop->remaining): ?><br><?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </span>
<?php endif; ?>
