<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.chatbots.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <template-creator
            logo="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>"
            id="<?php echo e($template->id); ?>"
            <?php if($template->image): ?>
            image="<?php echo e($template->image->toJSON()); ?>"
            <?php endif; ?>
            marks_list="<?php echo e($marksList->toJSON()); ?>"
            marks="<?php echo e($template->marks()->pluck('name')->toJSON()); ?>"
            name="<?php echo e($template->name); ?>"
            temporary_chat_id="<?php echo e($template->temporary_chat_id); ?>"
            chat_id="<?php echo e($template->chat_id); ?>"
    />
<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', ['hiddenMenu' => true], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>