<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mob = $_POST['mob'];
  $dob = $_POST['dob'];
  $pasword = $_POST['pasword1'];

  
  
  $conn = new mysqli('localhost','root','','user_details');
if ($conn->connect_error) {
  die('connection failed :'.$conn->connect_error);
}
else {
   $stmt = $conn->prepare("insert into resistration_details(name,email,mob,dob,pasword) 
   values(?,?,?,?,?,? )");
   $stmt->bind_param("ssiss",$name,$email,$mob,$dob,$pasword);
   $stmt->execute();
   echo"resistration Sucessfull";
   $stmt->close();
   $conn->close();
}
  
?>