<?php

include_once './core/session.class.php';
include_once './core/petition.class.php';
include_once './core/user.class.php';
include_once './core/core.function.php';

$session = new Session();
$petition_obj = new Petitions();
$user_obj = new User();

if (!$session->check_session('petition_admin')) {
  redirect("./");
}

$id = $_GET['id'];

$petition = $petition_obj->find_one($id);
$user = $user_obj->find_one($petition['user_id']);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Petition Details</title>

  <link href="images/favicon.png" rel="shortcut icon" type="image/png">
  <link href="images/apple-touch-icon.png" rel="apple-touch-icon">
  <link href="images/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
  <link href="images/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
  <link href="images/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">

  <!-- Stylesheet -->
  <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="css/animate.min.css" rel="stylesheet" type="text/css">
  <link href="css/javascript-plugins-bundle.css" rel="stylesheet" />

  <!-- CSS | menuzord megamenu skins -->
  <link href="js/menuzord/css/menuzord.css" rel="stylesheet" />

  <!-- CSS | Main style file -->
  <link href="css/style-main.css" rel="stylesheet" type="text/css">
  <link id="menuzord-menu-skins" href="css/menuzord-skins/menuzord-rounded-boxed.css" rel="stylesheet" />

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
              <li class="contact-email"><i class="fa fa-envelope font-icon sm-display-block"></i> info@adjurepetitions.org</li>
              <li class="contact-address"><i class="fa fa-map font-icon sm-display-block"></i> Ilaro, Ogun State</li>
            </ul>
          </div>
          <div class="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-end">
            <div class="element pt-0 pb-0">
              <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix">
                <li><a class="social-link" href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a class="social-link" href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a class="social-link" href="#"><i class="fab fa-youtube"></i></a></li>
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
                  <img class="logo-default logo-1x" src="images/adjure-logo.png" alt="Logo" />
                  <img class="logo-default logo-2x retina" src="images/adjure-logo.png" alt="Logo" />
                </a>
              </div>
              <div class="col-sm-auto ms-auto pr-0 align-self-center">
                <nav id="top-primary-nav" class="menuzord theme-color1" data-effect="fade" data-animation="none" data-align="right">
                  <ul id="main-nav" class="menuzord-menu">
                    <li class="active">
                      <a href="index.php">Login</a>
                    </li>
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
  </header>>
  <!-- END HEADER -->

  <div class="main-content-area">

    <section class="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center" data-tm-bg-img="images/bg/bg1.jpg">
      <div class="container pt-90 pb-90">
        <div class="section-content">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="title">Petition Details</h2>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="container mt-30 mb-30 pt-30 pb-30">
        <div class="row">
          <div class="col-sm-12">
            <div class="blog-posts single-post">
              <article class="post clearfix mb-0">
                <div class="entry-header mb-30">
                  <div class="post-thumb thumb"> <img src="<?php echo $petition['image']; ?>" alt="images" class="img-responsive img-fullwidth" /> </div>
                  <h3 class="mt-30"><?php echo $petition['title']; ?></h3>
                  <div class="entry-meta mt-0">
                    <span class="mb-10 text-gray mr-10"><i class="far fa-calendar-alt mr-10 text-theme-colored1"></i> <?php echo $petition['created_at']; ?></span>
                    <span class="mb-10 text-gray mr-10"><i class="far fa-user mr-10 text-theme-colored1"></i> By <?php echo $user['fullname']; ?></span>
                  </div>

                </div>
                <div class="entry-content">
                  <?php echo $petition['description']; ?>
                  <div class="col-12">

                    <div class="mb-3">
                      <a href="actions/approve-petition.php?id=<?php echo $id; ?>" class="confirm btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait...">Approve Petition</a>

                      <a href="actions/reject-petition.php?id=<?php echo $id; ?>" class="confirm btn btn-theme-colored2 btn-round m-0" data-loading-text="Please wait...">Reject Petition</a>
                    </div>

                  </div>


                </div>
              </article>

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

  <script>
    $(function() {
      $('.confirm').click(function(e) {
        if (confirm("Are you sure you want to peform this operation?") == false) {
          e.preventDefault();
        }
      })
    })
  </script>
</body>

</html>