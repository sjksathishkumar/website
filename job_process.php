<?php
require 'db_connect.php';


$name  = $sql->real_escape_string($_POST['name']);
$id	= $sql->real_escape_string($_POST['id']);
$qualification   = $sql->real_escape_string($_POST['qualification']);
$experience   = $sql->real_escape_string($_POST['experience']);
$email = $sql->real_escape_string($_POST['email']);
$mobile = $sql->real_escape_string($_POST['mobile']);

 $info = pathinfo($_FILES['resume']['name']);
 $ext = $info['extension']; // get the extension of the file
 $newname = rand().".".$ext; 
 $target = 'resume/'.$newname;
 move_uploaded_file( $_FILES['resume']['tmp_name'], $target);


$query ="INSERT INTO `jobs` (`candidate_id`, `job_id`, `name`, `qualification`, `Experience`, `mobile`, `email`, `resume`, `date`) VALUES (NULL, '$id', '$name', '$qualification', '$experience', '$mobile', '$email', '$target', CURRENT_TIMESTAMP);";

if ( !$sql->query($query) ) {
    echo "Error code ({$sql->errno}): {$sql->error}";
} else {
    echo 'success';
}

$sql->close();


?>
