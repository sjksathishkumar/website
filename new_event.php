<?php
 
error_reporting();
include_once("../include/config.php");

//getting all input given from user

	$title = $_POST['title'];
	$description = $_POST['description'];
	$date = $_POST['start_date'];
	$tag = $_POST['tag'];
    
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

	$temp_title=htmlentities($title);

	//Title to friendly URL conversion

	function string_limit_words($string, $word_limit)
	{
	  $words = explode(' ', $string, ($word_limit + 1));
	  if(count($words) > $word_limit)
	  array_pop($words);
	  return implode(' ', $words);
	}

	$newtitle = string_limit_words($temp_title,6);

	$urltitle=preg_replace('/[^a-z0-9]/i',' ', $newtitle);

	$newurltitle=str_replace(" ","-",$urltitle);

	$newurltitle = rtrim($newurltitle , '-');

	$url=$newurltitle.'.html'; // Final URL

	$url = strtolower($url);

	$query = "INSERT INTO `events` (`id`, `title`, `description`, `start`, `url`, `tag`, `color`, `backgroundColor`) VALUES (NULL, '$title', '$description', '$newDate', '$url', '$tag', '$color', '$backgroundColor')";

	$result = $sql->query($query);

	if($result)
	{
	    echo 'success';
		$sql->close();
	}	
	else
	{ 
	    echo 'error';  
	}



?>
