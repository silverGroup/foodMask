<?php
require_once("../init.php");
$uname=$_REQUEST['uname'];
$sql="SELECT lucysign FROM user WHERE uname='$uname';";
$result=mysqli_query($conn,$sql);
if($result==true){
$row=mysqli_fetch_assoc($result);
if($row){
    echo '{"code":1,"msg":"信息正确","lucysign":"'.$row["lucysign"].'"}';
}else{
    echo '{"code":-1,"msg":"信息错误"}';
}
}
?>