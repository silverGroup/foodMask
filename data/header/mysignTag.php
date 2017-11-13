<?php
require_once("../init.php");
@$uid=$_REQUEST["uid"];
//获取数据库中的信息
$sql="SELECT signtag,signtime,lucysign FROM user WHERE uid=$uid";
$result=mysqli_query($conn,$sql);
if($result==true){
	$row=mysqli_fetch_assoc($result);
	if($row){
		echo '{"code":1,"msg":"信息正确","signtime":'.$row["signtime"].',"lucysign":'.$row["lucysign"].'}';
	}else{
		echo '{"code":-1,"msg":"信息错误"}';
	}
}
?>