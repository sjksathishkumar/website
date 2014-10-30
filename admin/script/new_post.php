<?php
 
error_reporting();
include_once("../include/config.php");

//getting all input given from user


if(empty($_POST['post_tag']))
{
	echo "empty";
	break;
}
else
{
	$post_title = $_POST['post_title'];
	$post_content = $_POST['post_content'];
	$post_keywords = $_POST['post_keywords'];
	$post_description = $_POST['post_description'];
	$tags = isset($_POST['post_tag']) ? $_POST['post_tag'] : array();

	$title=htmlentities($post_title);

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

	$url = strtolower($url);

	$query = "INSERT INTO `article` (`post_id`, `author`, `post_title`, `post_content`, `keyword`, `description`, `url`, `post_date`) VALUES (NULL, 'Admin', '$post_title', '$post_content', '$post_keywords', '$post_description', '$url', CURRENT_TIMESTAMP);";

	$result = $sql->query($query);

	$last_post_id = $sql->insert_id;


	foreach ($tags as $tag) {

		if(!is_numeric($tag))
		{
			$query = "INSERT INTO `article_tag` (`tag_id`, `tag_name`) VALUES (NULL, '$tag')";

			$result = $sql->query($query);

			$last_tag_id = $sql->insert_id;

			$query = "INSERT INTO `article_tag_map` (`tag_id`, `post_id`) VALUES ($last_tag_id, $last_post_id)";

			$result = $sql->query($query);

		}
		else
		{
			$query = "INSERT INTO `article_tag_map` (`tag_id`, `post_id`) VALUES ($tag, $last_post_id)";

			$result = $sql->query($query);

		}
	}

	if($result)
	{
	    echo 'success';
		$sql->close();
	}	
	else
	{ 
	    echo 'error';  
	}

}

?>
