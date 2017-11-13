<?php
header("Content-Type:application/json;charset=utf-8");
require_once '../curl.func.php';
$appkey = '0377ce8690e07f34';//你的appkey
$keyword = $_REQUEST['keyword'];
//classid=2;
//分类id（二级id）
$num =$_REQUEST['num'];
$url = "http://api.jisuapi.com/recipe/search?appkey=$appkey&keyword=$keyword&num=$num";
$result = curlOpen($url);
$jsonarr = json_decode($result, true);
//exit(var_dump($jsonarr));
if($jsonarr['status'] != 0)
{
    echo $jsonarr['msg'];
    exit();
}
$result = $jsonarr['result'];
echo json_encode($result['list']);
?>