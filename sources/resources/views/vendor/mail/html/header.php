<tr>
<td class="header">
<a href="<?php echo e($url); ?>" style="display: inline-block;">
<?php if(trim($slot) === 'Laravel'): ?>
<img
    src="<?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getLogo()); ?>"
    class="logo"
    alt="<?php echo e(app(\App\Repositories\Interfaces\ConfigsRepositoryInterface::class)->getTitle()); ?>"
>
<?php else: ?>
<?php echo e($slot); ?>

<?php endif; ?>
</a>
</td>
</tr>
