<?php
require 'db_connect.php';


$name  = $sql->real_escape_string($_POST['name']);
$id	= $sql->real_escape_string($_POST['id']);
$qualification   = $sql->real_escape_string($_POST['qualification']);
$experience   = $sql->real_escape_string($_POST['experience']);
$email = $sql->real_escape_string($_POST['email']);
$mobile = $sql->real_escape_string($_POST['mobile']);

$sql->autocommit(FALSE); 

if(isset($_FILES["resume"]) && $_FILES["resume"]["error"]== UPLOAD_ERR_OK)
{
	############ Edit settings ##############
	$UploadDirectory	= 'resume/'; //specify upload directory ends with / (slash)
	##########################################

	//check if this is an ajax request
	if (!isset($_SERVER['HTTP_X_REQUESTED_WITH'])){
		die();
	}
	
	
	$File_Name          = strtolower($_FILES['resume']['name']);
	$File_Ext           = substr($File_Name, strrpos($File_Name, '.')); //get file extention
	$Random_Number      = rand(0, 9999999999); //Random number to be added to name.
	$NewFileName 		= $Random_Number.$File_Ext; //new file name
	$path				= $UploadDirectory.$NewFileName; // Full path for file

	if(move_uploaded_file($_FILES['resume']['tmp_name'], $path ))
	{
		$query ="INSERT INTO `jobs` (`candidate_id`, `job_id`, `name`, `qualification`, `Experience`, `mobile`, `email`, `resume`, `date`) VALUES (NULL, '$id', '$name', '$qualification', '$experience', '$mobile', '$email', '$path', CURRENT_TIMESTAMP);";
	   	if($sql->query($query))
	   	{
	   		echo "success";
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
	else
	{
		echo "error";
	}
	
}
else
{
	echo "error";
}


?>
