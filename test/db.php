<?php
$mysql_hostname = "localhost";
$mysql_user = "bassbiz1_bt";
$mysql_password = "Bass2014!";
$mysql_database = "bassbiz1_data";
$prefix = "";
$bd = mysql_connect($mysql_hostname, $mysql_user, $mysql_password) or die("Opps some thing went wrong");
mysql_select_db($mysql_database, $bd) or die("Opps some thing went wrong");
?>