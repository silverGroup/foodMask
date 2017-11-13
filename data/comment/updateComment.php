<?php
require_once("../init.php");
//根据rid获取评论信息,并进行更新操作
@$mid=$_REQUEST['mid'];
@$msg=$_REQUEST['msg'];
$sql="UPDATE comment_msg SET msg='$msg' WHERE mid=$mid";
$result=mysqli_query($conn,$sql);
if($result==true){
    echo '{"code":1,"msg":"更新评论成功"}';
}else{
    echo '{"code":-1,"msg":"更新评论失败"}';
}
?>