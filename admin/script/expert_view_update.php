<?php
 
error_reporting();
include_once("../include/config.php");

//getting all input given from user

$qus_id = $sql->real_escape_string($_POST['qus_id']);
$question = $sql->real_escape_string($_POST['question']);
$description = $sql->real_escape_string($_POST['description']);
$answer = $sql->real_escape_string($_POST['answer']);
$url = $sql->real_escape_string($_POST['url']);
$ans_rply = $sql->real_escape_string($_POST['ans_rply']);
$keyword = $sql->real_escape_string($_POST['keyword']);
$tags = isset($_POST['tags']) ? $_POST['tags'] : array();

$sql->autocommit(FALSE); 

   	foreach ($tags as $tag) 
    {
      	if(!is_numeric($tag))
      	{
      		echo "error";
		}
      	else
      	{
	      	$query_delete = "DELETE FROM `questions_tag_map` WHERE `qus_id` = $qus_id";

	    	$result = $sql->query($query_delete);

	  		$query = "REPLACE INTO `questions_tag_map` (`tag_id`, `qus_id`) VALUES ('$tag', '$qus_id')";

	      	$result = $sql->query($query);

	      	$query = "UPDATE `questions` SET `question` = '$question',`description` = '$description',`answer` = '$answer', `ans_rply` = '$ans_rply', `url` = '$url', `keywords` = '$keyword' WHERE `qus_id` = '$qus_id'";

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

?>
