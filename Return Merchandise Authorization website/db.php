<?php
$hostname= 'bn9a06luhu0nmlivnx27-mysql.services.clever-cloud.com';
$user= 'uthd0nujsc6mmpbl';
$password='7xdIOhiRNZhMpUgxhR1M';
$dbname='bn9a06luhu0nmlivnx27';

$conn = mysqli_connect($hostname, $user, $password, $dbname );

//check
if (!$conn){
	die("Connection Failed: " . mysqli_connect_error());

}

$serial = $_GET['w3'];
$confirmation = $_GET['w1'];
$address = $_GET['w2'];


$query = "INSERT INTO Books(serial_number, confirmation_number, return_address) VALUES($serial, $confirmation,'$address')";
if(mysqli_query($conn, $query))
 {
  
  include 'confirmation.html';

    echo "<br> Serial: ";
    echo $serial;
    echo "<br> confirmation: ";
    echo $confirmation;
    echo "<br> ADDRESS: ";
    echo $address;
 }

?>
