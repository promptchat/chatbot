<div class="row">
    <div class="col-sm-12">
        Ip: <?php echo e($chatSession->ip); ?><br>
        Url: <?php echo e($chatSession->url); ?><br>
        Created at: <?php echo e($chatSession->created_at); ?><br>
        <br>
        <table class="table table-sm">
            <?php $__currentLoopData = $variables; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $name => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <th>
                        <strong><?php echo e($name); ?></strong>
                    </th>
                    <td>
                        <?php echo e($value); ?>

                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        </table>
    </div>
</div>
