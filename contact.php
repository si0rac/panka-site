php -S localhost:8080

<?php

#Receive user input
$email_address = $_POST['email_address'];
$subject = $_POST['subject'];

#Filter user input
function filter_email_header($form_field) {  
return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$email_address  = filter_email_header($email_address);

#Send email
$headers = "From: $email_addressn";
$sent = mail('bzoltan0@gmail.com', 'Contact Form Submission', $subject, $headers);

#Thank user or notify them of a problem
if ($sent) {
    echo "Sent!";

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>Thank you for contacting me.</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your submission. Please try again.</p>
</body>
</html>
<?php
}
?>