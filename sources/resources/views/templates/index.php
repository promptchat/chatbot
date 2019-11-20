<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.chatbots.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <?php if($errors->any()): ?>
        <div class="alert alert-danger">
            <?php echo implode('', $errors->all('<div>:message</div>')); ?>

        </div>
    <?php endif; ?>
    <div class="modal fade" id="importZip" tabindex="-1" role="dialog" aria-labelledby="importZipModal"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="<?php echo e(action('TemplateController@importFromZip')); ?>" method="POST"
                      enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <div class="modal-header">
                        <h5 class="modal-title" id="importZipModal">Import existing template</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="file" name="file"
                                   accept=".zip"
                                   required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="load" tabindex="-1" role="dialog" aria-labelledby="loadModal"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="<?php echo e(action('TemplateController@loadByCode')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <div class="modal-header">
                        <h5 class="modal-title" id="importZipModal">Load template by code</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="text" name="code"
                                   required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary"><?php echo app('translator')->getFromJson('site.buttons.load'); ?></button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="">
        <div class="card">
            <div class="card-body">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('create', \App\Models\Template\Template::class)): ?>
                    <div class="row mb-15">
                        <div class="col-sm-12">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#importZip">
                                <?php echo app('translator')->getFromJson('site.templates.import'); ?>
                            </button>

                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#load">
                                <?php echo app('translator')->getFromJson('site.templates.load'); ?>
                            </button>

                            <a href="<?php echo e(action('TemplateController@create')); ?>"
                               class="btn btn-primary text-uppercase pull-right">
                                <?php echo app('translator')->getFromJson('site.buttons.add'); ?>
                            </a>
                        </div>
                    </div>
                <?php endif; ?>
                <div class="row">
                    <div class="col-sm-12">
                        <?php $__env->startComponent('components.grid', ['filterAction' => action('TemplateController@index')]); ?>
                            <?php $__env->slot('header'); ?>
                                <th scope="col">Logo</th>
                                <th scope="col"><?php echo app('translator')->getFromJson('site.templates.template_name'); ?></th>
                                <th scope="col"><?php echo app('translator')->getFromJson('site.templates.marks'); ?></th>
                                <th scope="col" class="small-column text-center">
                                    <a href="<?php echo e(action('TemplateController@index')); ?>">
                                        <i class="fa fa-paint-brush"
                                           aria-hidden="true"></i>
                                    </a>
                                </th>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('filters'); ?>
                                <td>
                                    <div class="form-control clear-input-filter"></div>
                                </td>
                                <td><?php $__env->startComponent('components.filter.filterInput', ['name' => 'name']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td>
                                    <div class="form-control clear-input-filter"></div>

                                </td>
                                <td>
                                    <div class="form-control clear-input-filter"></div>
                                </td>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('data'); ?>
                                <?php $__empty_1 = true; $__currentLoopData = $templates; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $template): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr>
                                        <td style="width: 60px">
                                            <?php if($template->image): ?>
                                                <img src="<?php echo e('storage/' . $template->image->path); ?>" alt="">
                                            <?php endif; ?>
                                        </td>

                                        <td>
                                            <?php echo e($template->name); ?>

                                        </td>
                                        <td>
                                            <?php $__currentLoopData = $template->marks; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mark): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <span class="badge badge-secondary badge-pill"><?php echo e($mark->name); ?></span>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </td>
                                        <td class="text-right text-nowrap">
                                            <a href="<?php echo e(action('TemplateController@uploadZip', $template)); ?>"
                                               class="action-button">
                                                <span class="mi mi-cloud-upload"></span>
                                            </a>
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $template)): ?>
                                                <a href="<?php echo e(action("TemplateController@edit", $template)); ?>"
                                                   class="action-button">
                                                    <span class="mi mi-edit"></span>
                                                </a>
                                            <?php endif; ?>
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('delete', $template)): ?>
                                                <?php $__env->startComponent('components.delete-record',
                                                        ['action' => 'TemplateController@destroy',
                                                        'object' => $template]); ?>
                                                <?php echo $__env->renderComponent(); ?>
                                            <?php endif; ?>

                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                    <tr>
                                        <td colspan="100%">
                                            <?php echo app('translator')->getFromJson('site.no_result'); ?>
                                        </td>
                                    </tr>
                                <?php endif; ?>
                            <?php $__env->endSlot(); ?>
                            <?php $__env->slot('paginator'); ?>
                                <?php echo $templates->appends(\Request::except('page'))->render(); ?>

                            <?php $__env->endSlot(); ?>
                        <?php echo $__env->renderComponent(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>