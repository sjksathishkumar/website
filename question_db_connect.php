<?php

$con=mysqli_connect("localhost","root","basstechs","question");
$sql = new mysqli('localhost','root','basstechs','question');
if(!$con)
{
	echo "Faild to Connect Database!";
}
?>