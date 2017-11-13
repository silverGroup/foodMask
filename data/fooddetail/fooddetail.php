<?php
header("Content-Type:application/json;charset=utf-8");
require_once '../curl.func.php';
$appkey = '0377ce8690e07f34';//你的appkey
@$id =$_REQUEST['id'];
$url = "http://api.jisuapi.com/recipe/detail?appkey=$appkey&id=$id";
$result = curlOpen($url);
$jsonarr = json_decode($result, true);
//exit(var_dump($jsonarr));
 
if($jsonarr['status'] != 0)
{
    echo $jsonarr['msg'];
    exit();
}
$result = $jsonarr['result'];
echo json_encode($result);
 