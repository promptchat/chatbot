<?php $__env->startSection('content'); ?>

    <div class="">
        <div class="card">
            <div class="card-body">
                <form
                        role="form"
                        method="post"
                        action="<?php echo e(action('AnnouncementController@update', $announcement)); ?>"
                        enctype="multipart/form-data"
                >
                    <div class="row">
                        <div class="col-md-4 offset-md-2">
                            <?php echo e(csrf_field()); ?>

                            <?php echo e(method_field('PATCH')); ?>

                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" name="name" required value="<?php echo e($announcement->name); ?>">
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea name="message" id="" cols="30" rows="10" class="form-control"
                                          required><?php echo e($announcement->message); ?></textarea>
                            </div>
                            <div class="form-group">
                                <label for="start">Start</label>
                                <input id="datetimepicker1" class="form-control" name="start" required value="<?php echo e($announcement->start); ?>">
                            </div>
                        </div>
                        <div class="col-md-4 offset-md-2">
                            <?php $__env->startComponent('components.form.select2Multiple', [
                                'label' => 'Clients',
                                'name' => 'tags[]',
                                'options' => $tags,
                            ]); ?>
                            <?php echo $__env->renderComponent(); ?>
                            <?php $__env->startComponent('components.form.select2Multiple', [
                                'label' => 'Clients',
                                'name' => 'agents[]',
                                'options' => $agents,
                                'values' => old('agents')
                            ]); ?>
                            <?php echo $__env->renderComponent(); ?>
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
        </div>
    </div>

<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>