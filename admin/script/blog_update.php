<?php
 
error_reporting();
include_once("../include/config.php");

//getting all input given from user


/*if(empty($_POST['post_tags']))
{
  echo "empty";
  break;
}
else
{
*/
      $post_id = $_POST['post_id'];
      $post_title = $_POST['post_title'];
      $post_content = $_POST['post_contents'];
      $post_keywords = $_POST['post_keywords'];
      $post_description = $_POST['post_description'];
      $url = $_POST['url'];
      $tags = isset($_POST['tags']) ? $_POST['tags'] : array();

      $sql->autocommit(FALSE); 

      $query_delete = "DELETE FROM `article_tag_map` WHERE `post_id` = $post_id";

      $result = $sql->query($query_delete);

      /*$title=htmlentities($post_title);

      //Title to friendly URL conversion

      function string_limit_words($string, $word_limit)
      {
        $words = explode(' ', $string, ($word_limit + 1));
        if(count($words) > $word_limit)
        array_pop($words);
        return implode(' ', $words);
      }

      $newtitle = string_limit_words($title,6);

      $urltitle=preg_replace('/[^a-z0-9]/i',' ', $newtitle);

      $newurltitle=str_replace(" ","-",$urltitle);

      $newurltitle = rtrim($newurltitle , '-');

      $url=$newurltitle.'.html'; // Final URL

      $url = strtolower($url);*/

      $query_update = "UPDATE `article` SET `post_title` = '$post_title', `post_content` = '$post_content', `keyword` = '$post_keywords', `description` = '$post_description', `url` = '$url' WHERE `post_id` = $post_id";

      $result = $sql->query($query_update); 

      foreach ($tags as $tag) 
      {
      	//echo "Tag form foreach - $tag <br>";

      	if(!is_numeric($tag))
      	{
      		$match = false;

      		$query= "select * from article_tag";

              $result = $sql->query($query);
                          
              while ( $row = $result->fetch_assoc() ) 
                  {
                    	$tag_data = $row['tag_name'];

                		if($tag == $tag_data)
                		{
                			$query = "SELECT * FROM `article_tag` WHERE `tag_name` = '$tag';";
                			
                			$result = $sql->query($query);
                			
                			while ( $row = $result->fetch_assoc() ) 
                  		{
                				$find_tag_id = $row['tag_id'];
           				
                				//echo "Find ID - $find_tag_id";

                			}
             				
            			   /* $query = "INSERT IGNORE INTO `article_tag_map` (`tag_id`, `post_id`) VALUES ('$find_tag_id', '$post_id')";

      					$result = $sql->query($query);*/

             				//echo "Find ID - $find_tag_id";

             				$match = true;
                		}
                		else
                		{
                			$match = false;
                		}
                  }

              if($match == false)
              {
          			$query = "INSERT IGNORE INTO `article_tag` (`tag_id`, `tag_name`) VALUES (NULL, '$tag')";

          			$result = $sql->query($query);

          			$last_tag_id = $sql->insert_id;

          			$query = "INSERT IGNORE INTO `article_tag_map` (`tag_id`, `post_id`) VALUES ('$last_tag_id', '$post_id')";

          			$result = $sql->query($query);

              }

      	}
      	else
      	{
      		$query = "INSERT IGNORE INTO `article_tag_map` (`tag_id`, `post_id`) VALUES ('$tag', '$post_id')";

      		$result = $sql->query($query);

      	}
      }

      if($result)
      {
      	echo 'success';	
      	$sql->commit();
      	$sql->close();
      }	
      else
      { 
        echo 'error';
      	$sql->rollback();
        $sql->close();
      }

//}

?>
