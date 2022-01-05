<?php
header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents("php://input"), true);
$invited = json_decode($data["invited"], true);

$servername = "localhost";
$username = "root";
$password = "eugenio1996";
$dbname = "wedding";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


foreach ($invited as $item) {
   $sql = "UPDATE `invited` SET state = '".$item["state"]."' WHERE id = ".$item["id"];
   $result = $conn->query($sql);
}
