<?php
@$sub=$_REQUEST["subject"];		//#菜谱名称
@$myMain = $_FILES["file"];	
@$myPic = $_FILES["files"];		//#菜谱成品图
@$message=$_REQUEST["message"];	//#菜谱描述信息
@$level=$_REQUEST["level"];		//#难度
@$cuisine=$_REQUEST["cuisine"];	//#口味
@$technics=$_REQUEST["technics"];//#工艺
@$during=$_REQUEST["during"];	//#耗时
@$cookers=$_REQUEST["cookers"];	//#厨具
@$food1=$_REQUEST["food1"];		//主食材明细
@$food2=$_REQUEST["food2"];		//主食材数量
@$food3=$_REQUEST["food3"];		//#辅料明细
@$food4=$_REQUEST["food4"];		//#辅料数量
@$notes=$_REQUEST["notes"];		//#食材做法
@$tips=$_REQUEST["tips"];		//#食材技巧
@$copyright=$_REQUEST["copyright"];//#是否原创
@$status=$_REQUEST["status"];	//#所属状态，0草稿  还是菜谱正文1,审核状态2
@$user_id=$_REQUEST["user_id"]; //#用户编号
if(!$user_id){
	$user_id=1;
}
// var_dump($myPic);
//修改图片路径
$ImgList=[];
$html="";
for($i=0;$i<count($myPic['name']);$i++){
 //2:判断是否在上传文件
if(!empty($myPic)){
 $picname= $myPic['name'][$i];
 $picsize =$myPic['size'][$i];
//  3:判断文件大小 2m
 if($picsize>2*1024*1024){
   echo "图片大小不能超过 2MB 请重选";
   exit;
 }
 //4:判断类型 jpg gif png
 $type = strstr($picname,'.');//截取字符串 .jpg
 //5:创建新文件名
 //time 时间戳/rand随机数/后缀名称
 $pics =time().rand(1,9999).$type;
 //6:将临时文件移到指定目录
 move_uploaded_file($myPic['tmp_name'][$i],
 "../../img/menu/subimg/".$pics);
 $ImgList[]="../../img/menu/subimg/".$pics;
 }
}
//将图片地址进行拼接
for($j=0;$j<count($ImgList);$j++){
	$html.=$ImgList[$j].'|';
}
// 将主图的文件格式进行修改
if(!empty($myMain)){
 $name= $myMain['name'];
 $size =$myMain['size'];
 //3:判断文件大小 2m
 if($size>2*1024*1024){
   echo "图片大小不能超过 2MB 请重选";
   exit;
 }
 //4:判断类型 jpg gif png
 $type = strstr($name,'.');//截取字符串 .jpg
 //5:创建新文件名
 //time 时间戳/rand随机数/后缀名称
 $pic =time().rand(1,9999).$type;
 //6:将临时文件移到指定目录
 move_uploaded_file($myMain['tmp_name'],
 "../../img/menu/subimg/".$pic);
 $main="../../img/menu/subimg/".$pic;
}
//修改数组样式  加|进行拼接
$food1Msg="";$food2Msg="";$food3Msg="";$food4Msg="";
$notesMsg="";
for($f=0;$f<count($food1);$f++){
	$food1Msg.=$food1[$f].'|';
}
for($f=0;$f<count($food2);$f++){
	$food2Msg.=$food2[$f].'|';
}
for($f=0;$f<count($food3);$f++){
	$food3Msg.=$food3[$f].'|';
}
for($f=0;$f<count($notes);$f++){
	$notesMsg.=$notes[$f].'|';
}
for($f=0;$f<count($food4);$f++){
	$food4Msg.=$food4[$f].'|';
}
//echo $food1Msg,$food2Msg,$food3Msg,$food4Msg,$notesMsg;
//echo $status;
//连接数据库，设置信息，插入到数据库中，
require_once("../init.php");
$sql=
"INSERT INTO  food_menu(user_id,subject,mainimg,img,message,level,cuisine,technics,during,cookers,food1,food2,food3,food4,note,tips,copyright,status) 
VALUES($user_id,'$sub','$main','$html','$message','$level','$cuisine','$technics','$during','$cookers','$food1Msg','$food2Msg','$food3Msg','$food4Msg','$notesMsg','$tips',$copyright,'$status')";
$result=mysqli_query($conn,$sql);
if($result==true){
	// header("Location:http://127.0.0.1/foodMask/my_recipe_pending.html"); 
	//确保重定向后，后续代码不会被执行 
	// exit; 
	echo '{"code":1,"msg":"插入成功"}';
}else{
	echo '{"code":-1,"msg":"插入失败"}';
}
?>