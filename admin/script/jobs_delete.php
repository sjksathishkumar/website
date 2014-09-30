<?php

error_reporting();

include_once("../include/config.php");

$id = $_REQUEST['id'];

$sql->autocommit(FALSE); 

$query = "SELECT * FROM `jobs` WHERE `id` = '$id'";

$result = $sql->query( $query );

$file = "/home/bassbiz1/public_html/";

while ( $row = $result->fetch_assoc() ) 
{
  	$file .= $row['resume'];
}

if(unlink($file))
{

$query = "DELETE FROM `jobs` WHERE `candidate_id` = '$id'";
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

