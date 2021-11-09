<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>

    <link href="images/favicon.png" rel="shortcut icon" type="image/png">
    <link href="images/apple-touch-icon.png" rel="apple-touch-icon">
    <link href="images/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
    <link href="images/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
    <link href="images/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">

    <!-- Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="css/animate.min.css" rel="stylesheet" type="text/css">
    <link href="css/javascript-plugins-bundle.css" rel="stylesheet"/>

    <!-- CSS | menuzord megamenu skins -->
    <link href="js/menuzord/css/menuzord.css" rel="stylesheet"/>

    <!-- CSS | Main style file -->
    <link href="css/style-main.css" rel="stylesheet" type="text/css">
    <link id="menuzord-menu-skins" href="css/menuzord-skins/menuzord-rounded-boxed.css" rel="stylesheet"/>

    <!-- CSS | Responsive media queries -->
    <link href="css/responsive.css" rel="stylesheet" type="text/css">
    <!-- CSS | Style css. This is the file where you can place your own custom css code. Just uncomment it and use it. -->

    <!-- CSS | Theme Color -->
    <link href="css/colors/theme-skin-color-set1.css" rel="stylesheet" type="text/css">

    <!-- external javascripts -->
    <script src="js/jquery.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/javascript-plugins-bundle.js"></script>
    <script src="js/menuzord/js/menuzord.js"></script>

    <!-- REVOLUTION STYLE SHEETS -->
    <link rel="stylesheet" type="text/css" href="js/revolution-slider/css/rs6.css">
    <link rel="stylesheet" type="text/css" href="js/revolution-slider/extra-rev-slider1.css">
    <!-- REVOLUTION LAYERS STYLES -->
    <!-- REVOLUTION JS FILES -->
    <script src="js/revolution-slider/js/revolution.tools.min.js"></script>
    <script src="js/revolution-slider/js/rs6.min.js"></script>
    <script src="js/revolution-slider/extra-rev-slider1.js"></script>

    </head>

    <body>
    <!-- HEADER -->
      <header id="header" class="header header-layout-type-header-2rows">
          <div class="header-top">
            <div class="container">
              <div class="row">
                <div class="col-xl-auto header-top-left align-self-center text-center text-xl-start">
                  <ul class="element contact-info">
                    <li class="contact-phone"><i class="fa fa-phone font-icon sm-display-block"></i> Tel: +2348011122334</li>
                    <li class="contact-email"><i class="fa fa-envelope font-icon sm-display-block"></i>  info@adjurepetitions.org</li>
                    <li class="contact-address"><i class="fa fa-map font-icon sm-display-block"></i> Ilaro, Ogun State</li>
                  </ul>
                </div>
                <div class="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-end">
                  <div class="element pt-0 pb-0">
                    <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix">
                      <li><a class="social-link" href="#" ><i class="fab fa-facebook"></i></a></li>
                      <li><a class="social-link" href="#" ><i class="fab fa-twitter"></i></a></li>
                      <li><a class="social-link" href="#" ><i class="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-nav tm-enable-navbar-hide-on-scroll">
            <div class="header-nav-wrapper navbar-scrolltofixed">
              <div class="menuzord-container header-nav-container">
                <div class="container position-relative">
                  <div class="row header-nav-col-row">
                    <div class="col-sm-auto align-self-center">
                      <a class="menuzord-brand site-brand" href="index-mp-layout1.html">
                        <img class="logo-default logo-1x" src="images/adjure-logo.png" alt="Logo"/>
                        <img class="logo-default logo-2x retina" src="images/adjure-logo.png" alt="Logo"/>
                      </a>
                    </div>
                    <div class="col-sm-auto ms-auto pr-0 align-self-center">
                      <nav id="top-primary-nav" class="menuzord theme-color1" data-effect="fade" data-animation="none" data-align="right">
                        <ul id="main-nav" class="menuzord-menu">
                          <li class="active">
                            <a href="index.php">Login</a></li>
                          <li><a href="petition.php">Petitions</a></li>
                          <li><a href="petitionDetails.php">Petition Details</a></li>
                          
                        </ul>
                      </nav>
                    </div>
                    <div class="col-sm-auto align-self-center nav-side-icon-parent">
                      <ul class="list-inline nav-side-icon-list">
                        <li class="hidden-mobile-mode"><a href="#" id="top-nav-search-btn"><i class="search-icon fa fa-search"></i></a></li>
                        
                        <li class="hidden-mobile-mode">
                          <div id="side-panel-trigger" class="side-panel-trigger"> <a href="#">
                            <div class="hamburger-box">
                              <div class="hamburger-inner"></div>
                            </div>
                            </a> </div>
                        </li>
                      </ul>
                      <div id="top-nav-search-form" class="clearfix">
                        <form action="#" method="GET">
                          <input type="text" name="s" value="" placeholder="Type and Press Enter..." autocomplete="off" />
                        </form>
                        <a href="#" id="close-search-btn"><i class="fa fa-times"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="row header-nav-clone-col-row d-block d-xl-none">
                    <div class="col-12">
                      <nav id="top-primary-nav-clone" class="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive" data-effect="slide" data-animation="none" data-align="right">
                      <ul id="main-nav-clone" class="menuzord-menu menuzord-right menuzord-indented scrollable">
                      </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </header>
    <!-- END HEADER -->
              
        <div class="main-content-area">

          <section>
            <div class="container pb-100" data-tm-padding-top="10">
              <div class="section-content">
                <div class="row">
                                      
                  <div class="col-lg-12">
                    <div class="newsletter-form-current-style1 text-center" data-tm-bg-color="#f4f3ef">
                      <h2 class="title">Admin Login</h2>
                                                                          
                      <form id="sign-up-form" class="sign-up-form m-0 p-0">
                                            
                              <input type="email" id="email" class="form-control" placeholder="Email Address"  name="email" required/> <br/>

                              <input type="password" id="password" class="form-control" placeholder="Password"  name="password" required/> <br/>
                                            
                              <button type="submit" class="btn btn-lg btn-theme-colored1 btn-flat d-block w-100 mt-20">Sign In</button>
                            </form>

                      </div>
                    </div>
                  </div>                              
              </div>
            </div>           
                                
          </section>   

        </div>

      <!-- FOOTER -->
      <footer id="footer" class="footer bg-img-center-bottom bg-img-cover" data-tm-bg-img="images/bg/bg3.jpg">
          
            <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="footer-bottom-style1">
                    <div class="footer-paragraph font-size-15">© Copyright 2020 by Dreybyte Solutions</div>
                    <div class="widget widget-social-list-custom clearfix mb-0">
                      <ul class="styled-icons icon-theme-colored1">
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-vk"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        
      </footer>
      <!-- END FOOTER -->
      <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
    
</body>
</html>