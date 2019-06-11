<div class="row">
    <div class="col-md-12 text-center mt-2 mb-5">
        <h2><strong><?php echo app('translator')->getFromJson('site.guide.title', ['title' => \App\Models\SiteConfig::getTitle()]); ?></strong></h2>
        <p><?php echo app('translator')->getFromJson('site.guide.subtitle'); ?></p>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-1.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p1', ['title' => \App\Models\SiteConfig::getTitle()]); ?>
        </p>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-2.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p2'); ?>
        </p>
    </div>
    <div class="col-md-12 mb-5">
        <hr>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-3.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p3'); ?>
        </p>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-4.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p4'); ?>
        </p>
    </div>
    <div class="col-md-12 mb-5">
        <hr>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-5.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p5'); ?>
        </p>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-6.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p6'); ?>
        </p>
    </div>
    <div class="col-md-12 mb-5">
        <hr>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-7.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p7', ['url' => url('/registration-live-chat')]); ?>
        </p>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-8.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p8'); ?>
        </p>
    </div>
    <div class="col-md-12 mb-5">
        <hr>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-9.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p9'); ?>
        </p>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-10.png" class="img-fluid mb-2">
        <p>
            <?php echo app('translator')->getFromJson('site.guide.p10'); ?>
        </p>
    </div>
    <div class="col-md-12 mb-5">
        <hr>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-11.png" class="img-fluid mb-2">
        <?php echo app('translator')->getFromJson('site.guide.p11'); ?>
    </div>
    <div class="col-md-6 mb-4">
        <img src="/img/getting-started/guide-12.png" class="img-fluid mb-2">
        <?php echo app('translator')->getFromJson('site.guide.p12'); ?>
    </div>
</div>