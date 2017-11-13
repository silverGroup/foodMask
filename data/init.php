<?php
 //1:修改响应头的格式json
header("Content-Type:application/json;charset=utf-8");
$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = '';
$db_database = 'foodmask';
$db_port = 3306;
$db_charset = 'UTF8';
$conn = mysqli_connect(
  $db_host, $db_user, $db_password, $db_database, $db_port);
  mysqli_query($conn, "SET NAMES $db_charset");
?>