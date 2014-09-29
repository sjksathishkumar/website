<?php

error_reporting();

include_once("../include/config.php");

$id = $_REQUEST['id'];

$sql->autocommit(FALSE); 

$query = "SELECT * FROM `feedback_contact` WHERE `id` = '$id'";

$result = $sql->query( $query );

$file = "/home/bassbiz1/public_html/";

while ( $row = $result->fetch_assoc() ) 
{
  	$file .= $row['file'];
}

if(unlink($file))
{

$query = "DELETE FROM `feedback_contact` WHERE `id` = '$id'";
	if($sql->query( $query ))
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

