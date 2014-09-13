<?php

$con=mysqli_connect("localhost","root","basstechs","bass_data");
$sql = new mysqli('localhost','root','basstechs','bass_data');
if(!$con)
{
	echo "Faild to Connect Database!";
}
?>