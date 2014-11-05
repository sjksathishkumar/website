<?php
 
error_reporting();
include_once("../include/config.php");

//getting all input given from user

  $id = $_POST['id'];
  $title = $_POST['title'];
  $description = $_POST['description2'];
  $date = $_POST['start_dates'];
  $tag = $_POST['tag'];
  $url = $_POST['url'];

  if($tag == 'Income-Tax')
  {
    $color = '#195E4B';
    $backgroundColor = '#195E4B';
  }
  else if($tag == 'RoC-Filing')
  {
    $color = '#f16829';
    $backgroundColor = '#f16829';
  }
  else if($tag == 'Service-Tax')
  {
    $color = '#0060E8';
    $backgroundColor = '#0060E8';
  }
  else if($tag == 'Sales-Tax')
  {
    $color = '#A9005B';
    $backgroundColor = '#A9005B';
  }
  else if($tag == 'Excise-Duty')
  {
    $color = '#E80000';
    $backgroundColor = '#E80000';
  }
  else if($tag == 'Customs-Duty')
  {
    $color = '#59009C';
    $backgroundColor = '#59009C';
  }
  else
  {
    $color = '#820000';
    $backgroundColor = '#820000';
  }

  $originalDate = "2010-03-21";
  $newDate = date("Y-m-d", strtotime($date));

      //echo "$id<br>$title<br>$description<br>$newDate<br>$tag<br>$url<br>$color";

  $sql->autocommit(FALSE); 

  $query = "UPDATE `events` SET `title` = '$title', `description` = '$description', `start` = '$newDate', `tag` = '$tag', `url` = '$url', `color` = '$color', `backgroundColor` = '$backgroundColor' WHERE `id` = $id";

  $result = $sql->query($query); 

  if($result)
  {
  	echo 'success';	
  	$sql->commit();
  	$sql->close();
  }	
  else
  { 
    echo 'error';
  	$sql->rollback();
    $sql->close();
  }

?>
