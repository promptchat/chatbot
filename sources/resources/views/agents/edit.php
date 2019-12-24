<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.chat_box.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AgentController@index'),
                'name' => __('site.chat_box.page_title')
            ],
            [
                'url' => action('AgentController@edit', $agent),
                'name' => __('site.buttons.edit')
            ]
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <form
                role="form"
                method="post"
                action="<?php echo e(action('AgentController@update', $agent)); ?>"
                enctype="multipart/form-data"
        >
            <?php echo e(csrf_field()); ?>

            <?php echo e(method_field("patch")); ?>

            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 offset-md-3">
                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.chat_box.name'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.chat_box.name'); ?>"
                                        type="text"
                                        name="name"
                                        value="<?php echo e($agent->name ?? old("name")); ?>"
                                        class="form-control"
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "name"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.chat_box.pid'); ?></label>
                                <input
                                        placeholder="<?php echo app('translator')->getFromJson('site.chat_box.pid'); ?>"
                                        type="text"
                                        name="pid"
                                        value="<?php echo e($agent->pid ?? old("pid")); ?>"
                                        class="form-control"
                                >
                                <?php $__env->startComponent('components.errors', ['field' => "pid"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>
                            <div class="form-group select-field">
                                <label for="title"><?php echo app('translator')->getFromJson('site.chat_box.user_chat_id'); ?></label>
                                <?php $__env->startComponent('components.select', [
                                    'empty' => __('site.chat_box.none'),
                                    'options' => $userChats,
                                    'name' => 'chat_user_id',
                                    'default' => $agent->chat_user_id
                                ]); ?><?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.errors', ['field' => "chat_user_id"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>

                            <div class="form-group select-field">
                                <label for="title"><?php echo app('translator')->getFromJson('site.chat_box.button_config'); ?></label>
                                <?php $__env->startComponent('components.select', [
                                    'empty' => __('site.chat_box.none'),
                                    'options' => $configs,
                                    'name' => 'config_id',
                                    'default' => $agent->config_id
                                ]); ?><?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.errors', ['field' => "config_id"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>

                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.chat_box.department_text'); ?></label>
                                <?php $__env->startComponent('components.select', [
                                    'empty' => __('site.chat_box.none'),
                                    'options' => $departments,
                                    'name' => 'department_id',
                                    'default' => $agent->department_id
                                ]); ?><?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.errors', ['field' => "department_id"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>

                            <div class="form-group">
                                <label for="title"><?php echo app('translator')->getFromJson('site.chat_box.language'); ?></label>
                                <?php $__env->startComponent('components.select', [
                                    'empty' => false,
                                    'options' => $languages,
                                    'default' => $agent->translator_language_locale,
                                    'name' => 'translator_language_locale',
                                ]); ?><?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.errors', ['field' => "translator_language_locale"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>

                            <?php if($agent->company->liveChatEnabled()): ?>
                                <div class="form-group my-4">
                                    <?php $__env->startComponent('components.form.checkbox', [
                                        'label' => __('site.chat_box.live_enabled'),
                                        'name' => 'live_enabled',
                                        'value' => $agent->live_enabled
                                    ]); ?><?php echo $__env->renderComponent(); ?>
                                    <?php $__env->startComponent('components.errors', ['field' => "live_enabled"]); ?><?php echo $__env->renderComponent(); ?>
                                </div>
                            <?php endif; ?>

                            <div class="form-group my-4">
                                <?php $__env->startComponent('components.form.checkbox', [
                                    'label' => __('site.chat_box.is_rtl'),
                                    'name' => 'is_rtl',
                                    'value' => $agent->is_rtl
                                ]); ?><?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.errors', ['field' => "is_rtl"]); ?><?php echo $__env->renderComponent(); ?>
                            </div>

                            <div class="form-group">
                                <socials socials="<?php echo e(json_encode($agent->getFormattedContacts())); ?>"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12 bottom-btn">
                    <button type="submit"
                            class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('site.buttons.save'); ?></button>
                </div>
            </div>
        </form>
    </div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>