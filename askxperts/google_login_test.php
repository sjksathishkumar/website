<?php
	session_start();
	if(isset($_SESSION['UNAME']))
	{
	echo $_SESSION['UNAME']."<br>";
	echo $_SESSION['UEMAIL'];
	}
	else
	{
		//$_SESSION['UNAME'] = 'sathish';
		//$_SESSION['UEMAIL'] = 'sjksathishkumar@gmail.com';
		echo "No session Found!";
	}
?>
