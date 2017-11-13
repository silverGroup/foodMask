/**
 * Created by WEB-UID-JAVA on 2017/10/23.
 * 实现用户中心：上传图片
 * 1 实现用户上传菜谱功能 2vue实现单页面模块设计
 */
(()=>{
    var bus=new Vue();
    // 用户中心模块
    var myCenter=Vue.component('center',{
        data:function(){
            return{
                uname:sessionStorage.getItem("uname"),
                imgHeader:sessionStorage.getItem("avatar"),
                lucySign:0
            }
        },
        beforeMount:function(){
            this.$http.get('data/center/userMsg.php?uname='+this.uname)
            .then((data)=>{
                console.log(data.data);
                this.lucySign=data.data.lucysign;
                console.log(this.lucySign);
            }) 
        },
        template:`
            <div>
                <div class="space_info clear">
                <div class="pic">
                    <a href="javascript:;" target="_blank">
                        <img class="imgLoad" :src="imgHeader"  width="150" height="150">
                    </a>
                </div>
                <div class="w logo_wrap2">
                    <div class="logo_search right">
                        <form id="form_search" action="" method="post" target="_blank">
                            <div class="searchBox J_search">
                            <a href="javascript:;" title="搜索" class="search_Btn J_searchBTN right" id="search">搜索</a>
                            <input id="q" class="search_Text J_searchTxt right" data-first="off" type="text">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="detail">
                    <em>
                        <a href="javascript:;" target="_blank">{{uname}}</a>
                    </em>
                    <ul class="substatus">
                        <li>
                            <a title="成长值" href="javascript:void(0);" class="show_tip">
                                <b>{{lucySign}}</b>
                                <br>
                                成长值
                            </a>
                        </li>
                    </ul>
                    <div class="subtools">
                        <a href="javascript:;">通知
                        </a>
                        <a href="javascript:;">私信
                        </a>
                    </div>
                </div>
            </div>
            <div class="home_right mt30">
                <a title="美食天下客户端" href="javascript:;" target="_blank">
                    <img src="img/center/appc.jpg" class="imgLoad" width="300" height="120" style="display: block;">
                </a>
                <div class="ui_title mt20">
                    <div class="ui_title_wrap">
                        <h3>最近来访</h3>
                    </div>
                </div>
                <div class="ui_list_2_48 clear">
                    <ul>
                        <li>
                            <a href="javascript:;" target="_blank" title="看资料加好友哟">
                                <img src="" class="imgLoad" width="48" height="48" style="display: block;">
                                看资料加好友哟
                            </a>
                            <span>19小时前</span>
                        </li>
                    </ul>
                </div>
                <div class="ui_title mt20">
                    <div class="ui_title_wrap">
                        <h3>人气美食家</h3>
                    </div>
                </div>
                <div class="ui_list_2_48 clear">
                    <ul>
                        <li>
                            <a href="javascript:;" target="_blank" title="食·色">
                            <img src="" class="imgLoad" width="48" height="48">食·色</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="home_left mt30">
                <div class="ui_title">
                    <div class="ui_title_wrap" id="J_feed_nav">
                        <a href="javascript:void(0);" data-type="follow" class="on">我关注的动态</a>
                        <a href="javascript:void(0);" data-type="all">所有动态</a>
                        <a href="javascript:void(0);" data-type="uid" data-uid="10535736">我的动态</a>
                    </div>
                </div>
                <div class="ui_list_5 mt10" id="J_feed_wrap">
                    <div class="ui_no_data" style="display: none;">没有数据</div>
                    <ul id="J_feed_list">
                        <li>
                            <div class="subline">
                                <div class="subtime" data-time="1507947092">20分钟前</div>
                                <div class="subtitle">
                                    <a href="javascript:;" target="_blank">hb俗人</a>
                                    评论了
                                    <a href="javascript:;" target="_blank">老方小雨</a>
                                    的话题 </div>
                            </div>
                            <div class="subcontent img_120">
                                <div class="pic">
                                    <a href="javascript:;" target="_blank">
                                        <img src="" width="120" alt="老方小雨发表的话题">
                                    </a>
                                </div>
                                <div class="detail">
                                    <p>天气转凉了，就爱这口热乎乎的~~~红豆米糊
                            天气逐渐转凉，原本油润的皮肤随之开始紧绷了，同时也觉得容易口干舌燥，时不时地就想着喝水解渴。一周很快又到周末，指望着睡到自然醒，喝上一碗热乎乎的杂粮米糊，再配上一块小点心，那感觉真是非常舒服极了~~~</p>
                                    <div class="subreply"> 周末愉快[em:b:]
                                        <i class="arrow"></i>
                                        <b class="arrow"></b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="ui-loading mt20" id="J_feed_load" style="display: block;">
                    <a href="javascript:void(0);" class="">查看更多动态</a>
                </div>
            </div>
            </div>
            `
    })
    // 我的菜单
    var mymenu=Vue.component('my_menu_me',{
        template:`
        <div>
            <div id="mod_location">
                <div class="mod_location clear">
                    <div class="left">
                        <router-link v-for="(key,value) in snavList" :to="key.load">
                            <a href="javascript:;" :class="{on:isOn===value}"  @click="showOn(value)">{{key.name}}</a>
                        </router-link>
                    </div>
                    <div class="right">
                        <router-link to="/menu_add"><a class="add" href="javascript:;" target="_blank">发布新菜谱</a></router-link>
                    </div>
                </div>
            </div>
            <table></table>
            <router-view></router-view>
        </div>
        `,
        data:function(){
            return{
                snavList:[
                 {"load":"/menu_select",name:"我的菜谱"},
                 {"load":"/wait_menu",name:"待审核"},
                 {"load":"/menu_tui",name:"退稿箱"},
                 {"load":"/menu_cao",name:"草稿箱"}
                ],
                isOn:0
            }
        },
        mounted(){
            var path=this.$route.path;
            console.log(path);
            if(path=="/wait_menu"){
                this.isOn=1;
            }else if(path=="/menu_tui"){
                this.isOn==2;
            }else if(path=="/menu_cao"){
                this.isOn==3;
            }
        },
        methods:{
            showOn(index){
                this.isOn=index;
            }
        }
    })
    var mymenuselect=Vue.component("menuselect",{
        template:`
            <div class="ui_no_data">
				<p>
				   您还没有发布新菜谱噢，快点击这里
				    <router-link to="/menu_add" class="no_data_link">发布新菜谱</router-link>吧！
				</p>
			</div>
        `
    })
     var mymenutui=Vue.component("menutui",{
        template:`
            <div class="ui_no_data">
				<p>
				   您还没有退稿文件
				</p>
			</div>
        `
    })
     var mymenucao=Vue.component("menucao",{
        template:`
            <div class="ui_no_data">
				<p>
				   您还没有草稿文件
				</p>
			</div>
        `
    })
    // 菜单创建，标题名
    var menuAdd=Vue.component('menu_add',{
        template:`
              <div>
                <div id="mod_location">
                    <div class="mod_location clear">
                        <div class="left">
                         <router-link to="/my_menu" class="return"></router-link>
                        发布新菜谱
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <form action="data/center/recipe-add/" id="J_form" enctype="multipart/form-data" method="post" class="clear">
                    <div class="mr_edit mr_edit_center clear">
                    <ul>
                        <li>
                            <label class="must">菜谱名称</label><br>
                            <input name="subject" class="inputL" type="text" id="J_subject" v-model="menuTitle">
                        </li>
                    </ul>
                    <input name="submit" value="创建菜谱" class="btn1" type="button" @click="jumpToCreateMenu">
                </div>
                    <div class="mr_edit mr_edit_fixed clear">
                    <ul>
                        <li>
                            <p class="note"><a target="_blank" href="http://home.meishichina.com/space-13-do-blog-id-588885.html">如何打造一篇精华菜谱</a></p>
                        </li>
                    </ul>
                </div>
                </form>
              </div>
            `,
        methods:{
            jumpToCreateMenu:function(){
                bus.$emit('msgTitle',this.menuTitle);
                this.$router.push('/menu_edit/'+this.menuId+'|'+this.menuTitle);
            }
        },
        data:function(){
            return{
                menuId:1245,
                menuTitle:''
            }
        }
    })
    // 具体菜谱编写界面
    var menuCreate=Vue.component('menu_create',{
        beforeMount:function(){
            var arrList=this.$route.params.menuId.split("|");
            this.id=arrList[0];
            this.Title=arrList[1];
            bus.$on('msgTitle', function (msg) {
                this.Title=msg;
            })
        },
        template:`
            <div>
                <div id="mod_location">
                    <div class="mod_location clear">
                        <div class="left">
                         <router-link to="/my_menu" class="return"></router-link>
                        编辑菜谱
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <form id="J_form"  class="clear">
                    <div class="mr_edit mr_edit_center clear">
                    <ul>
                        <li>
                            <label class="must">菜谱名称</label><br>
                            <input name="subject" class="inputL" type="text" id="J_subject" :value="Title" v-model="Title">
                        </li>
                        <li>
                            <label class="must">成品图片（最多9张）</label><br>
                            <div class="J_upload">上传成品图
                            <input multiple="multiple" class="J_img" id="J_m_cover" type="file" @change="uploadMainPic($event)"
                                accept="image/png,image/gif,image/jpeg" name="files[]">
                            </div>
                            <span class="img_status" id="multi_cover_status"> </span>
                            <div id="cover" class="clear" data-listidx="0">
                            <div style="cursor: move;" id="imgPrev">
                            <a href="javascript:void(0);" class="del">删除</a>
                            <span></span>
                            <img class="imgLoad" :src="imgMain" style="display: inline-block ;background-size:cover;width: 170px;height: 170px;">
                            <input type="hidden" name="allpic" value=""></div>
                            </div>
                        </li>
                        <li>
                            <textarea class="J_input" name="message" maxlength="500" placeholder="请输入菜谱描述，最多输入500字" v-model="details">
                            </textarea>
                        </li>
                        <li class="options clear">
                            <label class="must">基本参数</label><br>
                            <div class="options_box clear">
                             <div v-for="(tmp,index) in options" @click="showDis(index)">
                                <input type="hidden" :name="tmp.name" :value="selectName[index]">
                                <a href="javascript:void(0);"><i></i></a>
                                <span :title="selectName[index]">{{selectName[index]}}</span>
                                {{tmp.value}}
                             </div>
                            </div>
                            <div class="options_item clear" >
                                <div v-show="selectList.indexOf(0)!=-1">
                                    <span v-for="(tmp,index) in options0" :data-value="index" :class="{on:selectName[0]==tmp}"
                                    @click="selectValue(tmp,0)">{{tmp}}</span>
                                </div>
                                <div v-show="selectList.indexOf(1)!=-1">
                                    <span v-for="(tmp,index) in options1" :data-value="index" :class="{on:selectName[1]==tmp}"
                                    @click="selectValue(tmp,1)">{{tmp}}</span>
                                </div>
                                <div v-show="selectList.indexOf(2)!=-1">
                                    <span v-for="(tmp,index) in options2" :data-value="index" :class="{on:selectName[2]==tmp}"
                                     @click="selectValue(tmp,2)">{{tmp}}</span>
                                </div>
                                <div v-show="selectList.indexOf(3)!=-1">
                                    <span v-for="(tmp,index) in options3" :data-value="index" :class="{on:selectName[3]==tmp}"
                                    @click="selectValue(tmp,3)">{{tmp}}</span> 
                                </div>
                                <div v-show="selectList.indexOf(4)!=-1">
                                    <span v-for="(tmp,index) in options4" :data-value="index"
                                     :class="{on:select4.indexOf(tmp)!=-1}"
                                     @click="selectValue(tmp,4)">{{tmp}}</span>
                                </div>
                            </div>
                        </li>
                        <li class="ingredient clear">
                           <blockquote class="Left">
                                    <label class="must">食材明细（主料）</label>
                                     <div>
                                        <input type="text" name="food1[]" class="zhuliao" placeholder="主料 (如：猪肉)" autocomplete="off" v-model="food1[0]">
                                        <input type="text" name="food2[]" class="yongliang" placeholder="用量(如100g)" autocomplete="off" v-model="food2[0]">
                                    </div>
                                    <div v-for="(tmp,index) in foodlist" @click="addZhuLiao(tmp)">
                                        <input type="text" name="food1[]"  class="zhuliao" v-model="food1[index+1]">
                                        <input type="text" name="food2[]" class="yongliang" v-model="food2[index+1]">
                                        <a href="javascript:void(0);" class="delete J_delete" @click="deleteZhuLiao(index)"></a>
                                    </div>
                           </blockquote>
                           <blockquote class="Right">
                                    <label>食材明细（辅料）</label>
                                    <div>
                                        <input type="text" name="food3[]" class="zhuliao" placeholder="辅料 (如：盐)" autocomplete="off" v-model="food3[0]">
                                        <input type="text" name="food4[]" class="yongliang" placeholder="用量（如10g）" autocomplete="off" v-model="food4[0]" >
                                    </div>
                                    <div  v-for="(tmp,index) in foodlist1" @click="addFuLiao(tmp)">
                                        <input type="text" name="food3[]" class="zhuliao" autocomplete="off" v-model="food3[index+1]" >
                                        <input type="text" name="food4[]" class="yongliang" autocomplete="off" v-model="food4[index+1]">
                                        <a href="javascript:void(0);" class="delete J_delete"  @click="deleteFuLiao(index)"></a>
                                    </div>
                           </blockquote>
                        </li>
                        <li class="step">
                            <label class="must">做法步骤</label>
                            <br/>
                            <div class="J_upload">批量上传
                                <input multiple="multiple" class="J_img" id="J_s_cover"  @change="uploadPicList($event)"
                                type="file" accept="image/png,image/gif,image/jpeg" name="files[]">
                            </div>
                            <span class="img_status" id="multi_step_status"></span>
                                <div id="dragsort" data-listidx="0">
                                <blockquote class="cp_block J_blockQ clear" style="cursor: move;" v-for="(tmp,index) in imgList">
                                    <div class="left addicon J_fileImag">
                                        <input type="hidden" :value="imgList[index]" name="step_img" class="J_imghidden">
                                        <input type="file" name="files[]" class="file" accept="image/png,image/gif,image/jpeg"
                                        @change="addpicList($event,index)">
                                        <p class="p1">点击上传步骤图</p>
                                        <p class="p3">（可不填）</p>
                                        <div class="div_file_img" v-show="imgList[index]">
                                        <b></b>
                                        <img class="file_img" :src="imgList[index]">
                                        </div>
                                    </div>
                                    <div class="right">
                                        <textarea class="textArea J_input" name="notes[]" v-model="notes[index]" placeholder="请输入做法说明菜谱描述，最多输入200字" maxlength="200"></textarea>
                                        <span class="J_step_num">{{index+1}}、</span> 
                                        <a href="javascript:void(0);" class="add J_addTextarea" @click="addList(index)"></a> 
                                        <a href="javascript:void(0);" class="up J_upTextarea" @click="upList(index)"></a> 
                                        <a href="javascript:void(0);" class="down J_downTextarea" @click="downList(index)"></a>
                                        <a href="javascript:void(0);" class="delete J_delTextarea" @click="deleteList(index)"></a> 
                                    </div>
                                </blockquote>
                            </div>
                        </li>
                        <li>
                            <label>小窍门</label><br>
                            <textarea name="tips" id="tips" v-model="tips" maxlength="500" placeholder="最多输入500字"></textarea>
                        </li>
                    </ul>
                    </div>
                    <div class="mr_edit mr_edit_fixed clear">
                      <ul>
                        <li class="checkbox">
                        <input type="hidden" name="copyright" :value="isCopy[0]" id="things_copyright">
                        <label class="must">原创</label>
                        <div class="things_type1 clear things_copyright">
                            <span v-for="tmp in copyrightList" :data-value="tmp.key" @click="isCopyright(tmp.key)"
                            :class="{on:isCopy[0]==tmp.key}">
                            {{tmp.value}}
                            </span>
                        </div>
                        </li>
                        <li class="checkbox eventids"></li>
                      </ul>
                      <input class="btn1"  @click="changeStatue($event,2)" id="postbtn" type="button" value="发布菜谱" data-id="0">
                      <input type="hidden"  id="postbtnMsg" name="status" :value="status">
                      <input class="btn2" id="savebtn" type="button" value="存为草稿" @click="changeStatue($event,0)" >
                      <input type="hidden" id="savebtnMsg" name="status">
                      <input type="hidden" id="user_id" name="user_id" :value="user_id">
                      <div id="save_tip" v-show="imgMain">已于{{new Date().toLocaleTimeString()}}自动保存</div>
                    </div>
                </form>
            </div>
            </div>
            `,
        data:function(){
            return{
                id:'',
                Title:'',//标题
                options:[{"name":'level',"value":'难度'},
                {"name":'cuisine',"value":'口味'},
                {"name":'technics',"value":'工艺'},
                {"name":'during',"value":'耗时'},
                {"name":'cookers',"value":'厨具'},
                ],
                selectList:[],//选择的列
                selectName:[],//选择列中的名字
                select4:[], //最后一个特殊处理
                options0:['简单','普通','高级','神级'],
                options1:['微辣','中辣', '超辣','麻辣','酸辣','酸甜','酸咸','咸鲜','咸甜',
                         '甜味','苦味','原味','清淡','五香','鱼香','葱香','蒜香','奶香','酱香',
                         '糟香','咖喱','孜然','果味','香草','怪味','咸香','甜香','麻香','其他'],
                options2:['烧','炒','爆','焖','炖','蒸','煮','拌','烤','炸','烩','溜','氽','腌',
                          '卤','炝','煎','酥','扒','熏','煨','酱','烘焙','火锅','砂锅','拔丝','生鲜',
                         '调味','技巧','煲','烙','榨','冷冻','其他'],
                options3:['十分钟','廿分钟','半小时','三刻钟','一小时','数小时','一天','数天'],
                options4:['炒锅','煮锅','平底锅','蒸锅','不粘锅','电烤箱','食物调理机','砂锅','汤锅',
                          '高压锅','电压力锅','电饭煲','焖烧锅','微波炉','搅拌机','豆浆机','电磁炉',
                          '烤炉','炖盅','瓦煲','电子瓦煲','面包机','吐司炉','酸奶机','咖啡机','打蛋器',
                          '调酒器','果冻模','奶泡机','模具锅','电饼铛','空气炸锅','榨汁机','厨师机','破壁机',
                          '养生壶','烧烤架/炉','其他'],
                file:'',//存储首图file
                files:'',//批量上传files
                imgMain:'', //首图链接
                foodlist:[1,2], 
                foodlist1:[1,2], //步骤图片链接
                imgList:[""],
                file1:'',
                copyrightList:[
                    {"key":5,"value":"独家发布于美食天下"},
                    {"key":3,"value":"首发于美食天下"},
                    {"key":1,"value":"原创作品"},
                    {"key":0,"value":"非原创作品"}
                ],
                isCopy:[], //存储用户的原创值
                user_id:sessionStorage.getItem("uid"),
                status:'', //存储状态 0草稿 2 审核 1通过
                details:'', //描述信息
                notes:[],
                tips:'',
                food1:[],
                food2:[],
                food3:[],
                food4:[],
                notes:[]
            }
        },
        methods:{
            showDis(index){
                var select =this.selectList.indexOf(index)
                if(select===-1){
                    //没有找到
                    // 先判断数据长度，如果长度>1则先清空再进行添值
                    if(this.selectList.length==0){
                        this.selectList.push(index);
                        // console.log(this.selectList);
                    }else{
                        this.selectList=[];
                        this.selectList.push(index);
                    }         
                }else{
                    //存在数组中,
                    this.selectList.splice(select,1);
                    // console.log(this.selectList);
                }  
            },
            selectValue(name,value){
                // console.log(name,value);
                // 将name,以及value插入元素中
                if(value!=4){
                    this.selectName[value]=name;
                }else{
                    this.select4.push(name);
                    if(this.selectName[value]){
                    this.selectName[value]=this.selectName[value]+','+name;
                    }else{
                     this.selectName[value]=name;
                    }
                }
                //选上是点击事件后，将其从selectlist删除
                this.selectList=[];
            },
            uploadMainPic(event){
                this.file=event.target.files[0];
                if(this.file){
                var size= this.file.size;
                var type= this.file.type;
                var name= this.file.name;
                // console.log(size,type,name);
                if(size>2*1024*1024){
                    alert("上传文件不能超过2MB");
                    return;
                }
                if(type.indexOf("image")===-1){
                    alert("格式不正确");
                    return;
                }                
                // console.log(this.file);webkitURL
                this.imgMain=window.URL.createObjectURL(this.file);
                // console.log(this.imgMain);
                }
            },
            addZhuLiao(tmp){
                if(tmp==this.foodlist.length){
                   this.foodlist.push(tmp+1);
                } 
            },
            deleteZhuLiao(index){
                this.foodlist.splice(index,1);
                this.food1.splice(index+1,1);
                this.food2.splice(index+1,1);
            },
            addFuLiao(tmp){
                 if(tmp==this.foodlist1.length){
                   this.foodlist1.push(tmp+1);
                } 
            },
            deleteFuLiao(index){
                this.foodlist1.splice(index,1);
                this.food3.splice(index+1,1);
                this.food4.splice(index+1,1);
            },
            uploadPicList(event){
                this.files=event.target.files;
                // console.log(this.files);
                if(this.files){
                    this.imgList=[];
                    for(var f of this.files){
                        var size= f.size;
                        var type= f.type;
                        if(size>2*1024*1024){
                            alert("上传文件不能超过2MB");
                            return;
                        }
                        if(type.indexOf("image")===-1){
                            alert("格式不正确");
                            return;
                        }
                        // webkitURL
                    this.imgList.push(window.URL.createObjectURL(f))
                    }
                }
                // console.log(this.imgList);
            },
            addpicList(event){
                this.file1=event.target.files[0];
                if(this.file1){
                var size= this.file1.size;
                var type= this.file1.type;
                if(size>2*1024*1024){
                    alert("上传文件不能超过2MB");
                    return;
                }
                if(type.indexOf("image")===-1){
                    alert("格式不正确");
                    return;
                }                
                // webkitURL
                this.imgList.push(window.URL.createObjectURL(this.file1));
                // console.log(this.imgList);
                }
            },
            addList(index){
                if((index+1)==this.imgList.length){
                    //当前为最后一个
                    this.imgList.push('');
                }
            },
            deleteList(index){
                this.imgList.splice(index,1);
                this.notes.splice(index,1);
            },
            upList(index){
                if(index!=0){
                    // this.imgList[index] 
                    this.imgList[index]= this.imgList.splice(index-1,1,this.imgList[index])[0];
                    this.notes[index]=this.notes.splice(index-1,1,this.notes[index])[0];
                }
               
            },
            downList(index){
                if((index+1)!=this.imgList.length){
                    this.imgList[index]= this.imgList.splice(index+1,1,this.imgList[index])[0];
                    this.notes[index]=this.notes.splice(index+1,1,this.notes[index])[0];
                }
            },
            isCopyright(key){
                var select =this.isCopy.indexOf(key);
                if(select===-1){
                    //没有找到
                    // 先判断数据长度，如果长度>1则先清空再进行添值
                    if(this.isCopy.length==0){
                       this.isCopy.push(key);
                    }else{
                        this.isCopy=[];
                        this.isCopy.push(key);
                    } 
                      console.log(this.isCopy);        
                }else{
                    //存在数组中,
                    this.isCopy.splice(select,1);
                    console.log(this.isCopy); 
                }  
            },
            changeStatue(event,num){
                event.preventDefault();
                this.status=num;
                if(!this.imgMain){
                    alert("至少上传一张主菜谱图片");
                }else if(!this.details){
                    alert("填写菜谱描述");
                }else if(this.selectName.length!=5){
                    alert("填写基本参数");
                }else if(!(this.food1&&this.food3)){
                    alert("填写食材明细信息");
                }else if(this.imgList.length<1){
                    alert("上传做法步骤图片");
                }else if(!this.notes){
                    alert("填写做法步骤");
                }else if(!this.tips){
                    alert("填写小窍门");
                }else{
                    var arr=[];
                    arr.push(this.file);
                    for(var f of this.files){
                        arr.push(f);
                    }
                    let formData=new FormData();
                    console.log(arr,this.Title,this.details,this.selectName[0],this.selectName[1],
                    this.selectName[2],this.selectName[3],this.selectName[4],this.food1,this.food2,
                    this.food3,this.food4,this.notes,this.user_id,this.status,this.isCopy[0],this.tips
                    );
                    formData.append('subject',this.Title);
                    for(var i=0;i<this.files.length;i++){
                        formData.append('files[]', this.files[i]);
                    }
                    formData.append('file', this.file);
                    formData.append('message',this.details);
                    formData.append('level',this.selectName[0]);
                    formData.append('cuisine',this.selectName[1]);
                    formData.append('technics',this.selectName[2]);
                    formData.append('during',this.selectName[3]);
                    formData.append('cookers',this.selectName[4]);
                    formData.append('food1[]',this.food1);
                    formData.append('food2[]',this.food2);
                    formData.append('food3[]',this.food3);
                    formData.append('food4[]',this.food4);
                    formData.append('notes[]',this.notes);
                    formData.append('user_id',this.user_id);
                    formData.append('status',this.status);
                    formData.append('copyright',this.isCopy[0]);
                    formData.append('tips',this.tips);
                    console.log(formData);
                    let config={
                        headers:{
                            'Content-Type':'multipart/form-data'
                        }
                    }
                    //发送http协议
                    this.$http.post('data/center/inputMsgUp.php',formData,config).then(function(res){
                        console.log(res);
                        if(res.data.code>0){
                            this.$router.push('/wait_menu');
                            // 跳转到页面审核
                        }
                    })
                }
            }
        }
    })
    // 待审核页面
    var menuWait=Vue.component('menu_wait',{
        template:`
        <div class="ui_newlist_1 get_num mt60 clear" id="J_list">
            <ul>
                <li v-for="(tmp,key) in resMsg" :data-id="tmp.mid">
                    <div class="left">
                    <div class="pic">
                    <a :title="tmp.subject" href="javascript:;">
                    <img class="imgLoad" :src="tmp.mainimg.slice(6)" width="180" height="180" style="display: block;">
                    </a>
                    </div>
                    <div class="detail">
                    <h2>
                    <a :title="tmp.subject"  href="javascript:;">{{tmp.subject}}</a>
                    </h2>
                    <p class="subcontent" style="color:red;">
                    待审核
                    </p>
                    <div class="substatus clear">
                    <span class="get_nums"></span>
                    </div>
                    </div>
                    </div>
                    <div class="right">
                        <a href="javascript:;" target="_blank">编辑</a>
                        <a class="del" href="javascript:void(0);" data-id="353139">删除</a>
                    </div>
                </li>
            </ul>
        </div>
        `,
        data:function(){
            return {
                user_id:sessionStorage.getItem("uid"),
                resMsg:[]
            }
        },
        mounted(){
            this.$http.get("data/center/getWaitMenu.php?user_id="+this.user_id).then((res)=>{
                // console.log(res.data);
                this.resMsg=res.data;
            })    
        }
    })
    new Vue({
        router:new VueRouter({
            routes:[
                {path:'',component:myCenter},
                {path:'/center',component:myCenter},
                {path:'/my_menu',component:mymenu,children:[
                    {path:'',component:mymenuselect},
                    {path:'/wait_menu',component:menuWait},
                    {path:'/menu_select',component:mymenuselect},
                    {path:'/menu_cao',component:mymenucao},
                    {path:'/menu_tui',component:mymenutui}
                ]},
                {path:'/menu_add',component:menuAdd},
                {path:'/menu_edit/:menuId',component:menuCreate} 
            ]
        }),
        el: ".w_main",
        data: {
            msg: "",
            isOn:0,
            navList:[
                {"load":"/center","name":"会员中心"},
                {"load":"/my_menu","name":"菜谱"},
                {"load":"/center","name":"话题"},
                {"load":"/center","name":"日志"},
                {"load":"/center","name":"菜单"},
                {"load":"/center","name":"收藏"},
                {"load":"/center","name":"账户设置"}
            ]
        },
        methods:{
            isShow(value){
                this.isOn=value;
            }
        }
    })
})()