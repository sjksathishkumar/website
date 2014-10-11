
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Envor HTML5/CSS3 Template">
    <meta name="author" content="Suono Libero ( @rivathemes.com )">
    <link rel="shortcut icon" href="../favicon.ico">

    <title>Ask Xperts | Bass Biz | Accounting, Internal Auditing service provider in Chennai</title>

    <!--
    * Google Fonts
    //-->
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <!-- Custom CSS -->
    <link href="../css/animate.css" rel="stylesheet" type="text/css">
    <link href="../css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css">
    <link href="../css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="../css/colorbox-skins/4/colorbox.css" type="text/css">
        <link href="../css/main.css" rel="stylesheet" type="text/css">
    

    <link href="../css/header/h1.css" rel="stylesheet" type="text/css">
    <link href="../css/responsive.css" rel="stylesheet" type="text/css">
    <link href="../css/color1.css" rel="stylesheet" type="text/css" id="envor-site-color">
    <link href="../css/rivathemes.css" rel="stylesheet" type="text/css">

    <!-- LayerSlider styles -->
    <link rel="stylesheet" href="../css/layerslider/css/layerslider.css" type="text/css">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="js/vendor/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script src="../js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

    

  </head>

    <body>
  

    <!--[if lt IE 7]>
    <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->
    <!--

    Scroll to the top

    //-->
    <div id="to-the-top"><i class="fa fa-chevron-up"></i></div>
    <!--

    Image Preload

    //-->
    <div id="envor-preload">
      <span>Now loading.<br>Please wait.</span>
      <i class="fa fa-cog fa-spin"></i>
      <p></p>
    </div>
    <!--

    Envor mobile menu start

    //-->
    <?php
      require "mobile_header.php";
      ?>
    <!--

    Envor header start

    //-->
    
      <!--

      Top bar start

      //-->
     
      <!--

      Logo & Menu start

      //-->
      <?php
       
        require "xpert-header.php";
      ?>
    <!--

    Envor header end

    //-->
 
    <!--

    Envor site content start

    //-->
    <div class="envor-content">
      <!--

      Page Title start

      //-->
      <section class="envor-page-title-1" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-9 col-sm-9">
              <h1><strong>Ask Our Xperts</strong></h1>
            </div>
          </div>
        </div>
      <!--

      Page Title end

      //-->
      </section>
      <!--

      Desktop breadscrubs start

      //-->
      <section class="envor-desktop-breadscrubs">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="envor-desktop-breadscrubs-inner">
                <a href="../index.php">Home</a><i class="fa fa-angle-double-right"></i>Ask Xperts
              </div>
            </div>
          </div>
        </div>
      <!--

      Desktop breadscrubs end

      //-->
      </section>
      <!--

      Mobile breadscrubs start

      //-->
      <section class="envor-mobile-breadscrubs">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <a href="../index.php">Home</a><i class="fa fa-angle-double-right"></i>Ask Xperts
            </div>
          </div>
        </div>
      <!--

      Mobile breadscrubs end

      //-->
      </section>
      <!--

      Main Content start

      //-->
      <section class="envor-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div id="resultsDiv"></div><br>
              <h2>Recent <strong>Questions</strong></h2>
              <!--

              Q&A Item

              //-->
              <?php

                  require '../db_connect.php';

                  $query= "select * from questions where ans_rply=1";

                  $result = $sql->query($query);
                        if($result && $result->num_rows > 0)
                        {

                          while($row = $result->fetch_assoc())
                          {
              ?>
                            <div class="envor-qa">
                              <div class="q">
                                <span class="lbl">Q:</span>
                                <p><a href="bassbiz-xperts-answers.php?qus_id=<?php echo $row['qus_id']; ?>"><?php echo $row['question']; ?></a></p>
                                <div class="arrow"></div>
                              </div>
                              <div class="a">
                                <span class="lbl">A:</span>
                                <p><?php echo $row['answer']; ?></p>
                                <div class="arrow"></div>
                              </div>
                            </div>
                <?php
                          }
                        }
                        else
                        {
                          echo "<h1><span text-align:center;>No Records Found!</span></h1>";
                        }

                ?>
                <p align="center"><br><br>
                <a href="ask_expert_form.php"><input name="submit" value="Leave Question?" class="envor-btn envor-btn-primary envor-btn-normal" type="button"></a>
             
            </div>
           


            <div class="col-lg-3">
              <!--

              Search Widget

              //-->
              <aside class="envor-widget envor-search-widget">
                <h3><strong>Search</strong> Widget</h3>
                <div class="envor-widget-inner">
                  <form id="searchForm" method="post">
                    <input type="text" id="s" name="s" placeholder="type to search...">
                  </form>
                </div>
              </aside>
            <!--

            Categories Widget

            //-->
            <aside class="envor-widget envor-category-widget">
              <h3>browse <strong>Categories</strong></h3>
              <div class="envor-widget-inner">
                <ul>
                  <?php

                    $query ="select * from questions_tag";

                    $result = $sql->query($query);

                    while ($row = $result->fetch_assoc()) {

                      

                  ?>
                  <li>
                    <p><a href="xpert-topics.php?tag_id=<?php echo $row['tag_id']; ?>"><i class="glyphicon glyphicon-folder-open"></i> <?php echo $row['tag_name']; ?></a> <a href="xpert-topics.php?tag_id=<?php echo $row['tag_id']; ?>">
                      <i class="fa fa-rss"></i></a> 
                    </p>                  
                  </li>
                  
                  <?php

                  }

                  ?>

                </ul>
              </div>
            </aside>
            <!--

            Tabs Widget

            //-->
            
            <!--

            Left Sidebar end

            //-->
            </div>
            
          </div>

            
        </div>
      <!--

      Main Content start

      //-->
      </section>
    <!--

    Envor site content end

    //-->
    </div>
    <!--

    Envor footer start

    //-->
    <?php require 'footer.php'; ?>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the FAQ load faster -->
        <script src="../js/vendor/jquery-1.11.0.min.js"></script>

    <script src="../js/vendor/core-1.0.5.js"></script>

    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.mCustomScrollbar.min.js"></script>
    <script src="../js/jquery.mousewheel.min.js"></script>
    <script src="../js/jquery.colorbox-min.js"></script>
    <script src="../js/preloadCssImages.jQuery_v5.js"></script>
    <script src="../js/jquery.stellar.min.js"></script>
    <!--
    * jQuery with jQuery Easing, and jQuery Transit JS
    //-->
    <script src="../js/layerslider/jquery-easing-1.3.js" type="text/javascript"></script>
    <script src="../js/layerslider/jquery-transit-modified.js" type="text/javascript"></script>
    <!--
    * LayerSlider from Kreatura Media with Transitions
    -->
    <script src="../js/layerslider/layerslider.transitions.js" type="text/javascript"></script>
    <script src="../js/layerslider/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>
    <script src="../js/jquery.rivathemes.js"></script>

    <!-- Script for Google Search -->

    <script src="../js/google_search_script.js"></script>
    
  


    <script type="text/javascript">
      $('document').ready(function() {
          /*

          Sorting

          */
          $('#faq-sorting').rivaSorting({
            showAll : 1
          });
          /*

          Footer News Slider

          */
         
      });
    </script>
    <script src="../js/envor.js"></script>
    <script type="text/javascript">
      $('document').ready(function() {
          /*

          Preload Images

          */
          var imgs = new Array(), $imgs = $('img');
          for (var i = 0; i < $imgs.length; i++) {
            imgs[i] = new Image();
            imgs[i].src = $imgs.eq(i).attr('src');
          }
          Core.preloader.queue(imgs).preload(function() {
            var images = $('a').map(function() {
                    return $(this).attr('href');
            }).get();
            Core.preloader.queue(images).preload(function() {
                  $.preloadCssImages();
            })
          })
                  $('#envor-preload').hide();
      });
      /*

      Google Analytics Code

      */
      var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
      (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src='//www.google-analytics.com/ga.js';
      s.parentNode.insertBefore(g,s)}(document,'script'));
      /*

      Windows Phone 8 и Internet Explorer 10

      */
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style")
        msViewportStyle.appendChild(
          document.createTextNode(
            "@-ms-viewport{width:auto!important}"
          )
        )
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
      }
    </script>
  </body>
</html>