<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson('site.button_setting.page_title'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('ConfigController@index'),
                'name' => __('site.button_setting.page_title')
            ],
            [
                'url' => action('ConfigController@edit', $config),
                'name' => __('site.buttons.edit')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
        window.languages = <?php echo $languages; ?>;
    </script>
    <div class="">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <color
                            styles="<?php echo e(json_encode($config->getStyleConfigs())); ?>"
                            fonts="<?php echo e(json_encode(\App\Models\SiteConfig::getFontsList())); ?>"
                            name="<?php echo e($config->name); ?>"
                            id="<?php echo e($config->id); ?>"
                            has_live="<?php echo e($hasLive); ?>"
                            logo="<?php echo e($config->logo ? $config->logo->toJSON() : null); ?>"
                            default_operator_img="<?php echo e($config->defaultOperatorImg ? $config->defaultOperatorImg->toJSON(): null); ?>"
                            default_chatbot_img="<?php echo e($config->defaultChatbotImg ? $config->defaultChatbotImg->toJSON(): null); ?>"
                            message_notification="<?php echo e($config->messageNotification ? $config->messageNotification->url : url('/audio/notification.mp3')); ?>"
                    />
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>