<?php
require_once("../init.php");
@$lucysign=$_REQUEST["lucysign"];
@$uid=$_REQUEST["uid"];
@$time=$_REQUEST["signtime"];
//获取数据库中的信息
$sql="SELECT lucysign FROM user WHERE uid=$uid";
$result=mysqli_query($conn,$sql);
if($result==true){
$row=mysqli_fetch_assoc($result);
	if($row){
		$lucysign+=$row["lucysign"];
	}
}
//刷新数据库 lucysign设置+1,设置签到时间
mysqli_query($conn,"UPDATE user SET lucysign=$lucysign, signtime=$time WHERE uid=$uid");

$sql="SELECT lucysign FROM user WHERE uid=$uid";
$result=mysqli_query($conn,$sql);
if($result==true){
$row=mysqli_fetch_assoc($result);
	if($row){
		echo '{"code":1,"msg":"信息正确","lucysign":'.$row["lucysign"].'}';
	}else{
		echo '{"code":-1,"msg":"信息错误"}';
	}
}
?>