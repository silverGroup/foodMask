<?php
require("../init.php");
@$uid=$_REQUEST["user_id"];
$sql="SELECT mainimg,subject,mid FROM food_menu WHERE user_id=$uid AND status=2";
$result=mysqli_query($conn,$sql);
if($result==true){
    $row=mysqli_fetch_ALL($result,MYSQLI_ASSOC);
    if($row){
        echo json_encode($row);
    }else{
        echo '{"code":-1,"msg":"查询失败"}';
    }
}
?>