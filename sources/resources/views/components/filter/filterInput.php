<?php
    $_name = isset($inputName) ? $inputName : "filter[$name]";
    $_requestName = str_replace(['[]', '][', '[', ']', ' '], ['', '.', '.', '', '.'], $_name);
    $type = $type ?? 'text'
?>
<input
        class="form-control input-filter <?php echo e(isset($class) ? $class : ''); ?>"
        type=<?php echo e($type); ?>

        name="<?php echo e($_name); ?>"
        placeholder="<?php echo e($placeholder ?? ""); ?>"
        <?php echo e(isset($notSubmit) ? ' ' : 'onchange=this.form.submit()'); ?>

        value="<?php echo e($value ?? request()->input($_requestName)); ?>"
        <?php echo e(isset($class) == 'datepicker' ? 'autocomplete=off' : ''); ?>

/>
