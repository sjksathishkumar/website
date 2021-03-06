<?php
session_start();
?>
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

    <!-- Stylesheet for Magic Suggest -->

    <link href="../css/magicsuggest.css" rel="stylesheet">


    

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
              <a href="../index.html">Home</a><i class="fa fa-angle-double-right"></i>Ask Xperts
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
                <h2>Ask to <strong> Xperts</strong></h2>
                <?php
                if (isset($_SESSION['UNAME']) && !(empty($_SESSION['UNAME']))){
                  echo '<br><a href="../assets/google_login/logout.php"><i class="fa fa-sign-out"></i><b>Logout</b></a><br/><br/>';
                  echo "Welcome <strong>".$_SESSION['UNAME']." !</strong><br/><br/>";
                  echo '<form class="envor-f1" name="ask_form" id="ask_form" method="post" action="ask_expert_process.php">';
                  echo '<p><label for="rt2-job">Mobile</label><input type="text" id="mobile" name="mobile"></p>';
                  echo '<input type="hidden" name="name" value="'.$_SESSION['UNAME'].'">';                 
                  echo '<input type="hidden" name="email" value="'.$_SESSION['UEMAIL'].'">';
                  echo '<p><label for="rt2-details">Question</label><textarea id="question" placeholder="Ask your Question?" name="question"></textarea></p>';
                  echo '<p><label for="rt2-details">Description</label><textarea id="description" placeholder="Enter Description?" name="description"></textarea></p>';
                  echo '<p><label for="rt2-tag">Tag</label><br><input id="tag" type="text" name="tags[]" size="10"></p>';
                  echo '<p><input type="submit" value="Submit Enquiry" class="envor-btn envor-btn-normal envor-btn-primary"></p>';
                  echo '</form>';
                }else{
                  echo '<div class="envor-msg envor-msg-error"><header>For ask question you must login !</header></div><p>&nbsp;</p>';
                  echo '<a href="javascript:login()"><img src="../assets/google_login/image/google_plus_signin_1_130x35.png"></a>';
                }
                ?>
                
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

                    require '../db_connect.php';
                    $query ="select * from questions_tag";

                    $result = $sql->query($query);

                    while ($row = $result->fetch_assoc()) {

                      

                  ?>
                  <li>
                    <p><a href="xpert-topics.php?tag_id=<?php echo $row['tag_id']; ?>"><i class="glyphicon glyphicon-folder-open"></i> <?php echo $row['tag_name']; ?></a> <a href="expert_tag_view.php?tag_id=<?php echo $row['tag_id']; ?>">
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

            <div class="col-lg-1">
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

    <!-- Script for magic auto fill -->

    <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>  -->
    <script src="../js/magicsuggest.js"></script>
    <script src="../js/expert_magic_suggest_script.js"></script>

	


	<!--Script for google login -->

	<script type="text/javascript">
	 
	function logout()
	{
	    gapi.auth.signOut();
	    location.reload();
	}
	function login() 
	{
	  var myParams = {
	    'clientid' : '206512750088-re54u9smcmi0sr5t2a80o4n2b77jivu7.apps.googleusercontent.com',
	    'cookiepolicy' : 'single_host_origin',
	    'callback' : 'loginCallback',
	    'approvalprompt':'force',
	    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
	  };
	  gapi.auth.signIn(myParams);
	}
	 
	function loginCallback(result)
	{
	    if(result['status']['signed_in'])
	    {
		var request = gapi.client.plus.people.get(
		{
		    'userId': 'me'
		});
		request.execute(function (resp)
		{
		    var email = '';
		    if(resp['emails'])
		    {
		        for(i = 0; i < resp['emails'].length; i++)
		        {
		            if(resp['emails'][i]['type'] == 'account')
		            {
		                email = resp['emails'][i]['value'];
		            }
		        }
		    }
	 	     
		    var name= resp['displayName'];
		    var str = "Name:" + resp['displayName'] + "<br>";
		    str += "Image:" + resp['image']['url'] + "<br>";
		    str += "<img src='" + resp['image']['url'] + "' /><br>";
	 
		    str += "URL:" + resp['url'] + "<br>";
		    str += "Email:" + email + "<br>";
			window.location.href = "http://www.bassbizindia.com/assets/google_login/google_landing.php?email=" + email + "&name=" + name;
		    //document.getElementById("profile").innerHTML = str;
		});
	 
	    }
	 
	}
	function onLoadCallback()
	{
	    gapi.client.setApiKey('AIzaSyC7UVgXP06OTuy0rph5IbnWi9w9UJCASBM');
	    gapi.client.load('plus', 'v1',function(){});
	}
	 
	    </script>
 
	<script type="text/javascript">
	      (function() {
	       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	       po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
	       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	     })();
	</script>

	<!-- Script for Validation Form -->

    
    <script src="http://jqueryvalidation.org/files/dist/jquery.validate.min.js"></script>
    <script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>
    
    <script type="text/javascript">
       $(document).ready(function(){
        $("#ask_form").validate({
        rules: {
          mobile: {
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 10
          },
          question: "required",
 	  description: "required",
	  tags: "required"
	},
        messages: {
          mobile: {
            required: "Please enter Mobile Number"

          },
          question: "Please give your question",
          description: "Please give your description",
	  tags: "Please enter tags."
        },
        submitHandler:
            function(){
            var form = $("#ask_form");
            var postData = $("#ask_form").serializeArray();
            var formURL = $("#ask_form").attr("action");
            $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(msg) 
                {
                  if(msg == "success")
                  {
                   $(form).fadeOut(800, function(){
                            form.html('<div class="envor-msg envor-msg-error"><header>Your Application submitted Successfully!</header><p>We will give you answer shortly. If you have queries please mail to <strong>info@bassbiz.in</strong></p></div>').fadeIn().delay(2000);
                         });
                 }
                 else
                 {
                  $(form).fadeOut(800, function(){
                            form.html('<div class="envor-msg envor-msg-error"><header>Your Application submittion Failed!</header><p>Please try again! If you have queries please mail to <strong>info@bassbiz.in</strong></p></div>').fadeIn().delay(2000);
                         });
                 }
                  
                }
            });
        }
      });
       
      });
     </script>

     <!-- Script for Google Search -->

    <script src="../js/google_search_script.js"></script>
    
    
    <!-- End of Validation Script for Form -->  


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
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-41283876-1', 'auto');
	  ga('send', 'pageview');

	</script>
  </body>
</html>
