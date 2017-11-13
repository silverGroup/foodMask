<?php
require("../init.php");
//接收客户端请求来的数据
@$n=$_REQUEST['uname'];
@$p=$_REQUEST['upwd']; 
@$h=$_REQUEST['phone'];
$sql="insert into user(uname,upwd,phone,lucysign,signtime,avatar) values('$n','$p',$h,0,0,'img/user/n2.jpg')";
$result=mysqli_query($conn,$sql);
if($result===true){
	echo '{"code":1,"msg":"注册成功"}';
}else{
	echo '{"code":-1,"msg":"注册失败"}';
}
?>