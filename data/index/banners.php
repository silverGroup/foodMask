<?php
//查询数据库，获取数据库中banner的图片
require_once("../init.php");
$sql="SELECT * FROM index_carousel";
$result=mysqli_query($conn,$sql);
if($result==true){
$rowList=mysqli_fetch_All($result,MYSQLI_ASSOC);
if($rowList){
    echo json_encode($rowList);
}else{
    echo '{"code":-1,"msg":"信息错误"}';
}
}else{
    echo $sql;
}
?>