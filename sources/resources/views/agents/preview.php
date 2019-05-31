<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="<?php echo e(asset('js/app.js')); ?>" defer></script>

    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(\App\Models\SiteConfig::getFavicon()); ?>">

    <link href="<?php echo e(asset('css/preview.css')); ?>" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
</head>
<body>
<?php echo $agent->getWidget(); ?>

<div class="wrapper">
    <header>
        <div  class="container ">
            <div class="row header-box">
                <div class=" col-lg-12 top-header">
                    <div class="row top-header-box">
                        <div class=" col-sm-6 col-12  left-side text-uppercase">
                            <div class="login ">
                                <a>login</a>
                            </div>
                            <div class="register">
                                <a>register</a>
                            </div>
                        </div>
                        <div class="  col-sm-6 col-12 right-side">
                            <div class="inside-right-side">
                                <div class="mail row">
                                    <span class="icon col-lg-2 " >
                                      <i class="fas fa-envelope-open"></i>
                                    </span>
                                    <a href="#" class="col-lg-10 ">info@demolink.org</a>
                                </div>
                                <div class="tel-number row ">
                                    <span class="icon col-lg-2 " >
                                      <i class="fas fa-phone-volume"></i>
                                    </span>
                                    <a href="#" class="col-lg-10 ">1-800-1234-567</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" col-xl-12 bottom-header">
                    <div class="liner">
                        <div class=" logo">
                            <img src="../img/logo.png" class="logo-img" alt="" />
                        </div>

                        <nav class="menu navbar navbar-expand-lg bg-white navbar-light">
                            <div class="navbar-box">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>

                            <div class="collapse navbar-collapse " id="collapsibleNavbar">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#"><span>HOME</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link"  href="#"><span>CATALOG</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><span>SUBMIT PROPERTY</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><span>SERVICES</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><span>ABOUT</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><span>CONTACTS</span></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="container picture-container">
        <div class="picture  ">
            <a>
                <img src="/img/preview-images/building3.jpg" alt="building" >
            </a>
            <div class="inscription">
                <p class="text">Single Property Page</p>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item "><a class="a-text" href="#">Home</a></li>
                    <li class="breadcrumb-item central"><a class="a-text" href="#">Catalog</a></li>
                    <li class="breadcrumb-item active">Single Property Page</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="content-box container">
        <div class="row content-box-row">
            <div class="headline col-12 ">
                <h2>The Presidio Residences</h2>
                <hr>
            </div>

            <div class=" content col-12  ">
                <div class="content-row row">
                    <div class="col-lg-7 col-xl-8 col-12  left-content">
                        <div id="demo" class="carousel fade flex-conteiner" data-ride="carousel">
                            <!-- The slideshow -->
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <a>
                                        <img src="/img/preview-images/apartment.jpg" alt="apartment">
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a>
                                        <img src="/img/preview-images/apartment1.jpg" alt="apartment">
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a>
                                        <img src="/img/preview-images/apartment2.jpg" alt="apartment">
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a>
                                        <img src="/img/preview-images/apartment3.jpg" alt="apartment">
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a>
                                        <img src="/img/preview-images/apartment4.jpg" alt="apartment">
                                    </a>
                                </div>

                            </div>
                            <!-- Left and right controls -->
                            <a class="carousel-control-prev " id="pointer-prev" href="#demo" data-slide="prev">
                                <img src="/img/preview-images/left-pointer.png" class="slider-img" alt="" />
                            </a>
                            <a class="carousel-control-next " id="pointer-next" href="#demo" data-slide="next">
                                <img src="/img/preview-images/right-pointer.png" class="slider-img" alt="" />
                            </a>

                        </div>

                        <div class="description">
                            <h5 class="description-name">Description</h5>
                            <div class="description-text">
                                <p class="first-part-desc">
                                    The Presidio Residences offer a unique opportunity to live in a national park setting and enjoy quiet neighborhoods, convenient location, beautiful open spaces, and outstanding recreational amenities that you won’t find anywhere else in the area.
                                </p>
                                <p class="second-part-desc">
                                    This property includes a wide variety of facilities that can make your dwelling in the picturesque area of Southern Los Angeles very comfortable. There is everything modern citizen may need, even the most up-to-date technologies that are organically integrated with all the communications of the house. If you are looking for a calm place to live, the Presidential Residences have something to offer you. With effective planning and additional amenities available as a part of the property, these apartments can give you an unprecedented level of comfort with a quick access to the airport, train station, and the city center.
                                </p>
                            </div>
                        </div>

                        <div class="details table-responsive">
                            <table class="table ">
                                <thead>
                                <tr>
                                    <th>Property details</th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <th>Features</th>
                                    <td>Lawn, Sprinkler System, Marble Floors</td>
                                </tr>
                                <tr>
                                    <th>MLS Listing ID</th>
                                    <td>12345678</td>
                                </tr>
                                <tr>
                                    <th>Year Built</th>
                                    <td>1868</td>
                                </tr>
                                <tr>
                                    <th>Lot Size</th>
                                    <td>5.45</td>
                                </tr>
                                <tr>
                                    <th>Parking Type</th>
                                    <td>Garage - Attached</td>
                                </tr>
                                <tr>
                                    <th>Room Count</th>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <th>Roof Type</th>
                                    <td>Tile</td>
                                </tr>
                                <tr>
                                    <th>View Type</th>
                                    <td>Mountain</td>
                                </tr>
                                <tr>
                                    <th>Exterior Type</th>
                                    <td>Stucco</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-lg-5 col-xl-4 col-12  right-content">
                        <div class="row right-content-row">
                            <div class="info-box col-12">
                                <div class="info ">
                                    <p class="date ">
                                        <span class="icon"><i class="fas fa-calendar-day"></i></span>
                                        <span class="">April 12, 2018</span>
                                    </p>
                                    <div class="apartment-info ">
                                        <ul>
                                            <li>2200 sq ft</li>
                                            <li>4 bedrooms</li>
                                            <li>3 bathrooms</li>
                                        </ul>
                                    </div>
                                    <div class="price ">
                                        <h5>$2699.00/mon</h5>
                                    </div>
                                </div>

                                <div class=" btns-box">
                                    <a class="btn btn-primary text-uppercase" href="#">contact an agent</a>
                                    <div class=" request-btn-box">
                                        <a class="btn btn-info text-uppercase" href="#">request a visit</a>
                                    </div>
                                </div>
                            </div>

                            <div class="manager-box col-12">
                                <div class="manager-in-box">
                                    <div class="unit-left">
                                        <img class="manager-foto" src="/img/preview-images/manager.jpg" width="120" height="120" alt="">
                                    </div>

                                    <div class="unit-right">
                                        <div class="manager-name">
                                            <h5 >Shirley Vasquez</h5>
                                        </div>
                                        <div class="manager-info">
                                            <address class="contact-info">
                                                <ul class="contacts-list">
                                                    <li class="info-block">
                                                        <span class="fas fa-phone-volume"></span>
                                                        <a class="item" href="#">1-800-7650-986</a>
                                                    </li>
                                                    <li class="info-block">
                                                        <span class="fas fa-envelope-open"></span>
                                                        <a class="item" href="#">shirley@demolink.org</a>
                                                    </li>
                                                </ul>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="similar-properties-box">
                <div class="headline col-12 ">
                    <h2>Similar Properties</h2>
                    <hr>
                </div>

                <div class="similar-properties">
                    <div class="row properties-description justify-content-sm-center">

                        <div class="col-md-4 property-block">
                            <div class="property-img-block">
                                <img class="property-img" src="/img/preview-images/home-img.jpg" alt="">
                            </div>

                            <div class="property-description">
                                <h5 class="property-name">
                                    <a href="#">Scandia Vista Apartments</a>
                                </h5>
                                <h6 class="property-price"> $1499.00/mon</h6>
                                <ul class=" property-info">
                                    <li>1200 sq ft</li>
                                    <li>4 bedrooms</li>
                                    <li>2 bathrooms</li>
                                </ul>
                                <div class="property-text">
                                    <p>Experience the ultimate comfort in one of our most renowned apartments with well thought-out planning, perfect furniture and cozy atmosphere.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 property-block ">

                            <div class="property-img-block">
                                <img class="property-img" src="/img/preview-images/home-img2.jpg" alt="">
                            </div>

                            <div class="property-description">
                                <div class="property-name ">
                                    <h5><a href="#">Alchemy by Alta</a></h5>
                                </div>
                                <h6 class="property-price"> $1299.00/mon</h6>
                                <ul class=" property-info ">
                                    <li>1100 sq ft</li>
                                    <li>3 bedrooms</li>
                                    <li>2 bathrooms</li>
                                </ul>
                                <div class="property-text">
                                    <p>One month FREE on select apartment homes for a limited time.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 property-block ">

                            <div class="property-img-block">
                                <img class="property-img" src="/img/preview-images/home-img3.jpg" alt="">
                            </div>

                            <div class="property-description">
                                <div class="property-name ">
                                    <h5><a href="#">Avalon at Mission Bay</a></h5>
                                </div>
                                <h6 class="property-price"> $1099.00/mon</h6>
                                <ul class=" property-info ">
                                    <li>900 sq ft</li>
                                    <li>2 bedrooms</li>
                                    <li>1 bathrooms</li>
                                </ul>
                                <div class="property-text">
                                    <p>Avalon at Mission Bay located in San Francisco near the San Francisco Caltrain Station offers thoughtfully designed studio, 1, 2 and 3 bedroom apartments and town homes.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer >
        <div class="container">
            <div class=" row justify-content-md-center text-xl-left">
                <div class="footer-box col-md-9 col-lg-12">
                    <div class="row justify-content-sm-center">

                        <div class="news col-sm-7 text-sm-left col-lg-4 col-xl-3 order-xl-4">
                            <h6 class="text-uppercase ">Latest news</h6>
                            <!-- Post Widget-->

                            <article class="post widget-post text-left">
                                <a href="#">
                                    <div class="unit flex-row unit-spacing-xs align-items-center">
                                        <div class="unit-body">
                                            <div class="post-meta">
                                                <span class=" fas fa-arrow-right"></span>
                                                <div class="time-tranform">
                                                    <time class="datetime" datetime="2018-01-01">05/14/2018</time>
                                                </div>

                                            </div>
                                            <div class="post-title">
                                                <h6 class="text-regular">Top 10 Apartments in LA</h6>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </article>

                            <!-- Post Widget-->
                            <article class="post widget-post text-left"><a href="#">
                                    <div class="unit flex-row unit-spacing-xs align-items-center">
                                        <div class="unit-body">
                                            <div class="post-meta"><span class="fas fa-arrow-right"></span>
                                                <div class="time-tranform">
                                                    <time class="datetime" datetime="2018-01-01">05/14/2018</time>
                                                </div>
                                            </div>
                                            <div class="post-title">
                                                <h6 class="text-regular">Choosing a Rental Property</h6>
                                            </div>
                                        </div>
                                    </div></a></article>
                            <!-- Post Widget-->
                            <article class="post widget-post text-left"><a href="#">
                                    <div class="unit flex-row unit-spacing-xs align-items-center">
                                        <div class="unit-body">
                                            <div class="post-meta"><span class="fas fa-arrow-right"></span>
                                                <div class="time-tranform">
                                                    <time class="datetime" datetime="2018-01-01">05/14/2018</time>
                                                </div>
                                            </div>
                                            <div class="post-title">
                                                <h6 class="text-regular">Features of Mortgage Loans</h6>
                                            </div>
                                        </div>
                                    </div></a></article>
                        </div>

                        <div class="links col-sm-5 offset-top-41 offset-sm-top-0 text-sm-left col-lg-3 col-xl-2 order-xl-3">
                            <h6 class="text-uppercase ">Useful Links</h6>

                            <div class="menu-list-block">
                                <ul class="list list-marked">
                                    <li><a href="#">Properties</a></li>
                                    <li><a href="#">Amenities</a></li>
                                    <li><a href="#">Rentals</a></li>
                                    <li><a href="#">Mortgages</a></li>
                                    <li><a href="#">Agents</a></li>
                                </ul>
                            </div>

                        </div>

                        <div class="newsletter col-sm-12 offset-top-41 col-lg-5 offset-lg-top-0 text-lg-left col-xl-4 order-xl-2">
                            <h6 class="text-uppercase ">Newsletter</h6>
                            <p>Keep up with the latest company news and events. Enter your e-mail and subscribe to our newsletter.</p>
                            <div class=" connection offset-top-30">
                                <form class="mailform" data-form-output="form-subscribe-footer" data-form-type="subscribe" method="post" action="bat/rd-mailform.php" novalidate="novalidate">
                                    <div class="form-group">
                                        <div class="input-group input-group-sm">
                                            <span class="input-group-prepend">
                                                <span class="input-group-text input-group-icon">
                                                    <span class="fas fa-envelope"></span>
                                                </span>
                                            </span>
                                            <input class="form-control form-control-has-validation" placeholder="Type your E-Mail" type="email" name="email" data-constraints="@Required  @Email" id="regula-generated-15646">
                                            <span class="form-validation"></span>
                                            <span class="input-group-append">
                                                <button class="btn btn-sm btn-primary text-uppercase" type="submit">Subscribe</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="form-output" id="form-subscribe-footer"></div>
                                </form>
                            </div>
                        </div>

                        <div class="social-networks col-sm-12 offset-top-66 col-xl-3 order-xl-1 offset-xl-top-0">
                            <!-- Footer brand-->
                            <div class="footer-brand">
                                <a href="index.html">
                                    <img width="170" height="30" src="/img/preview-images/logo-light.png" alt="">
                                </a>
                            </div>
                            <p class="real-estate text-darker offset-top-4 inset-right-15 inset-xl-right-0 inset-xl-left-15">Real Estate</p>
                            <ul class="list-inline">
                                <li class="list-inline-item facebook"><a class=" fab fa-facebook-f  " href="#"></a></li>
                                <li class="list-inline-item twitter"><a class=" fab fa-twitter " href="#"></a></li>
                                <li class="list-inline-item google-plus"><a class=" fab fa-google-plus-g " href="#"></a></li>
                                <li class="list-inline-item linkedin"><a class="fab fa-linkedin-in" href="#"></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

</body>
</html>

