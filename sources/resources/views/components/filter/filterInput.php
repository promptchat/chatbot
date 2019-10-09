<?php
    $_name = isset($inputName) ? $inputName : "filter[$name]";
    $_requestName = str_replace(['[]', '][', '[', ']', ' '], ['', '.', '.', '', '.'], $_name);

?>
<input
        class="form-control input-filter <?php echo e(isset($class) ? $class : ''); ?>"
        type="text"
        name="<?php echo e($_name); ?>"
        <?php echo e(isset($notSubmit) ? ' ' : 'onchange=this.form.submit()'); ?>

        value="<?php echo e($value ?? request()->input($_requestName)); ?>"
        <?php echo e(isset($class) == 'datepicker' ? 'autocomplete=off' : ''); ?>

/>
