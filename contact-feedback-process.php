<?php
require 'db_connect.php';

$who  = $sql->real_escape_string($_POST['who']);
$what  = $sql->real_escape_string($_POST['what']);
$name  = $sql->real_escape_string($_POST['name']);
$designation   = $sql->real_escape_string($_POST['designation']);
$company = $sql->real_escape_string($_POST['company']);
$email = $sql->real_escape_string($_POST['email']);
$mobile = $sql->real_escape_string($_POST['mobile']);
$feedback = $sql->real_escape_string($_POST['feedback']);

$sql->autocommit(FALSE); 

if(isset($_FILES["feedback_file"]) && $_FILES["feedback_file"]["error"]== UPLOAD_ERR_OK)
{
	############ Edit settings ##############
	$UploadDirectory	= 'feedback_files/'; //specify upload directory ends with / (slash)
	##########################################

	//check if this is an ajax request
	if (!isset($_SERVER['HTTP_X_REQUESTED_WITH'])){
		die();
	}
	
	
	$File_Name          = strtolower($_FILES['feedback_file']['name']);
	$File_Ext           = substr($File_Name, strrpos($File_Name, '.')); //get file extention
	$Random_Number      = rand(0, 9999999999); //Random number to be added to name.
	$NewFileName 		= $Random_Number.$File_Ext; //new file name
	$path				= $UploadDirectory.$NewFileName; // Full path for file

	if(move_uploaded_file($_FILES['feedback_file']['tmp_name'], $path ))
	{
	   	$query ="INSERT INTO `feedback_contact` (`id`, `who`, `what`, `name`, `designation`, `company`, `email`, `mobile`, `feedback`, `file`, `date`) VALUES (NULL, '$who', '$what', '$name', '$designation', '$company', '$email', '$mobile', '$feedback', '$path', CURRENT_TIMESTAMP);";
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
