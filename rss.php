<?php

require 'db_connect.php';

header("Content-type: text/xml"); 

$query = "Select * FROM article ORDER BY post_date DESC LIMIT 10";

$result = $sql->query($query); 

echo "<?xml version='1.0' encoding='UTF-8'?> 
<rss version='2.0'>
<channel>
<title>Bassbiz Services </title>
<link>http://bassbizindia.com</link>
<description>Bass Biz is a business processing firm located at Chennai and managed operated by young and dynamic professionals who are well experienced in accounting taxation financial management. </description>
<language>en-us</language>"; 

while($row = $result->fetch_assoc())
{
$title=$row['post_title']; 
//$link=$row['link']; 
$description=$row['post_content']; 

echo "<item> 
<title>$title</title>
<description>$description</description>
<link>http://www.bassbizindia.com/blog/blog_single_view.php?post_id=".$row['post_id']."</link>
</item>"; 
} 

$query = "select * from questions where ans_rply=1 ORDER BY qus_date  DESC LIMIT 10";

$result = $sql->query($query); 

while($row = $result->fetch_assoc())
{
$title=$row['question']; 
//$link=$row['link']; 
$description=$row['description']; 

echo "<item> 
<title>$title</title>
<description>$description</description>
<link>http://www.bassbizindia.com/expert_single_view.php?qus_id=".$row['qus_id']."</link>
</item>"; 
} 

echo "
</channel>
</rss>"; 

//echo "test page rss";
?>
