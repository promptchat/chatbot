<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.chatbots.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <chat-creator
            logo="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>"
            id="<?php echo e($chatUser->id); ?>"
            name="<?php echo e($chatUser->name); ?>"
            temporary_chat_id="<?php echo e($chatUser->temporary_chat_id); ?>"
            chat_id="<?php echo e($chatUser->chat_id); ?>"
    />
<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', ['hiddenMenu' => true], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>