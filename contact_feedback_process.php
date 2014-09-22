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
//$file = $sql->real_escape_string($_POST['file']);

//$file = $_FILE['file'];
//echo $file;
 //$info = pathinfo($_FILES['file']['name']);
 //$ext = $info['extension']; // get the extension of the file
//$ext = pathinfo($_FILES['file'], PATHINFO_EXTENSION);
echo "$mobile";
$path = $_FILE['feedback_file']['name'];
echo "Path-".$path;
/*$ext = pathinfo($path, PATHINFO_EXTENSION);
echo "extension-".$ext;


 $newname = rand().".".$ext; 
 $target = 'feedback_files/'.$newname;
 move_uploaded_file( $_FILES['file']['tmp_name'], $target);*/

 //echo $target;


/*echo "Who-".$who."<br>";
echo "What-".$what."<br>";
echo 'Name-'.$name.'<br>';
echo 'designation-'.$designation.'<br>';
echo 'company-'.$company.'<br>';
echo 'email-'.$email.'<br>';
echo 'mobile-'.$mobile.'<br>';
echo "<br>feedback";

echo htmlspecialchars($_POST['feedback']);
echo "<br>".$file;*/

/*$query ="INSERT INTO `feedback_contact` (`id`, `who`, `what`, `name`, `designation`, `company`, `email`, `mobile`, `feedback`, `file`, `date`) VALUES (NULL, '$who', '$what', '$name', '$designation', '$company', '$email', '$mobile', '$feedback', '$target', CURRENT_TIMESTAMP);";

if ( !$sql->query($query) ) {
    echo "Error code ({$sql->errno}): {$sql->error}";
    //header('Location: ' . $_SERVER['HTTP_REFERER']);
} else {
    echo 'success';
    //header('Location: ' . $_SERVER['HTTP_REFERER']);
}

$sql->close();
*/

?>
