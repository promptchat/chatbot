<?php $__env->startSection('content'); ?>

    <div class="">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <form
                            role="form"
                            method="post"
                            action="<?php echo e(action('AnnouncementController@store')); ?>"
                            enctype="multipart/form-data"
                            class="col-xl-10 offset-xl-1 col-lg-12 py-3"
                    >
                        <div class="row">
                            <div class="col-lg-6">
                                <?php echo e(csrf_field()); ?>

                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="message">Message (You can use variables that your user had mentioned before)<br/>Ex: Hello, [name].</label>
                                    <textarea name="message" id="" cols="30" rows="10" class="form-control"
                                              required></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="start">Start (UTC)</label>
                                    <input id="datetimepicker1" class="form-control" name="start" required/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <?php $__env->startComponent('components.form.select2Multiple', [
                                    'label' => 'Tags',
                                    'id' => 'tag-select',
                                    'name' => 'tags[]',
                                    'options' => $tags->mapWithKeys(function ($elem) {
                                        return [$elem->id => $elem->name . ' (' . $elem->count . ' users)'];
                                    }),
                                ]); ?>
                                <?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.form.select2Multiple', [
                                    'label' => 'Integrations',
                                    'id' => 'agent-select',
                                    'name' => 'agents[]',
                                    'options' => $agents->mapWithKeys(function ($elem) {
                                        return [$elem->id => $elem->name . ' (' . $elem->count . ' users)'];
                                    }),
                                ]); ?>
                                <?php echo $__env->renderComponent(); ?>
                                <div class="pull-right" id="session-counter">
                                    <?php echo e($sessionsCount); ?>

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
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>