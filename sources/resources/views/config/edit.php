<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson('site.button_setting.page_title'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <script>
        window.translates = <?php echo $translates; ?>;
    </script>
    <div class="container">
        <form
                role="form"
                method="post"
                action="<?php echo e(action('ConfigController@update')); ?>"
                enctype="multipart/form-data"
        >
            <?php echo e(csrf_field()); ?>

            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.button_setting.color'); ?></label>
                                <color
                                        styles="<?php echo e(json_encode($config->getStyleConfigs())); ?>"
                                />
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-8 offset-md-2">
                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.button_setting.welcome_text'); ?></label>
                                <textarea
                                        placeholder="<?php echo app('translator')->getFromJson('site.button_setting.welcome_text'); ?>"
                                        name="welcome_text"
                                        class="form-control"
                                ><?php echo e($config->welcome_text ?? old("welcome_text")); ?></textarea>
                                <?php $__env->startComponent('components.errors', ['field' => "welcome_text"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>

                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.button_setting.welcome_live_chat_text'); ?></label>
                                <textarea
                                        placeholder="<?php echo app('translator')->getFromJson('site.button_setting.welcome_live_chat_text'); ?>"
                                        name="welcome_live_chat_text"
                                        class="form-control"
                                ><?php echo e($config->welcome_live_chat_text ?? old("welcome_live_chat_text")); ?></textarea>
                                <?php $__env->startComponent('components.errors', ['field' => "welcome_live_chat_text"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>

                            <div class="form-group ">
                                <label for="title"><?php echo app('translator')->getFromJson('site.button_setting.live_chat_url'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.button_setting.live_chat_url'); ?>"
                                        type="text"
                                        name="live_chat_url"
                                        value="<?php echo e($config->live_chat_url ?? old("live_chat_url")); ?>"
                                        class="form-control"
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "live_chat_url"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-group select-field">
                                <label for="position"><?php echo app('translator')->getFromJson('site.button_setting.position'); ?></label>
                                <?php $__env->startComponent('components.select', [
                                    'empty' => false,
                                    'options' => ['left' => 'left', 'right' =>'right'],
                                    'name' => 'position',
                                    'default' => $config->position
                                ]); ?><?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.errors', ['field' => "position"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-group select-field">
                                <label for="size"><?php echo app('translator')->getFromJson('site.button_setting.size'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.button_setting.size'); ?>"
                                        type="text"
                                        name="size"
                                        value="<?php echo e($config->size ?? old("size")); ?>"
                                        class="form-control"
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "size"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-group select-field">
                                <label for="auto_open_time"><?php echo app('translator')->getFromJson('site.button_setting.auto_open_time'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.button_setting.auto_open_time'); ?>"
                                        type="text"
                                        name="auto_open_time"
                                        value="<?php echo e($config->auto_open_time ?? old("auto_open_time")); ?>"
                                        class="form-control"
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "auto_open_time"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12 bottom-btn">
                    <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                </div>
            </div>
        </form>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>