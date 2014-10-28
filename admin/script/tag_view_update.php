<?php
 
error_reporting();
include_once("../include/config.php");

//getting all input given from user

$tag_id = $sql->real_escape_string($_POST['tag_id']);
$tag_name = $sql->real_escape_string($_POST['tag_name']);

$sql->autocommit(FALSE); 

$query = "SELECT * FROM `questions_tag` WHERE `tag_name` = '$tag_name'";

$result = $sql->query($query);

$no_of_rows = $result->num_rows;

if($no_of_rows > 0)
{
	echo "available";
}
else
{
	$query = "UPDATE `questions_tag` SET `tag_name` = '$tag_name' WHERE `tag_id` = '$tag_id'";

	$result = $sql->query($query);

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

}


?>
