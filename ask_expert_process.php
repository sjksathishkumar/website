<?php
require '../db_connect.php';

$name  = $sql->real_escape_string($_POST['name']);
$email = $sql->real_escape_string($_POST['email']);
$mobile = $sql->real_escape_string($_POST['mobile']);
$question = $sql->real_escape_string($_POST['question']);
$description = $sql->real_escape_string($_POST['description']);

$tags = isset($_POST['tags']) ? $_POST['tags'] : array();

$query = "UPDATE google_login SET mobile = '$mobile', id = (SELECT @update_id := id) WHERE email = '$email'";

$result = $sql->query($query);

$query = "SELECT @update_id";

$lst_insert_id = $sql->query($query);


while($row = mysqli_fetch_array($lst_insert_id))
{
	$user_id = $row['0'];
}

$query ="INSERT INTO `questions` (`qus_id`, `question`, `description`, `user_id`, `answer`, `ans_rply`, `qus_date`) VALUES (NULL, '$question', '$description', '$user_id', NULL, '0', CURRENT_TIMESTAMP)";

$result = $sql->query($query);

$last_qus_id = $sql->insert_id;

foreach ($tags as $tag) {

	if(!is_numeric($tag))
	{
		$query = "INSERT INTO `questions_tag` (`tag_id`, `tag_name`) VALUES (NULL, '$tag')";

		$result = $sql->query($query);

		$last_tag_id = $sql->insert_id;

		$query = "INSERT INTO `questions_tag_map` (`tag_id`, `qus_id`) VALUES ('$last_tag_id', '$last_qus_id')";

		$result = $sql->query($query);

	}
	else
	{
		$query = "INSERT INTO `questions_tag_map` (`tag_id`, `qus_id`) VALUES ('$tag', '$last_qus_id')";

		$result = $sql->query($query);

	}
}

if ( !$result ) {
    echo "Error code ({$sql->errno}): {$sql->error}";
} else {
    echo 'success';
}

$sql->close();


?>
