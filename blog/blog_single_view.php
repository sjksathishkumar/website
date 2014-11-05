
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="ROBOTS" content="INDEX, FOLLOW"/>
    <meta name="abstract" content="Bass Biz has dynamic team to manage your accouting and internal auditing, tax consulting requirements"/>
    <meta name="author" content="Bass Biz"/>
    <meta name="publisher" content="Bass Desio"/>
    <meta name="copyright" content="Bass Biz"/>
    <meta http-equiv="Reply-to" content=antony@bassbiz.in/>
    <meta name="creation_Date" content="12/06/2011"/>
    <meta name="expires" content="11 June 2222"/>
    <meta name="language" content="EN"/>
    <meta name="rating" content="general"/>
    <meta name="revisit-after" content="2 days"/> 

    <link rel="shortcut icon" href="../favicon.ico">
 
 <?php

      require '../db_connect.php';

      $url  = $_GET['url'].'.html';

      $query= "select * from article where url='$url'";

      $result = $sql->query($query);

      $row = $result->fetch_assoc();

      echo "<meta name='description' content='".$row['description']."'/>";

      echo "<meta name='keywords' content='".$row['keyword']."'/>";

      echo "<title>".$row['post_title']."</title>";

?> 

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
    <link href="../css/settings.css" rel="stylesheet" type="text/css">
    <link href="../css/header/h1.css" rel="stylesheet" type="text/css">
    <link href="../css/responsive.css" rel="stylesheet" type="text/css">
    <link href="../css/color1.css" rel="stylesheet" type="text/css" id="envor-site-color">
    <link href="../css/rivathemes.css" rel="stylesheet" type="text/css">

    <!-- LayerSlider styles -->
    <link rel="stylesheet" href="../css/layerslider/css/layerslider.css" type="text/css">

    <!-- Toast Script for alear -->

    <link href="../css/toastr.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/css/toastr.css" rel="stylesheet"/>

    <!-- End of Toast Script for alear -->

    <script src="../js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    <script src="../js/twitterFetcher_v10_min.js"></script>
    <style>
    .noStyle {
     background-color: none;
     width: none /* or whatever you want here */;
    }
  </style>

  <style>
        li {
            list-style-type: none;
        }
        .treeview .expand {
            display: block;
        }

        .treeview li > ul {
            display: none;
        }
        .collapse {
            display: none;
        }
    </style>
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
    <?php require "blog_mobile_header.php";  ?>

    <?php require "blog_header.php";  ?>
    
    <div class="envor-content">

      <section class="envor-page-title-1" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-9 col-sm-9">
              <h1><strong>Blog</strong></h1>
            </div>
            
          </div>
        </div>

      </section>

      <section class="envor-desktop-breadscrubs">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="envor-desktop-breadscrubs-inner">
                <a href="../index.php">Home</a><i class="fa fa-angle-double-right"></i><a href="../blog/index.php">Blog</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="envor-mobile-breadscrubs">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <a href="../index.php">Home</a><i class="fa fa-angle-double-right"></i><a href="../blog/index.php">Blog</a>
            </div>
          </div>
        </div>
      </section>

      <section class="envor-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-9">
              <div id="resultsDiv"></div><br><br>
              <article class="envor-post">
                <?php

                  require 'blog_function.php';

                  $url  = $_GET['url'].'.html';

                  $query= "select * from article where url='$url'";

                  $posts = get_posts($query); 
                     foreach($posts as $post)
                      {
                          $post_id = $post['post_id'];

                ?>

                <header>
                  <h3><i class="fa fa-pencil"></i> <span> <?php echo $post['post_title']; ?></span></h3>
                  <p> by <a href="">admin</a></p>
                  <div class="addthis_native_toolbox"></div>
                </header>
                <p><?php echo '<div align="justify">'.$post['post_content'].'</div>'; ?></p>
                <p>&nbsp;</p>

                <div class="date">
                  <span class="day"><?php  $timestamp = $post['post_date'];
                    
                    echo $data = date('d',strtotime($timestamp));  ?></span>
                  <span class="month"><?php  $timestamp = $post['post_date'];
                    echo $data = date('M',strtotime($timestamp));
                    echo ",";
                    echo $data = date('y',strtotime($timestamp));  ?></span>
                </div>
                <?php
                }

              ?>
                <p class="tags">

                  <?php 

                    require '../db_connect.php';
                    $related_tag_id = '0';
                    $query= mysqli_query($con,"select t.tag_id,t.tag_name from article_tag_map tm join article p on p.post_id = tm.post_id join article_tag t on t.tag_id = tm.tag_id where p.post_id = '$post_id'");
                    while($que = mysqli_fetch_row($query))
                    {
                  ?>
                  <i class="fa fa-tag"></i> 
                    <a href="<?php echo $que['1']; ?>"><?php $related_tag_id = $que['0']; echo ucfirst($que['1']); ?></a> 

                  <?php
                    }
                  ?>
                </p>
                
              </article>

              <h3><strong>related</strong> posts</h3>
              <div class="envor-relative" id="related-posts">

              <?php

                  $query= "select post_id from article_tag_map where tag_id=$related_tag_id ";

                  $posts = get_posts($query); 

                  $result = $sql->query($query);

                  if($result->num_rows > 0)
                  {
                     foreach($posts as $post)
                      {
                        $id = $post['post_id'];

                        $query = "select * from article where post_id =$id";
                  
                        $posts = get_posts($query); 

                          foreach($posts as $post)
                          {
                        
                            if($post['post_id']!=$post_id)
                            {
              ?>

                <article class="envor-post-preview envor-padding-left-30">
                  <div class="envor-post-preview-inner">
                    <header>
                      <div class="date">
                        <span class="day"><?php  $timestamp = $post['post_date'];
                          echo $data = date('d',strtotime($timestamp));  ?></span><span class="month"><?php  $timestamp = $post['post_date'];
                          echo $data = date('M',strtotime($timestamp));
                          echo ",";
                          echo $data = date('y',strtotime($timestamp));  ?></span>
                      </div>
                      <a href="<?php echo $post['url']; ?>"><?php $content=$post['post_title']; 
                        $string = strip_tags($content);

                        if (strlen($string) > 35) {
                            $stringCut = substr($string, 0, 35);

                            $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                        }
                        echo $string;
                        ?>
                      </a>
                      </header>
                      <p><?php $content=$post['post_content']; 
                      $string = strip_tags($content);

                      if (strlen($string) > 100) {

                          $stringCut = substr($string, 0, 100);

                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                      }
                      echo $string;
                      ?>
                      </p>
                  </div>
                </article>
          <?php
                      }
                      
                  }
            }
          }// Close if
          else
          {
            echo "No Related Post Found!";
          }

          ?>
                <div class="envor-navigation envor-navigation-left rivaslider-navigation">
                  <a href="" class="back"><i class="glyphicon glyphicon-chevron-left"></i></a>
                  <a href="" class="forward"><i class="glyphicon glyphicon-chevron-right"></i></a>
                </div>
              </div>
              <!-- Script for comments. -->
        
                <div id="disqus_thread"></div>
                    <script type="text/javascript">
                        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
                        var disqus_shortname = 'bassbiz1'; // required: replace example with your forum shortname

                        /* * * DON'T EDIT BELOW THIS LINE * * */
                        (function() {
                            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                        })();
                    </script>
                         
                                    
            </div>

            <div class="col-lg-3 col-md-3">

              <aside class="envor-widget envor-search-widget">
                <h3><strong>Search</strong> Widget</h3>
                <div class="envor-widget-inner">
                  <form id="searchForm" method="post">
                    <input type="text" id="s" name="s" placeholder="type to search...">
                  </form>
                </div>
              </aside>

            <aside class="envor-widget envor-category-widget">
              <h3>browse <strong>Categories</strong></h3>
              <div class="envor-widget-inner">
                <ul>
                  <?php

                    $query= "select * from article_tag";

                    $posts = get_tags($query);

                     foreach($posts as $post)
                      {
                  ?>

                  <li>
                    <p><a href="<?php echo $post['tag_name']; ?>"><i class="glyphicon glyphicon-folder-open"></i> <?php echo $post['tag_name']; ?></a> <a href="tag_view.php?tag_id=<?php echo $post['tag_id']; ?>">
                      <i class="fa fa-rss"></i></a> 
                    </p>
                    
                  </li>
                <?php
                  }
                  ?>
                  
                </ul>
              </div>
            </aside>

            <aside class="envor-widget envor-search-widget">
              <h3>Blog <strong>Posts</strong></h3>
              <div class="envor-widget-inner">
                <div class="envor-tabs">
                  <header>
                    <span><i class="fa fa-calendar"></i></span>
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-comment"></i></span>
                  </header>
                  <article>

                    <div class="envor-sidebar-comment">
                      <?php
                        $query = "SELECT * from article ORDER BY post_date DESC;";
                        $result = $sql->query($query);
                        if($result && $result->num_rows > 0)
                        {

                                $data = array();

                            while($row = $result->fetch_assoc())
                            {
                                $year = date('Y', strtotime($row['post_date']));
                                $month = date('M', strtotime($row['post_date']));
                                $data[$year][$month][] = $row;
                            }
                            
                            foreach($data as $_year => $_months)
                            {
                                echo '<div><ul class="treeview"><li>';
                                echo "<h4><strong>{$_year}</strong></h4>";
                                foreach($_months as $_month => $_entries)
                                {
                                    echo '<ul class="expand"><li>';
                                    echo "<h5><i class='fa fa-chevron-right'></i>&nbsp;&nbsp;<strong>{$_month}</strong></h5>";
                                    echo "<ul>";
                                    foreach($_entries as $_entry)
                                    {
                                        echo "<li>";
                                        echo "<i class='fa fa-angle-double-right'></i>&nbsp;&nbsp;<a href=\"{$_entry['url']}\">";
                                                    $content=$_entry['post_title']; 
                                                    $string = strip_tags($content);

                                                  if (strlen($string) > 100) {

                                                      $stringCut = substr($string, 0, 100);

                                                      $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                                                  }
                                                  echo $string."</a>";
                                        echo "</li>";
                                    }
                                    echo "</ul></li></ul>";
                                }
                                echo "</li></ul></div>";
                            }
                        }
                            $result->free();

                        $sql->close();

                      ?>
                    
                    </div>

                  </article>
                  <article>

                      <?php
                      require '../db_connect.php';
                      $query= " select * from article ORDER BY post_date DESC limit 3;";
                      $result = $sql->query($query);
                      if($result->num_rows > 0)
                        {
                          while ( $row = $result->fetch_assoc() ) 
                          {
                      ?>
                      <div class="envor-sidebar-comment">
                      <p><a href="<?php echo $row['url']; ?>"><?php $content=$row['post_title']; 
                      // strip tags to avoid breaking any html
                       $string = strip_tags($content);

                        if (strlen($string) > 35) {

                          // truncate string
                          $stringCut = substr($string, 0, 35);

                          // make sure it ends in a word so assassinate doesn't become ass...
                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                        }
                        echo $string;
                      ?></a></p>
                      <p><?php $content=$row['post_content']; 
                      // strip tags to avoid breaking any html
                        $string = strip_tags($content);

                        if (strlen($string) > 100) {

                          // truncate string
                          $stringCut = substr($string, 0, 100);

                          // make sure it ends in a word so assassinate doesn't become ass...
                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                        }
                        echo $string;
                      ?></p></div>
                           
                  <?php   
                        }
                      }
                      else
                      {
                            echo "No Data Found!";
                      }
                  ?>
                    
                  </article>
                  <article>
                      <?php
                      require '../db_connect.php';
                      $query= "  select * from questions where ans_rply = 'active' ORDER BY qus_date DESC limit 3;";
                      $result = $sql->query($query);
                      if($result->num_rows > 0)
                        {
                          while ( $row = $result->fetch_assoc() ) 
                          {
                      ?>
                      <div class="envor-sidebar-comment">
                      <p><a href="../expert_single_view.php?qus_id=<?php echo $row['qus_id']; ?>"><?php $content=$row['question']; 
                      // strip tags to avoid breaking any html
                        $string = strip_tags($content);

                      if (strlen($string) > 35) {

                          // truncate string
                          $stringCut = substr($string, 0, 35);

                          // make sure it ends in a word so assassinate doesn't become ass...
                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                      }
                      echo $string;
                      ?></a></p>
                      <p><?php $content=$row['answer']; 
                      // strip tags to avoid breaking any html
                        $string = strip_tags($content);

                      if (strlen($string) > 100) {

                          // truncate string
                          $stringCut = substr($string, 0, 100);

                          // make sure it ends in a word so assassinate doesn't become ass...
                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                      }
                      echo $string;
                      ?></p></div>
                           
                  <?php   
                        }
                      }
                      else
                      {
                            echo "No Data Found!";
                      }
                  ?>
                    
                  </article>                </div>
              </div>
            </aside>
            </div>
          </div>
        </div>
 
      </section>
 
    </div>

    <?php

      require 'blog_footer_top.php';
      require 'blog_footer.php';
    ?>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the FAQ load faster -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
    <script src="http://core-framework.googlecode.com/svn/trunk/core-1.0.5.js"></script>
    <script>window.Core || document.write('<script src="../js/vendor/core-1.0.5.js"><\/script>')</script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.mCustomScrollbar.min.js"></script>
    <script src="../js/jquery.mousewheel.min.js"></script>
    <script src="../js/jquery.colorbox-min.js"></script>
    <script src="../js/preloadCssImages.jQuery_v5.js"></script>
    <script src="../js/jquery.stellar.min.js"></script>
    <script src="../js/masonry.pkgd.min.js"></script>
    <script src="../js/imagesloaded.pkgd.min.js"></script>

     <!-- Script for Google Search -->

    <script src="../js/google_search_script.js"></script>

    <!--
    * jQuery with jQuery Easing, and jQuery Transit JS
    //-->
    <script src="../js/layerslider/jquery-easing-1.3.js" type="text/javascript"></script>
    <script src="../js/layerslider/jquery-transit-modified.js" type="text/javascript"></script>
    <!--
    * LayerSlider from Kreatura Media with Transitions
    -->

    <!-- Validation Script for Form -->

    <script type="text/javascript" src="../js/form_validator.js"></script>
    
    <!-- End of Validation Script for Form -->  

    <script src="../js/layerslider/layerslider.transitions.js" type="text/javascript"></script>
    <script src="../js/layerslider/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>
    <script src="../js/jquery.rivathemes.js"></script>
    <script type="text/javascript">
      $('document').ready(function() {
          var $container = $('#envor-posts-masonry');
          // initialize Masonry after all images have loaded  
              $container.masonry({
                'itemSelector': '.envor-post-masonry'
              });
          $(window).resize(function() {
            $container.masonry('bindResize');
          });

          //Related Posts  
          $('#related-posts').rivaSlider({
            visible : 3,
            selector : 'envor-post-preview'
          });
         
      });
    </script>

    <!-- AddThis Pro BEGIN -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-536c8238652029b5"></script>
    <!-- AddThis Pro END -->

   <!-- Script for Tree View Blog -->

    <script>
        $(document).ready(function (e) {
            
          $(".treeview li ul").addClass("collapse");
           
            $(".treeview li").click(function (e) {
                currentselect = $(this).closest(".treeview").attr("id");
                $(this).closest(".treeview").find("li").removeClass("selected");
                
                var selectnode = $(this);
                expan(selectnode, e);
            });
        }); 
        function expan(node, e) {
            if (node.children("ul").is(":hidden")) {
                if (e.type == "click")
                    node.children("ul").slideDown("slow")//removeClass("collapse");
            }
            else {
                if (e.type == "click")
                    node.children("ul").slideUp("slow");
            }
            e.stopPropagation();
        }
    </script>

    <!-- End of Script for Tree View Blog -->

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
