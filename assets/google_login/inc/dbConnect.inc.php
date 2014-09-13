<?php
/*$mysql_db_hostname = "Host name";
$mysql_db_user = "UserName";
$mysql_db_password = "Password";
$mysql_db_database = "Database Name";

$con = mysql_connect($mysql_db_hostname, $mysql_db_user, $mysql_db_password) or die("Could not connect database");
mysql_select_db($mysql_db_database, $con) or die("Could not select database");*/

$con=mysqli_connect("localhost","root","basstechs","question");
$sql = new mysqli('localhost','root','basstechs','question');
if(!$con)
{
	echo "Faild to Connect Database!";
}
?>
