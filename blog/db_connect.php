<?php

$con=mysqli_connect("localhost","root","basstechs","blog");
$sql = new mysqli('localhost','root','basstechs','blog');
if(!$con)
{
	echo "Faild to Connect Database!";
}
?>
