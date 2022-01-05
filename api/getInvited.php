<?php
header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents("php://input"),true);
$first_name = strtolower($data["firstName"]);
$last_name = strtolower($data["lastName"]);

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

$sql = "SELECT id, first_name, last_name, clan, state FROM `invited` WHERE (LOWER(first_name) = '".$first_name."' OR find_in_set('".$first_name."', LOWER(tag)) <> 0) AND LOWER(last_name) = '".$last_name."' LIMIT 1";
$result = $conn->query($sql);

$output = [];
$output["query"] = $sql;
$output["res"] = [];

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
      //print_r($row);
      if($row["clan"] != ""){
        $query = "SELECT id, first_name, last_name, state FROM `invited` WHERE clan = '".$row["clan"]."' order by first_name asc";
        //echo $query;
        $result = $conn->query($query);
        while($row = $result->fetch_assoc()) {
          array_push($output["res"], array_map('utf8_encode', $row));
        }
      } else {
        array_push($output["res"], array_map('utf8_encode', $row));
      }
      
  }
}




echo json_encode($output);
