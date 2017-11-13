<?php
require_once("../init.php");
//根据menuid获取评论信息
$menuid=$_REQUEST['menuid'];
// $user_id=$_REQUEST['user_id'];
// 查询两个表user和comment_msg表
$sql="SELECT c.mid,c.msg,c.uptime,u.uname,u.avatar,u.uid FROM comment_msg c,user u WHERE menuid='$menuid' AND u.uid=c.user_id";

$arrList=[
	'commentList'=>[],
	'replyList'=>[]
];
$result=mysqli_query($conn,$sql);
	if($result==true){
		$arrList['commentList']=mysqli_fetch_all($result,MYSQLI_ASSOC);
	}
	$sql="SELECT r.rid,r.reply, r.user_id,r.m_id,r.replytime,r.com_name,u.uname,u.avatar,c.msg
	 FROM replymsg r ,user u ,comment_msg c WHERE menu_id=$menuid AND r.user_id=u.uid AND r.m_id=c.mid";
	$result1=mysqli_query($conn,$sql);
	if($result1==true){
		$arrList['replyList']=mysqli_fetch_all($result1,MYSQLI_ASSOC);
	}		
	echo json_encode($arrList);

?>