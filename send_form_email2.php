<?php
if(isset($_POST['phone2'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "ityulkanov@gmail.com";
    $email_subject = "RealEstate";
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(
       !isset($_POST['phone2'])) {
       died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $phone = $_POST['phone2']; // required
    
     
    $error_message = "";

  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "RealEstate-Нижняя форма.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Телефон: ".clean_string($phone)."\n";

// create email headers
$headers = 'From: '.$name."\r\n".
'Reply-To: '.$name."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  

}
?>
 