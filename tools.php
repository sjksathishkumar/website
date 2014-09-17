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
    <link rel="shortcut icon" href="favicon.ico">

    <title>Tools | Bass Biz | Accounting, Internal Auditing service provider in Chennai</title>

    <!--
    * Google Fonts
    //-->
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <!-- Custom CSS -->
    <link href="css/animate.css" rel="stylesheet" type="text/css">
    <link href="css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css">
    <link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/colorbox-skins/4/colorbox.css" type="text/css">
        <link href="css/main.css" rel="stylesheet" type="text/css">
    

    <link href="css/header/h1.css" rel="stylesheet" type="text/css">
    <link href="css/responsive.css" rel="stylesheet" type="text/css">
    <link href="css/color1.css" rel="stylesheet" type="text/css" id="envor-site-color">
    <link href="css/rivathemes.css" rel="stylesheet" type="text/css">

    <!-- Script for show hide option on select -->

  <style type="text/css">
      .select{
    display: none;
      }
      .vie{ 
       
    }
  </style>

    <!-- LayerSlider styles -->
    <link rel="stylesheet" href="css/layerslider/css/layerslider.css" type="text/css">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="js/vendor/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
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
    require 'mobile_header.php';
    ?>

    <!--

    Envor header start

    //-->
  
      <!--

      Top bar start

      //-->
      <?php
     
      require 'header.php';
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
              <h1>Tools</h1>
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
                <a href="index.php">Home</a><i class="fa fa-angle-double-right"></i><a href="tools.php">Tools</a>
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
              <a href="index.php">Home</a><i class="fa fa-angle-double-right"></i><a href="tools.php">Tools</a>
            </div>
          </div>
        </div>
      <!--

      Mobile breadscrubs end

      //-->
      </section>

      <!--Navigation --> 

<section class="envor-section envor-single-page">
        <div class="container">
          <div>
            <!--

            Side Navigation

            //-->
            <div class="col-lg-3 col-md-3">
              <nav class="envor-side-navi">
                <ul>
                  <li class="active"><i class="glyphicon glyphicon-arrow-right"></i> <a href="useful_links.php">INCOME TAX CALCULATOR</a></li>
                  <li><i class="glyphicon glyphicon-arrow-right"></i> <a href="advance_calculator.php">ADVANCE CALCULATOR</a></li>
                </ul>
              </nav>
            </div>
            <!--

            Partners List

            //-->
            <div class="col-lg-9 col-md-9">
              <div class="row">
              <h2 class="align-left">Income Tax<strong> Calculator</strong></h2>
              <div class="envor-partner-1">
                <form name="calculator">
                    <p><label for="year">Assessment Year</label>
                      <select name="year" id="year" onblur="calculate()">
                        <option value="14_15">2014-2015 </option>
                        <option value="13_14">2015-2016</option>
                      </select>
                    </p>                    
                    <p><label for="taxpayer">Tax Payer</label>
                    <select name="taxpayer" id="taxpayer" onblur="calculate()">
                      <option value="huf">HUF</option>
                      <option value="individual">Individual </option>
                      <option value="apo">AOPs/BOI</option>
                      <option value="company">Domestic Company </option>
                      <option value="foreign_company">Foreign Company</option>
                      <option value="firm">Firms</option>
                      <option value="llp">LLP</option>
                      <option value="society">Co-Operative Society</option>
                    </select>
                  </p>
                  <div class="vie select"><p><label for="person">Type</label>
                    <select name="person" id="person" onblur="calculate()">
                      <option value="male">Male </option>
                      <option value="female">Female</option>
                      <option value="citizen">Senior Citizen</option>
                      <option value="s_citizen">Super Senior Citizen </option>
                    </select></p>
                  </div>
    <p><label for="income">Net Taxable Income</label><input type="text" id="income" name="income" onblur="calculate()" value="0" onkeypress="return isNumber(event)"></p>   
    <p><label for="tax">Income Tax</label><input type="text" id="tax" name="tax" value="0" readonly></p>
    <p><label for="tax">Surcharge</label><input type="text" id="surcharge" name="surcharge" value="0" readonly></p>
    <p><label for="edu">Education Tax</label><input type="text" id="edu" name="edu" value="0" readonly></p>
    <p><label for="hedu">H.Education Tax</label><input type="text" id="hedu" name="hedu" value="0" readonly></p>
    <p><label for="total">Total Tax Liability</label><input type="text" id="total" name="total" value="0" readonly></p>
    </form>
            </div>
          </div>
              
              
             
        
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
    <?php
    require 'footer_top.php';
    require 'footer.php';
    ?>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/vendor/jquery-1.11.0.min.js"></script>

    <script src="js/vendor/core-1.0.5.js"></script>

    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.mCustomScrollbar.min.js"></script>
    <script src="js/jquery.mousewheel.min.js"></script>
    <script src="js/jquery.colorbox-min.js"></script>
    <script src="js/preloadCssImages.jQuery_v5.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    
    <!--
    Script for JScroll
    -->
    <script src="jscroll/jquery.jscroll.js" type="text/javascript"></script>
    <script src="jscroll/jquery.jscroll.min.js" type="text/javascript"></script>
    <script src="jscroll/jquery.jscroll.min.js" type="text/javascript"></script>

    <!--
    * jQuery with jQuery Easing, and jQuery Transit JS
    //-->
    <script src="js/layerslider/jquery-easing-1.3.js" type="text/javascript"></script>
    <script src="js/layerslider/jquery-transit-modified.js" type="text/javascript"></script>
    <!--
    * LayerSlider from Kreatura Media with Transitions
    -->
    <script src="js/layerslider/layerslider.transitions.js" type="text/javascript"></script>
    <script src="js/layerslider/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>
    <script src="js/jquery.rivathemes.js"></script>
    <script src="js/envor.js"></script>

    <!--Script for calculating Tax  -->

    <script src="js/simple_calculator.js"></script>
  
    <script type="text/javascript">
      $(document).ready(function(){
  $("#taxpayer").change(function(){
        $( "select option:selected").each(function(){
            if($(this).attr("value")=="individual"){       
          $(".select").hide();
                $(".vie").show();
            }
      if($(this).attr("value")=="huf"){          
          $(".select").hide();
            }
      if($(this).attr("value")=="apo"){           
          $(".select").hide();
            }
      if($(this).attr("value")=="company"){          
          $(".select").hide();
            }
      if($(this).attr("value")=="foreign_company"){          
          $(".select").hide();
            }
      if($(this).attr("value")=="firm"){          
          $(".select").hide();
            }
      if($(this).attr("value")=="llp"){          
          $(".select").hide();
            }
      if($(this).attr("value")=="society"){       
          $(".select").hide();
            }
      
        });
    }).change();
  });
    </script>

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
