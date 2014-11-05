<?php

error_reporting();

include_once("../include/config.php");

$id = $_REQUEST['id'];

$sql->autocommit(FALSE); 

$query = "DELETE FROM `events` WHERE `id` = $id";
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

?>

