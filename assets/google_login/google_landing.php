<?php
session_start();
   	include "../../db_connect.php";
	$username = $_GET['name'];
	$email = $_GET['email'];
	
	$uname=$_GET['name'];
	$email=$_GET['email'];
	
	$checkUserSql="select * from google_login where email= '$email'";
	$checkUserRes=$sql->query($checkUserSql);
	$checkUserCount=mysqli_num_rows($checkUserRes);
	
	if($checkUserCount == 0){
		$query="insert into google_login(name,email,inserted_on) values('$uname','$email',now())";
		$sql->query($query);
	}
	$_SESSION['UNAME']=$_GET['name'];
	$_SESSION['UEMAIL']=$_GET['email'];

	header('Location: ' . $_SERVER['HTTP_REFERER']);

?>
