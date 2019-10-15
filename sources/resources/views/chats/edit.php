<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.chatbots.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <chat-creator
            logo="<?php echo e(\App\Models\SiteConfig::getLogo()); ?>"
            id="<?php echo e($chat->id); ?>"
            name="<?php echo e($chat->name); ?>"
            data="<?php echo e(json_encode($chat->chat->getItems())); ?>"
    />
<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', ['hiddenMenu' => true], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>