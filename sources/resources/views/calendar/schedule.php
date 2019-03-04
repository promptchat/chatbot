<table >
    <thead>
        <tr>
            <td></td>
            <td>Working hours</td>
            <td>Dinner break</td>
        </tr>
    </thead>
    <tbody>
        <?php $__currentLoopData = $workingHours; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $workingHour): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if($workingHour->working): ?>
                <tr>
                    <td><?php echo e(substr(\Carbon\Carbon::getDays()[$workingHour->day_of_week], 0, 2)); ?></td>

                        <td><?php echo e($workingHour->workingTimes()); ?></td>
                        <td><?php echo e($workingHour->dinnerTimes()); ?></td>
                </tr>
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </tbody>
</table>