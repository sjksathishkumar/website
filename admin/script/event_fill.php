<?php 

error_reporting();
include_once("../include/config.php");
$aColumns = array('id', 'title', 'tag', 'start', 'url', 'description');

/* Indexed column (used for fast and accurate table cardinality) */
$sIndexColumn = "id";

/* DB table to use */
$sTable = "events";
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

$query = "SELECT * FROM `events`";
$rResult = $sql->query($query);

$sWhere = "WHERE ";
$sWhere .= "`id` = '".$sql->real_escape_string($_POST['id'])."' ";

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
    
	$output = array('id' => $aRow['id'],'title' => $aRow['title'],'datepicker2' => $aRow['start'],'description2' => $aRow['description'],'url' => $aRow['url'],'tag' => $aRow['tag']);
	
	
	
}
echo json_encode( $output );

?>
