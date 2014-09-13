<?php

$file = realpath('89239206.jpg');

echo $file;

if(unlink($file))
{

	echo "Deleted";
}
else
{		
	echo "Not deleted";
}

?>

