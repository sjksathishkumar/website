<?php 

error_reporting();
include_once("../include/config.php");
$aColumns = array('qus_id', 'question', 'description', 'ans_rply', 'answer', 'url', 'keywords', 'tag_name', 'tag_id');

/* Indexed column (used for fast and accurate table cardinality) */
$sIndexColumn = "qus_id";

/* DB table to use */
$sTable = "qustemp";
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP server-side, there is
 * no need to edit below this line
 */

/* 
 * Local functions
 */
function fatal_error ( $sErrorMessage = '' )
{
    header( $_SERVER['SERVER_PROTOCOL'] .' 500 Internal Server Error' );
    die( $sErrorMessage );
}

$query = "CREATE TEMPORARY TABLE IF NOT EXISTS qustemp AS ( select DISTINCT q.qus_id,q.question,q.description,q.ans_rply,q.answer,q.url,q.keywords,GROUP_CONCAT(DISTINCT t.tag_name) as tag_name, GROUP_CONCAT(DISTINCT t.tag_id) as tag_id from questions_tag_map tm join questions q on q.qus_id = tm.qus_id join questions_tag t on t.tag_id = tm.tag_id GROUP BY q.qus_id);";
$rResult = $sql->query($query);

$sWhere = "WHERE ";
$sWhere .= "`qus_id` = '".$sql->real_escape_string($_POST['qus_id'])."' ";

/*
 * SQL queries
 * Get data to display
 */
$sQuery = "
    SELECT SQL_CALC_FOUND_ROWS `".str_replace(" , ", " ", implode("`, `", $aColumns))."`
    FROM   $sTable
	$sWhere
    ";
$rResult = $sql->query( $sQuery) or fatal_error( 'MySQL Error1: ' . mysqli_errno() . " " .mysqli_error() );



/*
 * Output
 */
while ( $aRow = mysqli_fetch_array( $rResult ) )
{
    
	$output = array('qus_id' => $aRow['qus_id'],'question' => $aRow['question'],'answer' => $aRow['answer'],'description' => $aRow['description'],'ans_rply' => $aRow['ans_rply'],'url' => $aRow['url'],'keyword' => $aRow['keywords'],'tagss' => $aRow['tag_name']);
	
	
	
}
echo json_encode( $output );

?>
