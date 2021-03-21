<?php

require("phpmailer/PHPMailerAutoload.php");

if($_POST){
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $mobile = $_POST['Mobile'];
    $postapplying = $_POST['postApplying'];
    $reasonforapplying = $_POST['reasonofApplying'];
	

	$mail = new PHPMailer();

	$mail->IsSMTP();                                      // set mailer to use SMTP
	$mail->Host = "mail.shalimarmumbai.com";  // specify main and backup server
	$mail->Port = 465;
	$mail->SMTPSecure = 'ssl';
	$mail->SMTPAuth = true;     // turn on SMTP authentication
	$mail->Username = "no-reply@shalimarmumbai.com";  // SMTP username
	$mail->Password = "srpl2011";


	$mail->From = $email;
	$mail->FromName = $name;
//  $mail->AddAddress("info@shalimarmumbai.com", "Candiate Registration From the Website");
	$mail->AddAddress("verligte@gmail.com", "Candiate Registration From the Website");
	$mail->IsHTML(true);   

	$mail->Subject = "Candiate Registration from Website";
	$mail->Body    = "<b>Candiate Registration</b><br>Below are the details<br/>
	
	Name: ".$name.'<br/>'.
	'Email: '.$email.'<br/>'.
	'Mobile: '.$mobile.'<br/>'.
	'Post Applying For: '.$postapplying.'<br/>'.
	'Reson For Applying: '.$reasonforapplying.'<br/>';

	if(!$mail->Send())
	{
	   echo "Message could not be sent. <p>";
	   echo "Mailer Error: " . $mail->ErrorInfo;
	   exit;
	}

	echo "Message has been sent";
}
?>