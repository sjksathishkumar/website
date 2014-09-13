<?php

$con=mysqli_connect("localhost","bassbiz1_bt","Bass2014!","bassbiz1_data");
$sql = new mysqli('localhost','bassbiz1_bt','Bass2014!','bassbiz1_data');
if(!$con)
{
	echo "Faild to Connect Database!";
}
?>