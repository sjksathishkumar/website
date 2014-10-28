<?php 

error_reporting();
include_once("../include/config.php");
$aColumns = array('tag_id', 'tag_name');

/* Indexed column (used for fast and accurate table cardinality) */
$sIndexColumn = "tag_id";

/* DB table to use */
$sTable = "questions_tag";
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

$query = "SELECT * FROM questions_tag";
$rResult = $sql->query($query);

$sWhere = "WHERE ";
$sWhere .= "`tag_id` = '".$sql->real_escape_string($_POST['tag_id'])."' ";

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
    
	$output = array('tag_id' => $aRow['tag_id'],'tag_name' => $aRow['tag_name']);
	
	
	
}
echo json_encode( $output );

?>
