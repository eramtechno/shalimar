<? 
 if (!isset ($_POST['Email']))  { //Oops, forgot your email addy! 
    die ("<p>Oops!  You forgot to fill out the your email address! Click on the back arrow to go back</p>"); 
  } 
  else { 
   $to="verligte@gmail.com";
   $subject="Career mail for the post of ".$_POST['Applying'];
	ob_start(); //Turn on output buffering 
   // get the sender's name and email address
   // we'll just plug them a variable to be used later
   $from = $_POST['Name']."<".$_POST['Email'].">";
	$semi_rand = md5(time()); 
	$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
   // generate a random string to be used as the boundary marker

   // store the file information to variables for easier access
   $tmp_name = $_FILES['filename']['tmp_name'];
   $type = $_FILES['filename']['type'];
   $name = $_FILES['filename']['name'];
   $size = $_FILES['filename']['size'];

   // here we'll hard code a text messge
   // again, in reality, you'll normally get this from the form submission
$message = "Name			: ".$_POST['fullname']."<br>Email ID		: ".$_POST['emailadd']."<br>\nApplying for the Post			: ".$_POST['postapplying']."<br>\nJob Experience in Years		: ".stripslashes($_POST['jobexp'])."<br>\nMobile No.		: ".stripslashes($_POST['mobileno'])."<br>\nAlternate Number		: ".$_POST['altno']."<br>\nAttched detail : $name<br><br>\n\r Sender IP Address : ".$_SERVER["REMOTE_ADDR"];
   // if the upload succeded, the file will exist
   if ((file_exists($tmp_name)) and (($type =="application/msword") || ($type =="application/pdf"))) {

      // check to make sure that it is an uploaded file and not a system file
      if(is_uploaded_file($tmp_name)){
         // open the file for a binary read
         $file = fopen($tmp_name,'rb');
         // read the file content into a variable
         $data = fread($file,filesize($tmp_name));
         // close the file
         fclose($file);
     }
      // now we'll build the message headers
//===================================================================================================== 
    $fileatt = $data; // Path to the file                  
	//$fileatt_type = "application/octet-stream"; // File Type 
	$fileatt_type =$type;
	$fileatt_name = $name;
    //$start=strrpos($attachment, '/') == -1 ? strrpos($attachment, '//') : strrpos($attachment, '/')+1;
	//$fileatt_name = substr($attachment, $start, strlen($attachment)); // Filename that will be used for the file as the 	attachment 
	$email_from = $from; // Who the email is from 
	$email_subject =  $subject; // The Subject of the email 
	$email_txt = $message; // Message that the email has in it 
	
	$email_to = $to; // Who the email is to

	$headers = "From: ".$email_from;


	$msg_txt="\n\n";

	$semi_rand = md5(time()); 
	$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
    
	$headers .= "\nMIME-Version: 1.0\n" . 
            "Content-Type: multipart/mixed;\n" . 
            " boundary=\"{$mime_boundary}\""; 

	$email_txt .= $msg_txt;
	
	$email_message .= "This is a multi-part message in MIME format.\n\n" . 
                "--{$mime_boundary}\n" . 
                "Content-Type:text/html; charset=\"iso-8859-1\"\n" . 
               "Content-Transfer-Encoding: 7bit\n\n" . 
	$email_txt . "\n\n"; 

	$data = chunk_split(base64_encode($data)); 

	$email_message .= "--{$mime_boundary}\n" . 
                  "Content-Type: {$fileatt_type};\n" . 
                  " name=\"{$fileatt_name}\"\n" . 
                  //"Content-Disposition: attachment;\n" . 
                  //" filename=\"{$fileatt_name}\"\n" . 
                  "Content-Transfer-Encoding: base64\n\n" . 
                 $data . "\n\n" . 
                  "--{$mime_boundary}--\n"; 

	$ok = @mail($email_to, $email_subject, $email_message, $headers); 

	if($ok) { 
	} else { 
		 echo "<p style=\"font:Arial, Helvetica, sans-serif 1.2em; line-height:1.8em;color:#AA0000;\" align=\"center\">Failed to send mail. Please try again or inform administrator of School.</p>"; 
   		echo "<a href=\"javascript:history.back()\"><b>Go Back >></b></a>";
   		die();
	} 
 //=========================================================================================== 
   } else {
   echo "<p style=\"font:Arial, Helvetica, sans-serif 1.2em; line-height:1.8em;color:#AA0000;\" align=\"center\">Failed to send mail. Please ensure the file name ends in .doc or .pdf.</p>"; 
   echo "<div style=\"font:Arial, Helvetica, sans-serif 1.2em; line-height:1.8em;color:#AA0000;\" align=\"center\"><a href=\"javascript:history.back()\"><b>Go Back >></b></a></div>";
   die();
   }
   $url = "http://".$_SERVER['HTTP_HOST'];
  } 
  
  print "<div style=\"font:Arial, Helvetica, sans-serif 1.2em; line-height:1.8em;color:#AA0000;\" align=\"center\">Your Detail has been send successfully. We will get back to you soon.</div>";
	 echo "<meta http-equiv=\"Refresh\" content=\"15; URL=$url\">";
  ?>