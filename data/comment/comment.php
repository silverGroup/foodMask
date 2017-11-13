<?php
require("../init.php");
//获取menuid和菜单存储具体的评论信息
@$menuid=$_REQUEST['menuid'];
@$msg=$_REQUEST['msg'];
@$uptime=$_REQUEST['uptime'];
@$user_id=$_REQUEST['user_id'];
if($menuid&&$msg){
//执行插入语句
$sql="INSERT INTO comment_msg(menuid,msg,uptime,user_id) VALUES('$menuid','$msg',$uptime,$user_id);";
$result=mysqli_query($conn,$sql);
	if($result){
		echo '{"code":1,"msg":"评论成功"}';
	}else{
		echo '{"code":-1,"msg":"评论失败"}';
	}
}
?>