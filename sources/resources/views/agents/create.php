<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("Chat boxes management"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<div class="container">
    <form
            role="form"
            method="post"
            action="<?php echo e(action('AgentController@store')); ?>"
            enctype="multipart/form-data"
    >
        <?php echo e(csrf_field()); ?>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <div class="form-group">
                            <label for="name"><?php echo app('translator')->getFromJson('models.agent.name'); ?></label>
                            <input
                                    class="form-control"
                                    placeholder="<?php echo app('translator')->getFromJson('models.agent.name'); ?>"
                                    type="text"
                                    name="name"
                                    value="<?php echo e(old("name")); ?>"
                            >
                            <?php $__env->startComponent('components.errors', ['field' => "name"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
                        <div class="form-group">
                            <label for="title"><?php echo app('translator')->getFromJson('models.agent.pid'); ?></label>
                            <input
                                    placeholder="<?php echo app('translator')->getFromJson('models.agent.pid'); ?>"
                                    type="text"
                                    name="pid"
                                    value="<?php echo e(old("pid")); ?>"
                                    class="form-control"
                            >
                            <?php $__env->startComponent('components.errors', ['field' => "pid"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
                        <div class="form-group">
                            <label for="title"><?php echo app('translator')->getFromJson('models.agent.user_chat_id'); ?></label>
                            <?php $__env->startComponent('components.select', [
                                'empty' => __('models.agent.none'),
                                'options' => $userChats,
                                'name' => 'chat_user_id',
                            ]); ?><?php echo $__env->renderComponent(); ?>
                            <?php $__env->startComponent('components.errors', ['field' => "chat_user_id"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input
                                    placeholder="Enter e-mail"
                                    type="email"
                                    name="email"
                                    value="<?php echo e(old("email")); ?>"
                                    class="form-control"
                            >
                            <?php $__env->startComponent('components.errors', ['field' => "email"]); ?><?php echo $__env->renderComponent(); ?>
                        </div>
                        <div class="form-group">
                            <socials />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 bottom-btn">
                <button type="submit" class="btn btn-primary pull-right text-uppercase"><?php echo app('translator')->getFromJson('Save'); ?></button>
            </div>
        </div>
    </form>
</div>

<?php $__env->stopSection(); ?>






<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>