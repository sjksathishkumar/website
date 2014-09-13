<?php
	session_start();
	if(isset($_SESSION['UNAME']))
	{
	echo $_SESSION['UNAME']."<br>";
	echo $_SESSION['UEMAIL'];
	}
	else
	{
		echo "No session Found!";
	}
?>
