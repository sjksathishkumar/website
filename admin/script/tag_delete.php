<?php

error_reporting();

include_once("../include/config.php");

$tag_id = $_REQUEST['tag_id'];

$sql->autocommit(FALSE); 


$query_tag_delete = "DELETE FROM `questions_tag` WHERE `tag_id` = '$tag_id'";
$result = $sql->query($query_tag_delete);

if($result)
{
	echo 'Deleted Successfully !';	
	$sql->commit();
	$sql->close();
}	
else
{ 
    echo 'Can not Delete Tag. It mounted with Questions !';
	$sql->rollback();
  	$sql->close();
}


?>

