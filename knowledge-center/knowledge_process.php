<?php
require '/db_connect.php';
                  $id  = $sql->real_escape_string($_GET['id']);

                  $query = "select  * from knowledge_center where id=$id";

                  $result = $sql->query($query);

                  while ($row = $result->fetch_assoc()) {
                    
                    $title = $row['title'];
		    $content = $row['content'];

                  }
//<h2 class="align-left"><strong>.$title.</strong></h2><div class="envor-partner-1"><p>.$content.</p><p>&nbsp;</p></div>  onClick="window.location.reload()
//<div class="envor-msg envor-msg-error"><header>'.$title.'<i class="fa fa-times"></i></header><p>'.$content.'</p></div>
echo json_encode(array('success'=>TRUE,'message'=>'<h2 class="align-left"><strong><center>'.$title.'</center></strong></h2><hr><p><div align="justify">'.$content.'</div></p><hr><p align="right"><a href=""><img src="/img/back.png"></a></p>'));
?>


