<?php if(isset($filterAction)): ?>
    <form action="<?php echo e($filterAction); ?>">
<?php endif; ?>
    <?php if(isset($topFilters)): ?>
        <?php echo e($topFilters); ?>

    <?php endif; ?>
    <div class="table-responsive">
        <table class="table table-sm">
            <?php if(isset($header)): ?>
                <thead>
                    <tr>
                        <?php echo e($header); ?>

                    </tr>
                    <?php if(isset($filters) && !empty($filterAction)): ?>
                        <tr class="table-filter">
                            <?php echo e($filters); ?>

                        </tr>
                    <?php endif; ?>
                </thead>
            <?php endif; ?>
            <tbody>
                <?php if(isset($data)): ?>
                    <?php echo e($data); ?>

                <?php endif; ?>
            </tbody>
            <?php if(isset($paginateCounter)): ?>
                <caption class="paginate-counter">
                    <?php echo e($paginateCounter); ?>

                </caption>
            <?php endif; ?>
        </table>
    </div>

    <?php if(isset($paginator)): ?>
        <?php echo e($paginator); ?>

    <?php endif; ?>
<?php if(isset($filterAction)): ?>
    </form>
<?php endif; ?>
