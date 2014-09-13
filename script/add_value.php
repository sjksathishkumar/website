<?php
require '../db_connect.php';

$qus_id = $sql->real_escape_string($_POST['qus_id']);
$mobile = $sql->real_escape_string($_POST['mobile']);
$suggestion = $sql->real_escape_string($_POST['suggestion']);
$email	=	$sql->real_escape_string($_POST['email']);

$query = "UPDATE google_login SET mobile = '$mobile', id = (SELECT @update_id := id) WHERE email = '$email'";

//$query = "UPDATE google_login SET mobile='$mobile' WHERE email='$email'";

$result = $sql->query($query);

// For getting last updated id

$query = "SELECT @update_id";

$lst_insert_id = $sql->query($query);


while($row = mysqli_fetch_array($lst_insert_id))
{
	$user_id = $row['0'];
}
$query = "INSERT INTO `add_value` (`value_id`, `qus_id`, `user_id`, `value_points`, `status`, `notes`, `value_date`) VALUES (NULL, '$qus_id', '$user_id', '$suggestion', '0', NULL,CURRENT_TIMESTAMP)";

$result = $sql->query($query);


if($result)
{
	echo 'success';
	
}
else
{
	echo "Faild";
	
}

?>
