<?php
include('db.php');

if($_GET['url'])
{

$url=mysql_real_escape_string($_GET['url']);
echo $url;
$url=$url.'.html';
$sql=mysql_query("select title,body from blog where url='$url'");
$count=mysql_num_rows($sql);
echo "Count-$count";
$row=mysql_fetch_array($sql);
$title=$row['title'];
$body=$row['body'];
}
else
{
echo '404 Not URL Available by top error.';
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
 
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> 
 
<title><?php echo $title; ?></title> 

<style> 
.editbox
{
display:none
}
td
{
padding:7px;
}
body
{
font-family:Arial, Helvetica, sans-serif;
font-size:14px;
}

 .shade
{
box-shadow:0px 0px 18px #000000;
-moz-box-shadow:0px 0px 18px #000000;
-webkit-box-shadow:0px 0px 18px #000000;
border-radius: 8px;-moz-border-radius: 8px; -webkit-border-radius: 8px;
} 


 
</style> 
 
</head> 
 
<body bgcolor="#dedede"> 
<div style="margin:0 auto; width:750px; padding:10px; background-color:#fff; height:800px;" class="shade"> 

<?php 
if($count)
{
echo "<h1>$title</h1>
<div class='body'>$body</div>";
}
else
{
echo "<h1>Not URL Available 404 by sathish.</h1>";
}

?>

</div>

 
</body></html>