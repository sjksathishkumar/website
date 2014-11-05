<?php
require 'db_connect.php';

header('Content-Type: text/xml');

echo '<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Bassbiz Services</title>
<description>Bass Biz is a business processing firm located at Chennai and managed operated by young and dynamic professionals who are well experienced in accounting taxation financial management.
</description>
<link>http://bassbizindia.com</link>';
$query = "select * from article ORDER BY post_date DESC limit 10;";

$result = $sql->query($query);

while ($row = $result->fetch_assoc()){
    $content = strip_tags($row['post_content']);
	$mysqldate = gmdate(DATE_RFC822, strtotime($row['post_date']));
    echo '
       <item>
          <title>'.$row['post_title'].'</title>
          <description><![CDATA[
          '.$content.'
          ]]></description>
          <link>http://www.bassbizindia.com/blog/'.$row['url'].'</link>
          <pubDate>'.$mysqldate.'</pubDate>
      </item>';
}
echo '</channel>
</rss>';
?>