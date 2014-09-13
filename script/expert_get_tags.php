<?php
    $mysql = new mysqli('localhost','bassbiz1_bt','Bass2014!','bassbiz1_data');
    $result = $mysql->query("select DISTINCT tag_id,tag_name from questions_tag");
    $rows = array();
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
        $rows[] = array_map("utf8_encode", $row);
    }
    echo json_encode($rows);
    $result->close();
    $mysql->close();

?>
