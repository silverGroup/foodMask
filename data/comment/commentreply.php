<?php
// 获取用户的回复评论内容，插入表replymsg中
require("../init.php");
$menuid=$_REQUEST["menu_id"];
$user_id=$_REQUEST["user_id"];
$reply=$_REQUEST["reply"];
$mid=$_REQUEST["m_id"];
$replytime=$_REQUEST["replytime"];
$com_name=$_REQUEST["com_name"];
if($menuid&&$reply&&$mid&&$user_id){
//执行插入语句
$sql="INSERT INTO replymsg(menu_id,user_id,m_id,reply,replytime,com_name) VALUES($menuid,$user_id,$mid,'$reply',$replytime,'$com_name');";
$result=mysqli_query($conn,$sql);
	if($result){
		echo '{"code":1,"msg":"回复成功"}';
	}else{
		echo '{"code":-1,"msg":"回复失败"}';
	}
}
?>