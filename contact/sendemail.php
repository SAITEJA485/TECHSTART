<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';


$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit']))
{
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	try
	{
		$mail->isSMTP();
		$mail->Host = 'smtp.gmail.com';
		$mail->SMTPAuth = true;
		$mail->Username = 'techstart95@gmail.com';
		$mail->Password = 'techstart123';
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
		$mail->Port = '587';


		$mail->setFrom('techstart95@gmail.com');
		$mail->addAddress('techstart95@gmail.com');


		$mail->isHTML(true);
		$mail->Subject = 'Message Received (Contact Page)';
		$mail->Body = "<h3>Name : $name <br>EMail : $email <br>Message : $message</h3>";

		$mail->send();
		$alert = '<div class="alert-success">
					<span>Message sent! Thank you for contacting us.</span>
				  </div>';

	}
	catch(Exception $e)
	{
		$alert = '<div class="alert-error">
					<span>'.$e->getMessage().'</span>
				  </div>';
	}
}









?>