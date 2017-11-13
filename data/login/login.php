<?php
require_once("../init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
@$phone=$_REQUEST["phone"];
$sql="SELECT uid,uname,avatar FROM user WHERE (uname='$uname' or phone='$phone') and upwd='$upwd';";
$result=mysqli_query($conn,$sql);
if($result==true){
$row=mysqli_fetch_assoc($result);
if($row){
    echo '{"code":1,"msg":"信息正确","uid":'.$row["uid"].',"uname":"'.$row["uname"].'","avatar":"'.$row["avatar"].'"}';
}else{
    echo '{"code":-1,"msg":"信息错误"}';
}
}else{
    echo $sql;
}

?>