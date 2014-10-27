  <footer class="envor-footer envor-footer-1">
      <div class="container">
        <div class="row">
          <!--

          Footer About Widget start

          //-->
          <div class="col-lg-3 col-md-3">
            <div class="envor-widget">
              <h3><strong>Précis</strong></h3>
              <div class="envor-widget-inner">
                <p align="justify">Bass Biz offers accounting, internal auditing, tax consulting, auditing, payroll services, business advisory and CFO services. </p>
              </div>
              
              <h3>Business <strong>Hours</strong></h3>
              <div class="envor-widget-inner">
                <p>Monday - Friday : 09.30 AM to 06.30 PM</p>
                <p>Saturday        : 10.00 AM to 03.00 PM</p>
              </div>
            </div>
          <!--

          Footer About Widget end

          //-->
          </div>
          <!--

          Footer News Widget start

          //-->
          <div class="col-lg-3 col-md-3">
            <div class="envor-widget">
              <h3>latest <strong>news</strong></h3>
              <div class="envor-widget-inner">
                <div class="envor-wrapper" id="footer-news">
                  <!--

                  News Item start

                  //-->
                  <?php
                    require '../db_connect.php';
                     $query= " select * from article ORDER BY post_date DESC limit 5;";
                     $result = $sql->query($query);
                     if($result->num_rows > 0)
                      {
                        while ( $row = $result->fetch_assoc() ) 
                        {
                  ?>

                  <article class="envor-post-preview">
                    <div class="envor-post-preview-inner">
                      <div class="header">
                        <div class="date">
                        <span class="day"><?php  $timestamp = $row['post_date'];
                    
                    echo $data = date('d',strtotime($timestamp));  ?></span><span class="month"><?php  $timestamp = $row['post_date'];
                    echo $data = date('M',strtotime($timestamp));
                    echo ",";
                    echo $data = date('y',strtotime($timestamp));  ?></span>
                      </div>
                        <a href="blog_single_view.php?post_id=<?php echo $row['post_id']; ?>"><?php $content=$row['post_title']; 
                      // strip tags to avoid breaking any html
                        $string = strip_tags($content);

                      if (strlen($string) > 35) {

                          // truncate string
                          $stringCut = substr($string, 0, 35);

                          // make sure it ends in a word so assassinate doesn't become ass...
                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                      }
                      echo $string;
                ?></a>
                      </div>
                      <p align="justify"><?php $content=$row['post_content']; 
                      // strip tags to avoid breaking any html
                        $string = strip_tags($content);

                      if (strlen($string) > 100) {

                          // truncate string
                          $stringCut = substr($string, 0, 100);

                          // make sure it ends in a word so assassinate doesn't become ass...
                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                      }
                      echo $string;
                ?></p>
                    </div>
                  </article>

                            
                  <?php   
                        }
                      }
                      else
                      {
                            echo "No Data Found!";
                      }
                  ?>
                  
                  
                  <!--

                  News Item start

                  //-->
                  
                  <!--

                  Navigation News Item start

                  //-->
                  <div class="envor-navigation envor-navigation-left rivaslider-navigation">
                    <a href="" class="back"><i class="glyphicon glyphicon-chevron-left"></i></a>
                    <a href="" class="forward"><i class="glyphicon glyphicon-chevron-right"></i></a>
                  <!--

                  Navigation News Item end

                  //-->
                  </div>
                </div>
              </div>
            </div>
          </div>
                    <!--

          Footer Contact Widget

          //-->
          <div class="col-lg-3 col-md-3">
            <div class="envor-widget">
              <h3><strong>Contact</strong></h3>
              <div class="envor-widget-inner">
                <div class="envor-wrapper" id="footer-news">

                  <article class="envor-post-preview-contact">
                    <div class="envor-post-preview-contact-inner">
                      <div class="header">
                        <div class="date">
                         <span class="day"> <i class="fa fa-map-marker"></i></span>
                        </div>
                          No 60/5,Ground Floor, 28th Cross Street, Indira Nagar, Adyar Chennai , Tamilnadu, India Pin : 600020.                      
                      </div>
                      <div class="header">
                        <div class="date">
                         <span class="day"> <i class="fa fa-phone"></i></span>
                        </div>
                          Mobile : +91 98840 40580 <br>
                          Phone : 044 64572123
                      </div>
                      <div class="header">
                        <div class="date">
                         <span class="day"> <i class="fa fa-envelope"></i></span>
                        </div>
                          <a href="mailto:info@bassbiz.in">info@bassbiz.in</a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          
          
          
          

              <!--

          Footer News Widget start

          //-->
          <div class="col-lg-3 col-md-3">
            <div class="envor-widget">
              <h3>latest <strong>questions</strong></h3>
              <div class="envor-widget-inner">
                <div class="envor-wrapper" id="footer-qustion">
                  <!--

                  News Item start

                  //-->
                  <?php
                    require '../db_connect.php';
                     $query= "  select * from questions where ans_rply = 'active' ORDER BY qus_date DESC limit 5;";
                     $result = $sql->query($query);
                     if($result->num_rows > 0)
                      {
                        while ( $row = $result->fetch_assoc() ) 
                        {
                  ?>
                  <article class="envor-post-preview">
                    <div class="envor-post-preview-inner">
                      <div class="header">
                        <div class="date">
                        <span class="day"><?php  $timestamp = $row['qus_date'];
                    
                    echo $data = date('d',strtotime($timestamp));  ?></span><span class="month"><?php  $timestamp = $row['qus_date'];
                    echo $data = date('M',strtotime($timestamp));
                    echo ",";
                    echo $data = date('y',strtotime($timestamp));  ?></span>
                      </div>
                        <a href="../askxperts/bassbiz-xperts-answers.php?qus_id=<?php echo $row['qus_id']; ?>"><?php $content=$row['question']; 
                      // strip tags to avoid breaking any html
                        $string = strip_tags($content);

                      if (strlen($string) > 35) {

                          // truncate string
                          $stringCut = substr($string, 0, 35);

                          // make sure it ends in a word so assassinate doesn't become ass...
                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                      }
                      echo $string;
                ?></a>
                      </div>
                      <p align="justify"><?php $content=$row['answer']; 
                      // strip tags to avoid breaking any html
                        $string = strip_tags($content);

                      if (strlen($string) > 100) {

                          // truncate string
                          $stringCut = substr($string, 0, 100);

                          // make sure it ends in a word so assassinate doesn't become ass...
                          $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'....'; 
                      }
                      echo $string;
                ?></p>
                    </div>
                  </article>

                   <?php   
                        }
                      }
                      else
                      {
                            echo "No Data Found!";
                      }
                  ?>
                  <!--

                  News Item end

                  //-->
                  
                  
                  <!--

                  Navigation News Item start

                  //-->
                  <div class="envor-navigation envor-navigation-left rivaslider-navigation">
                    <a href="" class="back"><i class="glyphicon glyphicon-chevron-left"></i></a>
                    <a href="" class="forward"><i class="glyphicon glyphicon-chevron-right"></i></a>
                  <!--

                  Navigation News Item end

                  //-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--

          Footer News Widget end

          //-->
          <!--

          Footer Contacts Widget start

          //-->
       
          <!--

          Footer Contacts Widget end

          //-->
          <!--

          Footer Copyright start

          //-->
          <div class="col-lg-12">
            <div class="envor-widget envor-copyright-widget">
              <div class="envor-widget-inner">
                <p>© 2011-2014 <a href="http://www.bassbiz.in">Bass Biz</a>. All Rights Reserved.</p>
                <p>Designed and Maintained by <a href="http://www.bassdesio.com" target="_blank">Bass Desio</a></p>
              </div>
            </div>
          <!--

          Footer Copyright end

          //-->
          </div>
        </div>
      </div>
          </footer>


          <!-- Javascript Function Call -->


      <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/js/vendor/jquery-1.11.0.min.js"></script>

    <script src="/js/vendor/core-1.0.5.js"></script>

    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.mCustomScrollbar.min.js"></script>
    <script src="/js/jquery.mousewheel.min.js"></script>
    <script src="/js/jquery.colorbox-min.js"></script>
    <script src="/js/preloadCssImages.jQuery_v5.js"></script>
    <script src="/js/jquery.stellar.min.js"></script>
    <!--
    * jQuery with jQuery Easing, and jQuery Transit JS
    //-->
    <script src="/js/layerslider/jquery-easing-1.3.js" type="text/javascript"></script>
    <script src="/js/layerslider/jquery-transit-modified.js" type="text/javascript"></script>
    <!--
    * LayerSlider from Kreatura Media with Transitions
    -->
    <script src="/js/layerslider/layerslider.transitions.js" type="text/javascript"></script>
    <script src="/js/layerslider/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>
    <script src="/js/jquery.rivathemes.js"></script>    
      
    <script type="text/javascript">
      $('document').ready(function() {

      /*

          Footer News Slider

          */
          $('#footer-news').rivaSlider({
            visible : 1,
            selector : 'envor-post-preview'
          });
          /*

          Footer Questions Slider

          */
          $('#footer-qustion').rivaSlider({
            visible : 1,
            selector : 'envor-post-preview'
          });
          

          });
    </script>