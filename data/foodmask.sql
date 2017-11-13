SET NAMES UTF8;
DROP DATABASE IF EXISTS foodmask;
CREATE DATABASE foodmask CHARSET=UTF8;
USE foodmask;
/**创建用户信息表**/
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16),
  avatar VARCHAR(64),
  email VARCHAR(64),
  mysign VARCHAR(64),
  gender INT,                  #性别  0-女  1-男
  lucysign INT			#签到次数
  );
INSERT INTO user VALUES
(NULL,'Mike','m123456','1579051192','img/user/n2.jpg','','',1,0),
(NULL,'Mary','123456','15770591192','img/user/n2.jpg','','',0,1),
(NULL,'linda','l123456','15740591192','img/user/n2.jpg','','',0,1);

/**创建首页信息轮播图**/
CREATE TABLE index_carousel(
 cid INT PRIMARY KEY AUTO_INCREMENT,
 img VARCHAR(128),
 title VARCHAR(128),
 href VARCHAR(128)
);
INSERT INTO index_carousel VALUES
(NULL,'img/index/banner1.jpg','秋天总有一份对桂花的执念','foodsubject.html/guihuadezuofa'),
(NULL,'img/index/banner2.jpg','“素食”甜,迎接最美秋天','foodsubject.html/qiujisushitianpin'),
(NULL,'img/index/banner3.jpg','秋季补水护肤,想美趁早_秋季补水护肤_秋季如何护肤补水','foodsubject.html/qiujibushui'),
(NULL,'img/index/banner4.jpg','秋风响,蟹脚痒','foodsubject.html/dazhaxiezuofadaquan'),
(NULL,'img/index/banner5.jpg','撒椒','foodsubject.html/sajiao'),
(NULL,'img/index/banner6.jpg','地下果:长在地下的精灵们','foodsubject.html/dixiaguo');


/**用户的收货信息**/
CREATE TABLE fd_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  postcode CHAR(6)	      #邮编
);
/**菜谱表单制作**/
CREATE TABLE  food_menu(
mid INT PRIMARY KEY AUTO_INCREMENT,   
user_id INT,                    #关联的用户编号
subject VARCHAR(32),		#菜谱名称
img VARCHAR(128),		#菜谱成品图
message VARCHAR(128),		#菜谱描述信息
level INT,			#难度
cuisine INT,			#口味
technics INT,			#工艺
during INT,			#耗时
cookers INT,		#厨具
food1 VARCHAR(64),		#主食材明细
food2 VARCHAR(64),		#主食材数量
food3 VARCHAR(64),		#辅料明细
food4 VARCHAR(64),		#辅料数量
note VARCHAR(500),		#食材做法
tips VARCHAR(128),		#食材技巧
copyright INT,			#是否原创
fenlei VARCHAR(32),             #所属分类
status INT			#所属状态，0草稿还是菜谱正文1,审核状态2
);
INSERT INTO food_menu VALUES
(NULL,1,'栗子焖鸡翅','img/menu/lizimenji.jpg|img/menu/subimg/lizimenji01.jpg|img/menu/subimg/lizimenji02.jpg|img/menu/subimg/lizimenji03.jpg|img/menu/subimg/lizimenji04.jpg|img/menu/subimg/lizimenji05.jpg|img/menu/subimg/lizimenji06.jpg|img/menu/subimg/lizimenji07.jpg|img/menu/subimg/lizimenji08.jpg|img/menu/subimg/lizimenji09.jpg|img/menu/subimg/lizimenji10.jpg|img/menu/subimg/lizimenji11.jpg',
'秋天是吃板栗的季节。板栗养胃健脾，补肾强筋。营养非常丰富，是有名的肾果。有“干果之王”的美称。这次做了一道板栗焖鸡翅和大家分享！',
1,9,4,3,'1','鸡翅中|板栗|香菇|胡萝卜','250克|适量|几朵|半根','葱|生抽|老抽|料酒|胡椒粉|糖|鸡精|盐','适量|2匙|1匙|适量|少许|半勺|少许|少许',
'栗子洗净，在栗子鼓出一面横切一刀。|锅中加水，没过栗子。大火煮开，再转小火。煮至水干。捞出栗子趁热剥皮。|香菇、鸡翅分别焯一下，过凉备用。|鸡翅从中间剁开，一分为二。香菇切块。鸡翅可以不剁，我是为了食材大小均匀、整齐。|胡萝卜切滚刀块。板栗剥好，葱姜切片。|锅中加少许油，煸炒鸡翅。|加葱姜炒出香味。|加料酒、生抽、老抽、糖、盐、鸡精、胡椒粉调味。|加板栗、香菇、胡萝卜翻炒。|加开水焖煮一会，水量与食材平齐。|成品。煮至汤汁见干，关火。',
'这道菜鸡翅可以换成其他肉类。','5','热菜|家常菜|私房菜|午餐|晚餐',1),
(NULL,2,'你未见过的山楂酱','img/menu/shanzhajiang.jpg|img/menu/subimg/shanzhajiang01.jpg|img/menu/subimg/shanzhajiang02.jpg|img/menu/subimg/shanzhajiang03.jpg|img/menu/subimg/shanzhajiang04.jpg|img/menu/subimg/shanzhajiang05.jpg|img/menu/subimg/shanzhajiang06.jpg|img/menu/subimg/shanzhajiang07.jpg|img/menu/subimg/shanzhajiang08.jpg|img/menu/subimg/shanzhajiang09.jpg|img/menu/subimg/shanzhajiang10.jpg|img/menu/subimg/shanzhajiang11.jpg',
'未添加一滴水的山楂酱。',
1,6,6,5,'35','山楂','500克(去完核)','冰糖粉|柠檬','50g|半个',
'山楂洗净；|去核去蒂；|加冰糖粉搅拌均匀，腌制数小时（我上午10点搞定，放冰箱冷藏，下午5点拿出来），上蒸锅大火蒸15分钟，晾凉；|放破壁机，加上那半个柠檬压出的汁，破壁搅拌；|成品，是不是感觉不太对劲哈，红色看不到了... ...|装瓶。',
'破壁机的力量太大了，第一次见这个颜色的山楂酱，味道倒是一样酸甜，只是感觉怪怪的哈。',5,'早餐|家常菜|自制酱料',1);






