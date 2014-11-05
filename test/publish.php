<?php
include('db.php');

function string_limit_words($string, $word_limit) {
   $words = explode(' ', $string);
   return implode(' ', array_slice($words, 0, $word_limit));
}
$blog='';

if($_SERVER["REQUEST_METHOD"] == "POST")
{
$title=mysql_real_escape_string($_POST['title']);
$body=mysql_real_escape_string($_POST['body']);
$title=htmlentities($title);
$body=htmlentities($body);
$date=date("Y/m/d");

$newtitle=string_limit_words($title, 6);
$urltitle=preg_replace('/[^a-z0-9]/i',' ', $newtitle);

$newurltitle=str_replace(" ","-",$newtitle);
$url=$newurltitle.'.html';


mysql_query("insert into blog(title,body,url) values('$title','$body','$url')");
$blogurl="http://www.bassbizindia.com/test/$url";

}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
 
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> 
 
<title>SEO Friendly URLs</title> 
 
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
<div style="margin-top:10px;"> </div> 
<h2><a href="<?php echo $blogurl; ?>"><?php echo $blogurl; ?></a></h2>

<h1>SEO Friendly URLs with PHP</h1> 
<form method="post" action="">
<table width="100%">
<tr>
<td width="80px" valign="top">
<b>Title:</b>
</td>
<td><input type="text"  style="width:400px;border:solid 2px #006699; padding:5px" name="title"/></td>
</tr>
<tr>
<td width="100px" valign="top">
<b>Body:</b>
</td>
<td><textarea name="body" style="width:400px; height:200px; border:solid 2px #006699; padding:5px"></textarea></td>
</tr>

<tr>
<td width="100px">

</td>
<td><input type="submit"  value=" Publish "/></td>
</tr>


</table>
</form>
</div>

 
</body></html>