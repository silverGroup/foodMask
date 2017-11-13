(()=>{    
// 实现搜索框功能
    Vue.component('my-component', {
        template: `
        <div>    
            <div class="w clear search_nav">
                <div class="nv">
                    <a class="on" href="index.html">综合</a>
                    <a href="foodmenu.html">菜谱</a>
                    <a href="foodmaterial.html">食材</a>
                    <a href="foodsubject.html">专题</a>
                    <a href="foodtopic.html">日志</a>
                    <a href="foodMembercenter.html">会员</a>
                </div>
                <form id="form_search" action="" method="post">
                <div class="searchBox J_search">
                    <input type="text" id="q" class="search_Text J_searchTxt"  v-model="uinput" :value="uinput" autocomplete="off">
                    <a href="javascript:;" title="搜索" class="search_Btn J_searchBTN" id="search" @click="selectkey">搜 索</a>
                </div>
                </form>
            </div>
            <div class="wrap">
                <div class="w clear main">
                    <div class="space_left">
                        <div class="arinfo clear">
                            <div class="mo">
                                <h2>流行与排行</h2>
                            </div>
                            <ul class="s_left">
                                <li v-show="menuList.length==0">
                                    <a href="javascript:;" title="你见过真正的美腿吗？(☆＿☆) " target="_blank">
                                    <img class="imgLoad" src="http://i3.meishichina.com/attachment/magic/2017/11/08/20171108151010732574913.jpg@!c80" width="60" height="60" style="display: block;"></a>
                                    <a href="javascript:;" title="你见过真正的美腿吗？(☆＿☆) " target="_blank">你见过真正的美腿吗？(☆＿☆) </a>
                                    <p>菜单 | 懒人必备火腿肠美味</p>
                                </li>
                                <li v-for="(tmp,index) in menuList" v-show="index<10">
                                    <a :href="'foodmenu.html?id='+tmp.id" :title="tmp.name" target="_blank">
                                        <img class="imgLoad" :src="tmp.pic" width="60" height="60" style="display: block;">
                                    </a>
                                    <a :href="'foodmenudetail.html?id='+tmp.id" :title="tmp.name" target="_blank">{{tmp.name}}</a>
                                    <p>菜单 | {{tmp.tag}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="space_right" style="position: static;top:20px;left:869.5px">
                        <div class="mo mt10">
                            <h2>大家都在搜</h2>
                        </div>
                        <ul class="s_right">
                            <li v-for="tmp in listNav">
                            <a href="javascript:;"  @click="select(tmp)">{{tmp}}</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `,
         data:function(){
             return{
                uinput:"",
                listNav:['白菜','土豆','早餐','红烧肉','汤','排骨','土豆','茄子','南瓜','虾','豆腐'],
                menuList:[],
                listNum:[]
             }
        },
        methods:{
            select(key){
                this.uinput=key;
                var num1=100;
                // this.listNum=[];
                this.$http.post("data/search/search.php?keyword="+key+"&num="+num1)
                .then((res)=>{
                    console.log(res); 
                    this.menuList=res.data;
                    // for(var i;i<Math.ceil(this.menuList.length/10);i++){
                    //     this.listNum.push(i);
                    // }
                    // console.log(this.listNum);
                })
            },
            selectkey(){
                var num=100;
                this.listNum=[];
                console.log(this.uinput);
                this.$http.post("data/search/search.php?keyword="+this.uinput+"&num="+num)
                .then((res)=>{
                    // console.log(res); 
                    this.menuList=res.data;
                    // for(var i;i<Math.ceil(this.menuList.length/10);i++){
                    //     this.listNum.push(i);
                    // }
                    // console.log(this.listNum);
                })
            }
        }
    })
    new Vue({
        el:"#container",
        data:{
            
        }
       
    })

//
// 实现分页功能



})()