<?php
header("Content-Type:application/json;charset=utf-8");
require_once '../curl.func.php';
$appkey = '0377ce8690e07f34';//你的appkey
$num = 20;
//classid=2;
@$classid =$_REQUEST["classid"];
//分类id（二级id）
$start = 1;
$url = "http://api.jisuapi.com/recipe/byclass?appkey=$appkey&classid=$classid&start=$start&num=$num";
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
//var_dump($result['list']);
//var_dump($jsonarr);
//foreach($result['list'] as $val)
//{
//    echo $val['id'].' '.$val['classid'].' '.$val['name'].' '.$val['peoplenum'].'<br>';
//    echo $val['preparetime'].' '.$val['cookingtime'].' '.$val['content'].' //'.$val['pic'].' '.$val['tag'].'<br>';
 //   foreach($val['material'] as $v)
 //   {
  //      echo $v['mname'].' '.$v['type'].' '.$v['amount'].'<br>';
 //   }
 //   foreach($val['process'] as $v)
  //  {
   //     echo $v['pcontent'].' '.$v['pic'].'<br>';
 //  }
//}