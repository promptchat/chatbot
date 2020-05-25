<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('AnnouncementController@index'),
                'name' => __('site.announcement.page_title')
            ],
            [
                'url' => null,
                'name' => __('site.buttons.edit')
            ]
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <form
                            role="form"
                            method="post"
                            action="<?php echo e(action('AnnouncementController@update', $announcement)); ?>"
                            enctype="multipart/form-data"
                            class="col-xl-10 offset-xl-1 col-lg-12 py-3"
                    >
                        <div class="row">
                            <div class="col-lg-6">
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
                                <div class="row" style="margin: 0 -20px;">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="start">Start date</label>
                                            <input id="datetimepicker1" class="form-control" name="start_date" required value="<?php echo e(Carbon\Carbon::parse($announcement->start)->format('d/m/Y')); ?>">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="start">Start time</label>
                                            <input id="datetimepickertime1" class="form-control" name="start_time" required value="<?php echo e(Carbon\Carbon::parse($announcement->start)->format('H:i')); ?>">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-6">
                                <?php $__env->startComponent('components.form.select2Multiple', [
                                    'label' => 'Tags',
                                    'name' => 'tags[]',
                                    'id' => 'tag-select',
                                    'options' => $tags->mapWithKeys(function ($elem) {
                                        return [$elem->id => $elem->name];
                                    }),
                                    'selected' => $announcement->tags->pluck('tag_id')->toArray()
                                ]); ?>
                                <?php echo $__env->renderComponent(); ?>
                                <?php $__env->startComponent('components.form.select2Multiple', [
                                    'label' => 'Integrations',
                                    'name' => 'agents[]',
                                    'id' => 'agent-select',
                                    'options' => $agents->mapWithKeys(function ($elem) {
                                        return [$elem->id => $elem->name];
                                    }),
                                    'selected' => $announcement->agents->pluck('agent_id')->toArray()
                                ]); ?>
                                <?php echo $__env->renderComponent(); ?>
                                <div class="form-group">
                                    <label for="start">Session count:</label>
                                    <span id="session-counter"><?php echo e($announcement->chatSessions->count()); ?></span>
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