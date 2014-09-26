<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Ajax File Upload with jQuery and PHP - Demo</title>
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="js/jquery.form.min.js"></script>

<script type="text/javascript">
$(document).ready(function() { 
	var options = { 
			target:   '#output',   // target element(s) to be updated with server response 
			success:       afterSuccess,  // post-submit callback 
			resetForm: true        // reset the form after successful submit 
		}; 
		
	 $('#MyUploadForm').submit(function() { 
			$(this).ajaxSubmit(options);  			
			// always return false to prevent standard browser submit and page navigation 
			return false; 
		}); 
		

//function after succesful file upload (when server response)
function afterSuccess()
{
	$('#submit-btn').show(); //hide submit button
	$('#loading-img').hide(); //hide submit button
	$('#progressbox').delay( 1000 ).fadeOut(); //hide progress bar

}



}); 

</script>
<link href="style/style.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="upload-wrapper">
<div align="center">
<h3>Ajax File Uploader</h3>
<form action="processupload.php" method="post" enctype="multipart/form-data" id="MyUploadForm">
<input name="FileInput" id="FileInput" type="file" />
<input type="submit"  id="submit-btn" value="Upload" />
<img src="images/ajax-loader.gif" id="loading-img" style="display:none;" alt="Please Wait"/>
</form>
<div id="progressbox" ><div id="progressbar"></div ><div id="statustxt">0%</div></div>
<div id="output"></div>
</div>
</div>

</body>
</html>