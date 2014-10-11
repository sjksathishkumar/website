<?php
require 'db_connect.php';

$name  = $sql->real_escape_string($_POST['name']);
$designation   = $sql->real_escape_string($_POST['designation']);
$company = $sql->real_escape_string($_POST['company']);
$investment = $sql->real_escape_string($_POST['investment']);
$email = $sql->real_escape_string($_POST['email']);
$mobile = $sql->real_escape_string($_POST['mobile']);
$city = $sql->real_escape_string($_POST['city']);
$state = $sql->real_escape_string($_POST['state']);
$country = $sql->real_escape_string($_POST['country']);
$postal_code = $sql->real_escape_string($_POST['postal_code']);
$reason = $sql->real_escape_string($_POST['reason']);

/*echo 'Name-'.$name.'<br>';
echo 'designation-'.$designation.'<br>';
echo 'company-'.$company.'<br>';
echo 'investment-'.$investment.'<br>';
echo 'email-'.$email.'<br>';
echo 'mobile-'.$mobile.'<br>';
echo 'city-'.$city.'<br>';
echo 'state-'.$state.'<br>';
echo 'country-'.$country.'<br>';
echo 'postal_code-'.$postal_code.'<br>';

echo "<br>Reason";

echo htmlspecialchars($_POST['reason']);*/

$query ="INSERT INTO `partner_contact` (`id`, `name`, `designation`, `company`, `investment`, `mobile`, `email`, `city`, `state`, `country`, `postal_code`, `reason`, `time`) VALUES (NULL, '$name', '$designation', '$company', '$investment', '$mobile', '$email', '$city', '$state', '$country', '$postal_code', '$reason', CURRENT_TIMESTAMP);";

//$query = "INSERT INTO `sales_contact` (`id`, `first_name`, `last_name`, `company_name`, `mobile`, `email`, `city`, `country`, `postal_code`, `product_type`, `product_category`, `detail`) VALUES (NULL, '$f_name', '$l_name', '$company', '$mobile', '$email', '$city', '$country', '$postal_code', '$product_type', '$product_category', '$details');";

if ( !$sql->query($query) ) {
    echo "Error code ({$sql->errno}): {$sql->error}";
    //header('Location: ' . $_SERVER['HTTP_REFERER']);
} else {
    echo 'success';
    //header('Location: ' . $_SERVER['HTTP_REFERER']);
}

$sql->close();


?>
