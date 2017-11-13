<?php
require_once("../init.php");
//根据rid获取评论信息,并进行更新操作
@$rid=$_REQUEST['rid'];
@$reply=$_REQUEST['reply'];
$sql="UPDATE replymsg SET reply='$reply' WHERE rid=$rid";
$result=mysqli_query($conn,$sql);
if($result==true){
    echo '{"code":1,"msg":"保存成功"}';
}else{
    echo '{"code":-1,"msg":"保存失败"}';
}
?>