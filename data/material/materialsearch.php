<?php
require('../init.php');
$sql="SELECT title,issort FROM food_materials";
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