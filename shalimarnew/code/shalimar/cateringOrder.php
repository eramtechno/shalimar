<?php

require("phpmailer/PHPMailerAutoload.php");

if($_POST){
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $mobile = $_POST['Mobile'];
    $typeofservice = $_POST['TypeOfService'];
	

	$mail = new PHPMailer();

	$mail->IsSMTP();                                      // set mailer to use SMTP
	$mail->Host = "smtp.gmail.com";  // specify main and backup server
	$mail->Port = 465;
	$mail->SMTPSecure = 'ssl';
	$mail->SMTPAuth = true;     // turn on SMTP authentication
	$mail->Username = shalimar.mumbaiweb@gmail.com";  // SMTP username
	$mail->Password = "$rpl@2011";


	$mail->From = $email;
	$mail->FromName = $name;
//  $mail->AddAddress("info@shalimarmumbai.com", "Catering Inquiry From the Website");
	$mail->AddAddress("verligte@gmail.com", "Catering Inquiry From the Website");
	$mail->IsHTML(true);   

	$mail->Subject = "Feedback from Website";
	$mail->Body    = "<b>Catering Inquiry</b><br>Below are the details<br/>
	
	Name: ".$name.'<br/>'.
	'Email: '.$email.'<br/>'.
	'Mobile: '.$mobile.'<br/>'.
	'Branch Visited: '.$branch.'<br/>'.
	'Type of Service: '.$typeofservice.'<br/>';

	if(!$mail->Send())
	{
	   echo "Message could not be sent. <p>";
	   echo "Mailer Error: " . $mail->ErrorInfo;
	   exit;
	}

	echo "Message has been sent";
}
?>