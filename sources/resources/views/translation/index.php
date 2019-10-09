<?php $__env->startSection('page-name'); ?>
    <?php echo app('translator')->getFromJson("site.translate.page_title"); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <?php echo $__env->make('components.breadcrumbs', [
        'elements' => [
            [
                'url' => action('TranslationController@index'),
                'name' => __('site.translate.page_title')
            ],
        ],
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <?php $__env->startComponent('components.grid', ['filterAction' => action('TranslationController@index')]); ?>
                            <?php $__env->slot('header'); ?>
                                <th class="with-100">
                                    <?php echo \Kyslik\ColumnSortable\SortableLink::render(array ('group', __('site.translate.group')));?>
                                </th>
                                <th class="with-100">
                                    <?php echo \Kyslik\ColumnSortable\SortableLink::render(array ('item', __('site.translate.item')));?>
                                </th>
                                <th class="with-100">
                                    <?php echo \Kyslik\ColumnSortable\SortableLink::render(array ('text', __('site.translate.text')));?>
                                </th>
                                <th></th>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('filters'); ?>
                                <td><?php $__env->startComponent('components.filter.filterSelect', ['name' => 'group', 'options' => $groups]); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterInput',['name' => 'item']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td><?php $__env->startComponent('components.filter.filterInput',['name' => 'text']); ?><?php echo $__env->renderComponent(); ?></td>
                                <td>
                                    <div class="form-control clear-input-filter"></div>
                                </td>
                            <?php $__env->endSlot(); ?>

                            <?php $__env->slot('data'); ?>
                                <?php $__empty_1 = true; $__currentLoopData = $translations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $translation): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <tr>
                                        <td>
                                            <?php echo e($translation->group); ?>

                                        </td>
                                        <td>
                                            <?php echo e($translation->item); ?>

                                        </td>
                                        <td>
                                            <?php echo e($translation->text); ?>

                                        </td>
                                        <td class="text-right text-nowrap">
                                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update', $translation)): ?>
                                                <a href="<?php echo e(action("TranslationController@edit", $translation)); ?>"
                                                   class="action-button">
                                                    <span class="mi mi-edit"></span>
                                                </a>
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
                        <?php echo $__env->renderComponent(); ?>
                    </div>
                    <?php echo e($translations->appends(Request::input())->links()); ?>

                </div>
            </div>
        </div>
    </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>