
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="ROBOTS" content="INDEX,FOLLOW"/>
    <meta name="description" content="Dynamic team of professionals offering accounting and internal auditing services in Chennai | Bass Biz Services Private Limited" />
    <meta name="abstract" content="Bass Biz specialise in Accounting and Internal Auditing Services" />
    <meta name="keywords" content="Accounting Firm, Chennai, Accountant, Accounts, Auditor, Internal Auditor, Auditing, Service Tax, Bass Biz" />
    <meta name="author" content="Bass Biz" />
    <meta name="publisher" content="Bass Desio" />
    <meta name="copyright" content="Bass Biz" />
    <meta http-equiv="Reply-to" content="antony@bassbiz.in" />
    <meta name="creation_Date" content="10/06/2012" />
    <meta name="expires" content="11 June 2222" />
    <meta name="language" content="EN" />
    <meta name="rating" content="general" />
    <meta name="revisit-after" content="2 days" /> 
    <link rel="shortcut icon" href="favicon.ico">

    <title>Careers | Bass Biz | Accounting, Internal Auditing service provider in Chennai</title>

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

    <!-- For Country Auto Complete -->
    <link href="css/country_auto.css" rel="stylesheet" />

    <!-- LayerSlider styles -->
    <link rel="stylesheet" href="css/layerslider/css/layerslider.css" type="text/css">
    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  </head>

    <body>
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
      require 'header.php';
     ?>

    <div class="envor-content">
      <section class="envor-page-title-1" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-9 col-sm-9">
              <h1><b>Careers</b></h1>
            </div>
          </div>
        </div>
      </section>
      <section class="envor-desktop-breadscrubs">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="envor-desktop-breadscrubs-inner">
                <a href="index.php">Home</a><i class="fa fa-angle-double-right"></i><a href="careers.php">Careers</a>
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
              <a href="index.php">Home</a><i class="fa fa-angle-double-right"></i><a href="careers.php">Careers</a>
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
            <!--

            Sidebar Navigation start

            //-->
            <div class="col-lg-3 col-md-3">
              <nav class="envor-side-navi">
                <ul>
                  <li> <a href="bassbiz-workwithus.php"><i class="glyphicon glyphicon-arrow-left"></i>Back to Careers</a></li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-9 col-md-9">
              <div class="riva-toggle-tab" id="job">
                <h2><strong>Apply</strong> Now</h2>
                <div id="result"></div>
                <?php 
                  $id = $_GET['id'];
                ?>
                <form class="envor-f1" id="job_form" name="job_form" method="post" action="job_process.php" enctype='multipart/form-data'>
                  <p><label for="rt3-first-name">Name</label><input type="text" id="name" name="name"><label for="name"></label></p>
                  <input type="hidden" name="id" value="<?php echo $id;?>"> 
                  <p><label for="rt3-first-name">Qualification</label><input type="text" id="qualification" name="qualification"></p>
                  <p><label for="rt3-areyou">Experience</label>
                    <select name="experience" id="rt3-areyou">
                      <option>Fresher </option>
                      <option>0.6 - 1 year </option>
                      <option>1-2 Years</option>
                      <option>3-5 Years</option>
                      <option>5+ Years</option>
                    </select>
                  </p>
                  <p><label for="rt3-mobile">Mobile</label><input type="text" id="rt3-mobile" name="mobile"></p>
                  <p><label for="rt3-email">Email</label><input type="email" id="email" name="email"></p>
                  <p><label for="rt3-attachment">Resume</label><input type="file" id="rt3-attachment" name="resume" /></p>
                  <p><input type="submit" value="Submit" class="envor-btn envor-btn-normal envor-btn-primary"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!--

    Envor footer start

    //-->
    <?php require 'footer.php'; ?>

    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCNAMsgY07MAFW8ZgObmwAo2PvZjPyiUYg&sensor=true"></script>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the Contacts Advanced load faster -->
    <script src="js/vendor/jquery-1.11.0.min.js"></script>
    <script src="js/vendor/core-1.0.5.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.mCustomScrollbar.min.js"></script>
    <script src="js/jquery.mousewheel.min.js"></script>
    <script src="js/jquery.colorbox-min.js"></script>
    <script src="js/preloadCssImages.jQuery_v5.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    
    <!-- For Country Auto Fill -->
    <script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="js/jquery.mockjax.js"></script>
    <script type="text/javascript" src="js/jquery.autocomplete.js"></script>
    <script type="text/javascript" src="js/countries.js"></script>
    <script type="text/javascript" src="js/country_auto.js"></script>

    <!--
    * jQuery with jQuery Easing, and jQuery Transit JS
    //-->
    <script src="js/layerslider/jquery-easing-1.3.js" type="text/javascript"></script>
    <script src="js/layerslider/jquery-transit-modified.js" type="text/javascript"></script>

    <!-- Script for Validation Form -->
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://jqueryvalidation.org/files/dist/jquery.validate.min.js"></script>
    <script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>
    
    <script type="text/javascript">
       $(document).ready(function(){
        $("#job_form").validate({
        rules: {
          name: "required",
          qualification: "required",
          email: {
            required: true,
            email: true
          },
          mobile: {
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 10
          },
          resume: {
            required: true,
            extension: "doc|docx|pdf"
          }
        },
        messages: {
          name: "Please specify your Name",
          qualification: "Please specify your Qualification",
          email: {
            required: "Please Enter your Email.",
            email: "Your email address must be in the format of name@domain.com"
          },
          mobile: {
            required: "Please enter Mobile Number"

          },
          resume: {
            required: "Please Upload your Resume"
          }
        },
        submitHandler:
            function(){
            var form = $("#job_form");
            var formData = new FormData($("#job_form")[0]);
            var formURL = $("#job_form").attr("action");
            $.ajax(
            {
                  url : formURL,
                  cache: false,
                  data: formData,
                  processData: false,
                  contentType: false,
                  type: 'POST',
                success:function(msg) 
                {
                  if(msg == "success")
                  {
                   $(form).fadeOut(800, function(){
                            form.html('<div class="envor-msg envor-msg-error"><header>Your Application submited Successfully!</header><p>We will contact you shortly. If you have queries please mail to <strong>info@bassbiz.in</strong></p></div>').fadeIn().delay(2000);
                         });
                 }
                 else
                 {
                  $(form).fadeOut(800, function(){
                            form.html('<div class="envor-msg envor-msg-error"><header>Your Application submition Failed!</header><p>Please try again! If you have queries please mail to <strong>info@bassbiz.in</strong></p></div>').fadeIn().delay(2000);
                         });
                 }
                  
                }
            });
        }
      });
       
      });
     </script>

    <!--
    * LayerSlider from Kreatura Media with Transitions
    -->
    <script src="js/layerslider/layerslider.transitions.js" type="text/javascript"></script>
    <script src="js/layerslider/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>
    <script src="js/jquery.rivathemes.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM&sensor=false"></script>
    <script type="text/javascript">
      function initialize() {
        // Create an array of styles.
        var styles = [
          {
            stylers: [
              { hue: "#e14d43" },
              { saturation: -20 }
            ]
          },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
              { color: "#ffffff" },
              { lightness: -20 },
              { visibility: "simplified" }
            ]
          },{
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "on" }
            ]
          }
        ];
        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles,
          {name: "Bass Techs"});
        var myLatlng = new google.maps.LatLng(12.9910996, 80.2528739);
        var mapOptions = {
          zoom: 15,
          center: myLatlng,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }}
        var map = new google.maps.Map(document.getElementById("map-canvas-2"), mapOptions);
        // To add the marker to the map, use the 'map' property
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Hello World!"
        });
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      $('document').ready(function() {
          $('#rivaToggleTabs').rivaToggleTabs();
          
      });
    </script>

     
    <!-- End of Validation Script for Form -->    
    
    <script src="js/envor.js"></script>
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
