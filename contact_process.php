<?php
require 'db_connect.php';

$name  = $sql->real_escape_string($_POST['name']);
$designation   = $sql->real_escape_string($_POST['designation']);
$company = $sql->real_escape_string($_POST['company']);
$company_type = $sql->real_escape_string($_POST['company_type']);
$email = $sql->real_escape_string($_POST['email']);
$mobile = $sql->real_escape_string($_POST['mobile']);
$city = $sql->real_escape_string($_POST['city']);
$state = $sql->real_escape_string($_POST['state']);
$country = $sql->real_escape_string($_POST['country']);
$postal_code = $sql->real_escape_string($_POST['postal_code']);
$requirements = $sql->real_escape_string($_POST['requirements']);
$description = $sql->real_escape_string($_POST['description']);

/*echo 'Name-'.$name.'<br>';
echo 'designation-'.$designation.'<br>';
echo 'company-'.$company.'<br>';
echo 'company_type-'.$company_type.'<br>';
echo 'email-'.$email.'<br>';
echo 'mobile-'.$mobile.'<br>';
echo 'city-'.$city.'<br>';
echo 'state-'.$state.'<br>';
echo 'country-'.$country.'<br>';
echo 'postal_code-'.$postal_code.'<br>';
echo "requirements<br>";*/
    foreach($_POST['requirements'] as $check) {

            $requirements .= $check.",";
            
            //echo $check."<br>"; //echoes the value set in the HTML form for each checked checkbox.
                         //so, if I were to check 1, 3, and 5 it would echo value 1, value 3, value 5.
                         //in your case, it would echo whatever $row['Report ID'] is equivalent to.
    }

    
  //echo "requirements-group:".rtrim($requirements, ",")."<br>";

  //echo "<br>Decription";

//echo htmlspecialchars($_POST['description']);

$query ="INSERT INTO `sales_contact` (`id`, `name`, `designation`, `company_name`, `company_type`, `mobile`, `email`, `city`, `state`, `country`, `postal_code`, `requirements`, `description`, `date`) VALUES (NULL, '$name', '$designation', '$company', '$company_type', '$mobile', '$email ', '$city ', '$state', '$country', '$postal_code', '$requirements', '$description', CURRENT_TIMESTAMP);";

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
