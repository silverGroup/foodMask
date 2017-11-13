

    /**
     * Created by WEB-UID-JAVA on 2017/10/23.
     */
(()=>{
        var bus=new Vue();
        var category=Vue.component('category',{
            template:`
        <div>
                <div class="category_sub clear">
                <h3>时令与热门</h3>
                <ul>
                    <li v-for="tmp in hotList"><a :title="tmp" href="javascript:;" target="_blank">{{tmp}}</a></li>
                </ul>
                </div>
                <div class="category_sub clear">
                <h3>肉禽类</h3>
                <b style="display: none;">共231种</b>
                <ul>
                    <li v-for="tmp in rql"><a :title="tmp" href="" target="_blank">{{tmp}}</a></li>
                </ul>
                </div>
                 <div class="category_sub clear">
                <h3>水产品类</h3>
                <b style="display: none;">共288种</b>
                <ul>
                    <li v-for="tmp in scl"><a :title="tmp" href="" target="_blank">{{tmp}}</a></li>
                </ul>
                </div>
                <div class="category_sub clear">
                <h3>蔬菜类</h3>
                <b style="display: none;">共288种</b>
                <ul>
                    <li v-for="tmp in shucailei"><a :title="tmp" href="" target="_blank">{{tmp}}</a></li>
                </ul>
                </div>
                 <div class="category_sub clear">
                <h3>果品类</h3>
                <b style="display: none;">共196种</b>
                <ul>
                    <li v-for="tmp in guopinlei"><a :title="tmp" href="" target="_blank">{{tmp}}</a></li>
                </ul>
                </div>
                <div class="category_sub clear">
                <h3>米面豆乳</h3>
                <b style="display: none;">共180种</b>
                <ul>
                    <li v-for="tmp in mmdr"><a :title="tmp" href="" target="_blank">{{tmp}}</a></li>
                </ul>
                </div>
                 <div class="category_sub clear">
                <h3>调味品</h3>
                <b style="display: none;">共180种</b>
                <ul>
                   <li v-for="tmp in tiaoweipinl"><a :title="tmp" href="" target="_blank">{{tmp}}</a></li>
                </ul>
                </div>
        </div>
        `,
            data:function(){
                return{
                    hotList:['鸡肉','鸡翅','鸡蛋','牛肉','猪肉','排骨','小龙虾','皮皮虾','螃蟹','虾','扇贝','生蚝',
                        '黄瓜','茄子','西红柿','土豆','黑木耳百搭配菜','秋葵'],
                    rql:['猪肉','排骨','里脊','猪蹄','五花肉','肋排','牛肉','牛排','肥牛','羊肉','猪肝','猪肘','火腿',
                        '香肠','培根','腊肉','肉松','整鸡','鸡肉','鸡翅','鸡腿','乌鸡','鸭肉','乳鸽','鸡蛋','鸭蛋','鸭脖','鹅肝','鹌鹑','更多'],
                    scl:['草鱼','鲤鱼','鲫鱼','带鱼','鲈鱼','黄花鱼','鳕鱼','鲅鱼','鲳鱼','鳗鱼','三文鱼','胖头鱼',
                        '罗非鱼','秋刀鱼','多宝鱼','鱼籽','鱼尾','鱼丸','小龙虾','虾','龙虾','螃蟹','大闸蟹','皮皮虾',
                        '牡蛎','扇贝','生蚝','蛤蜊','蛏子','鲍鱼','海蜇','鱿鱼','海参','海带','紫菜','更多'
                    ],
                    shucailei:['白菜','油菜','青菜','芹菜','菠菜','韭菜','大白菜','娃娃菜','芦蒿','莴笋','油麦菜','芦笋',
                        '土豆','红薯','芋头','洋葱','萝卜','山药','西红柿','藕','豆角','茄子','青椒','菜花','豇豆','秋葵',
                        '毛豆','四季豆','黄瓜','冬瓜','西葫芦','黑木耳','蘑菇','香菇','金针菇','杏鲍菇','茭白','竹笋'
                        ,'荠菜','香椿','马兰头','更多'],
                    guopinlei:['菠萝','草莓','芒果','木瓜','牛油果','百香果','栗子','花生','腰果','核桃','芝麻','莲子','枸杞',
                        '桂圆','黑芝麻','红枣','蓝莓','更多'],
                    mmdr:[
                        '糯米','小米','荞麦米','玉米','燕麦','米粉','面条','意大利面','糯米','粉红豆','绿豆',
                        '黄豆','豆腐','豆浆','腐竹','油豆腐','烤麸','豆皮','淡奶油','奶酪','酸奶','牛奶','芝士',
                        '巧克力','粉皮','粉丝','年糕','粉条','河粉','更多'
                    ],
                    tiaoweipinl:['番茄酱','番茄沙司','豆瓣酱','豆瓣','豆豉','芥末酱','蜂蜜','醪糟','酱油',
                        '鸡精','干黄酱','更多'],
                    yaoshiqita:['燕窝','阿胶','雪蛤','茯苓','党参','当归','银耳','枣','百合','黄芪','花胶','更多']
                }
            }
        });
        var rql=Vue.component('rql',{
            template:`
       <div>
         <div class="category_sub clear">
                <h3  @mouseenter="handleHover()" @mouseout="handleHover()">蛋类</h3>
                <b v-show="isHover">共{{danlei.length}}种</b>
                <ul>
                    <li v-for="tmp of danlei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                </ul>
         </div>
          <div class="category_sub clear">
                <h3   @mouseenter="handleHover()" @mouseout="handleHover()">肉类</h3>
                <b v-show="isHover">共{{roulei.length}}种</b>
                <ul>
                    <li v-for="tmp of roulei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                </ul>
         </div>
          <div class="category_sub clear">
                <h3  @mouseenter="handleHover()" @mouseout="handleHover()">禽肉类</h3>
                <b v-show="isHover">共{{qinroulei.length}}种</b>
                <ul>
                    <li v-for="tmp of qinroulei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                </ul>
         </div>
              <div class="category_sub clear">
                <h3  @mouseenter="handleHover()" @mouseout="handleHover()">野味</h3>
                <b v-show="isHover">共{{yewei.length}}种</b>
                <ul>
                    <li v-for="tmp of yewei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                </ul>
         </div>
       </div>
        `,
            data:function(){
                return {
                    danlei:[],
                    roulei:[],
                    qinroulei:[],
                    yewei:[],
                    isHover:false
                }
            },
            mounted(){
                this.$http.get('data/material/materialsearch.php')
                    .then((response)=>{
                        var list=response.data;
                        for(var i=0;i<list.length;i++){
                            var p=list[i];
                            if(p.issort=='danlei'){
                                var arr=p.title.split(',');
                                this.danlei=arr;
                            }else if(p.issort=='roulei'){
                                var arr=p.title.split(',');
                                this.roulei=arr;
                            }else if(p.issort=='qinroulei') {
                                var arr = p.title.split(',');
                                this.qinroulei=arr;
                            }else if(p.issort=='yewei'){
                                var arr = p.title.split(',');
                                this.yewei=arr;
                            }
                        }
                    })
            },
            methods:{
                handleHover(){
                    this.isHover=!this.isHover;
                }
            }

        })
        var scl=Vue.component('scl', {
            template: `
         <div>
             <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">鱼类</h3>
                    <b v-show="isHover">共{{yulei.length}}种</b>
                    <ul>
                        <li v-for="tmp of yulei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
             <div class="category_sub clear">
                    <h3  @mouseenter="handleHover()" @mouseout="handleHover()">虾类</h3>
                    <b v-show="isHover">共{{xialei.length}}种</b>
                    <ul>
                        <li v-for="tmp of xialei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
             <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">蟹类</h3>
                    <b  v-show="isHover">共{{xielei.length}}种</b>
                    <ul>
                        <li v-for="tmp of xielei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
             <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">贝类</h3>
                    <b  v-show="isHover">共{{beilei.length}}种</b>
                    <ul>
                        <li v-for="tmp of beilei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
             <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">其他水产类</h3>
                    <b v-show="isHover">共{{qitalei.length}}种</b>
                    <ul>
                        <li v-for="tmp of qitalei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
         </div>`,
            data:function(){
                return{
                    yulei:[],
                    xialei:[],
                    xielei:[],
                    beilei:[],
                    qitalei:[],
                    isHover:false
                }
            },
            methods:{
                handleHover(){
                    this.isHover=!this.isHover;
                }
            },
            mounted(){
                this.$http.get('data/material/materialsearch.php')
                    .then((response)=>{
                        var list=response.data;
                        for(var i=0;i<list.length;i++){
                            var p=list[i];
                            if(p.issort=='yulei'){
                                this.yulei=p.title.split(',');
                            }else if(p.issort=='xialei'){
                                this.xialei= p.title.split(',');
                            }else if(p.issort=='xielei') {
                                this.xielei=p.title.split(',');
                            }else if(p.issort=='yuqita'){
                                this.qitalei=p.title.split(',');
                            }else if(p.issort=='beilei'){
                                this.beilei=p.title.split(',');
                            }
                        }
                    })
            }
        })
        var shucai=Vue.component('shucai', {
        template: `
         <div>
             <div class="category_sub clear">
                    <h3  @mouseenter="handleHover()" @mouseout="handleHover()">茎叶类</h3>
                    <b v-show="isHover">共{{jingyelei.length}}种</b>
                    <ul>
                        <li v-for="tmp of jingyelei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
               <div class="category_sub clear">
                    <h3  @mouseenter="handleHover()" @mouseout="handleHover()">根茎类</h3>
                    <b v-show="isHover">共{{genjinglei.length}}种</b>
                    <ul>
                        <li v-for="tmp of genjinglei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
                <div class="category_sub clear">
                    <h3  @mouseenter="handleHover()" @mouseout="handleHover()">果实类</h3>
                    <b v-show="isHover">共{{guoshilei.length}}种</b>
                    <ul>
                        <li v-for="tmp of guoshilei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
                <div class="category_sub clear">
                    <h3  @mouseenter="handleHover()" @mouseout="handleHover()">瓜果类</h3>
                    <b v-show="isHover">共{{ guacailei.length}}种</b>
                    <ul>
                        <li v-for="tmp of  guacailei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
               <div class="category_sub clear">
                    <h3  @mouseenter="handleHover()" @mouseout="handleHover()">嫩茎、叶、花菜类</h3>
                    <b v-show="isHover">共{{hunhelei.length}}种</b>
                    <ul>
                        <li v-for="tmp of hunhelei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
               <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">菌类</h3>
                    <b v-show="isHover">共{{junlei.length}}种</b>
                    <ul>
                        <li v-for="tmp of junlei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
             </div>
         </div> `,
        data:function(){
            return{
                jingyelei:[],
                genjinglei:[],
                guoshilei:[],
                guacailei:[],
                hunhelei:[],
                junlei:[],
                isHover:false
            }
        },  methods:{
                handleHover(){
                    this.isHover=!this.isHover;
                }
            },
            mounted(){
                this.$http.get('data/material/materialsearch.php')
                    .then((response)=>{
                        var list=response.data;
                        for(var i=0;i<list.length;i++){
                            var p=list[i];
                            if(p.issort=='jingyelei'){
                                this.jingyelei=p.title.split(',');
                            }else if(p.issort=='genjinglei'){
                                this.genjinglei= p.title.split(',');
                            }else if(p.issort=='guoshilei') {
                                this.guoshilei=p.title.split(',');
                            }else if(p.issort=='guacailei'){
                                this.guacailei=p.title.split(',');
                            }else if(p.issort=='hunhelei'){
                                this.hunhelei=p.title.split(',');
                            }else if(p.issort=='junlei'){
                                this.junlei=p.title.split(',');
                            }
                        }
                    })
            }
    })
        var gp=Vue.component('gp',{
        template: `
        <div>
          <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">鲜果类</h3>
                    <b v-show="isHover">共{{xianguolei.length}}种</b>
                    <ul>
                        <li v-for="tmp of xianguolei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
          </div>
          <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">干果类</h3>
                    <b v-show="isHover">共{{ganguolei.length}}种</b>
                    <ul>
                        <li v-for="tmp of ganguolei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
          </div>
        </div>
        `,
            methods:{
                handleHover(){
                    this.isHover=!this.isHover;
                }
            },
        data:function(){
            return{
                xianguolei:[],
                ganguolei:[],
                isHover:false
            }
        }, mounted(){
                this.$http.get('data/material/materialsearch.php')
                    .then((response)=>{
                        //console.log(response.data);
                        var list=response.data;
                        for(var i=0;i<list.length;i++){
                            var p=list[i];
                            if(p.issort=='xianguolei'){
                                this.xianguolei=p.title.split(',');
                            }else if(p.issort=='ganguolei'){
                                this. ganguolei= p.title.split(',');
                            }
                        }
                    })
            }
    })
        var mml=Vue.component('mml',{
        template:`
        <div>
            <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">米类</h3>
                    <b v-show="isHover">共{{milei.length}}种</b>
                    <ul>
                        <li v-for="tmp of  milei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
            <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">面类</h3>
                    <b v-show="isHover">共{{mianlei.length}}种</b>
                    <ul>
                        <li v-for="tmp of  mianlei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
              <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">豆类</h3>
                    <b v-show="isHover">共{{doulei.length}}种</b>
                    <ul>
                        <li v-for="tmp of  doulei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
               <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">豆制品类</h3>
                    <b v-show="isHover">共{{douzhipin.length}}种</b>
                    <ul>
                        <li v-for="tmp of douzhipin"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
             <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">乳类</h3>
                    <b v-show="isHover">共{{ rulei.length}}种</b>
                    <ul>
                        <li v-for="tmp of  rulei"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
              <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">方便食品类</h3>
                    <b v-show="isHover">共{{ fabian.length}}种</b>
                    <ul>
                        <li v-for="tmp of fabian"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
            <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">其他</h3>
                    <b v-show="isHover">共{{ qita.length}}种</b>
                    <ul>
                        <li v-for="tmp of qita"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
              <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">其他</h3>
                    <b v-show="isHover">共{{qita1.length}}种</b>
                    <ul>
                        <li v-for="tmp of qita1"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>

        </div>
        `,
        data:function(){
            return{
                milei:[],
                mianlei:[],
                doulei:[],
                douzhipin:[],
                rulei:[],
                fabian:[],
                qita:[],
                qita1:[],
                isHover:false
            }
        }, 
        mounted(){
                this.$http.get('data/material/materialsearch.php')
                    .then((response)=>{
                        //console.log(response.data);
                        var list=response.data;
                        for(var i=0;i<list.length;i++){
                            var p=list[i];
                            if(p.issort=='milei'){
                                this.milei=p.title.split(',');
                            }else if(p.issort=='mianlei'){
                                this.mianlei= p.title.split(',');
                            }else if(p.issort=='doulei'){
                                this.doulei=p.title.split(',');
                            }else if(p.issort=='douzhipin'){
                                this.douzhipin=p.title.split(',');
                            }else if(p.issort=='rulei'){
                                this.rulei=p.title.split(',');
                            }else if(p.issort==' fabian'){
                                this.rulei=p.title.split(',');
                            }else if(p.issort=='miqita'){
                                this.rulei=p.title.split(',');
                            }else if(p.issort=='miqita1'){
                                this.rulei=p.title.split(',');
                            }
                        }
                    })
            },
            methods:{
                handleHover(){
                    this.isHover=!this.isHover;
                }
            }
    })
        var twp=Vue.component('twp',{
        template:`
        <div>
              <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">调味品</h3>
                    <b v-show="isHover">共{{diaoweipin.length}}种</b>
                    <ul>
                        <li v-for="tmp of diaoweipin"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
        </div>
        `,
        data:function(){
            return{
                diaoweipin:[],
                isHover:false
            }
        },mounted(){
                this.$http.get('data/material/materialsearch.php')
                    .then((response)=>{
                        var list=response.data;
                        for(var i=0;i<list.length;i++){
                            var p=list[i];
                            if(p.issort=='diaoweilei'){
                                this.diaoweipin=p.title.split(',');
                            }
                        }
                    })
            },
            methods:{
                handleHover(){
                    this.isHover=!this.isHover;
                }
            }
    })
        var ysl=Vue.component('ysl',{
        template:`
        <div>
              <div class="category_sub clear">
                    <h3 @mouseenter="handleHover()" @mouseout="handleHover()">药食及其他</h3>
                    <b v-show="isHover">共{{yaoshiqita.length}}种</b>
                    <ul>
                        <li v-for="tmp of  yaoshiqita"><a target="_blank" href="javascript:;" :title="tmp">{{tmp}}</a></li>
                    </ul>
            </div>
        </div>
        `,
            methods:{
                handleHover(){
                    this.isHover=!this.isHover;
                }
            },
        data:function(){
            return{
                yaoshiqita:[],
                isHover:false
            }
        },mounted(){
        this.$http.get('data/material/materialsearch.php')
            .then((response)=>{
                //console.log(response.data);
                var list=response.data;
                for(var i=0;i<list.length;i++){
                    var p=list[i];
                    if(p.issort=='yaoshilei'){
                        this.yaoshiqita=p.title.split(',');
                    }
                }
            })
    }
    })
        var search=Vue.component('search',{
       template:`
       <div>
            <div id="cindex_info" v-show="isShow">
                <div id="cindex_info_wrap" style="position: fixed; top: 40px; z-index: 1111; left: 216.5px;">
                    <div class="ui_title">
                        <div class="ui_title_wrap clear">
                            <h3  v-for="(key,index) in brand"  @click="goAnchor('#'+key.letter)" :class="{on:isOn==index}">
                            <a href="javascript:;"  :class="{on:isOn==index}"  @click="changeStyle(index)"  :title="key.letter" >&nbsp;{{key.letter}}&nbsp;</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
             <div class="category_sub clear" v-for="(key,value) in brand" :id="key.letter" data-letter="letter">
                    <template>
                    <h3>{{key.letter}}</h3>
                    <ul>
                        <li v-for="tmp in (key.data)">
                        <a href="javascript:;" >{{tmp}}</a>
                        </li>
                    </ul>
                   </template>
            </div>
       </div>
       `,
        data:function(){
           return{
               filter:{},
               brand:[],
               alllist:[],
               isOn:'',
               isShow:false
           }
        },mounted(){
                this.$http.get('data/material/materialsearch.php')
                    .then((response)=>{
                        var list=response.data;
                        for(var i=0;i<list.length;i++){
                            var p=list[i];
                            this.alllist.push(p.title.split(','))
                        }
                        var obj=[]
                        for(var j=0;j<this.alllist.length;j++){
                            for (var i=0;i<this.alllist[j].length; i++) {
                               obj.push({name:this.alllist[j][i]});
                            }
                        }
                        this.brand=this.pySort(obj);
                        // console.log(this.brand);
                    })
                window.addEventListener('scroll',this.handleScroll);
            },
            methods:{
                pySort:function(arr,empty){
                    var $this = this;
                    if(!String.prototype.localeCompare)
                        return null;
                     var letters = "ABCDEFGHJKLMNOPQRSTWXYZ".split('');
                    var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
                    var arrList = [];
                    for(var m =0;m<arr.length;m++){
                        arrList.push(arr[m].name);
                    }
                    var result = [];
                    var curr;
                    for(var i=0;i<letters.length;i++){
                        curr = {letter: letters[i], data:[]};
                        if(i!=26){
                            for(var j =0;j<arrList.length;j++){
                                var initial = arrList[j].charAt(0);//截取第一个字符
                                if(arrList[j].charAt(0)==letters[i]||arrList[j].charAt(0)==letters[i].toLowerCase()){   //首字符是英文的
                                    curr.data.push(arrList[j]);
                                }else if(zh[i]!='*'&&$this.isChinese(initial)){      //判断是否是无汉字,是否是中文
                                    if(initial.localeCompare(zh[i]) >= 0 &&(!zh[i+1]||initial.localeCompare(zh[i+1]) <0)) {   //判断中文字符在哪一个类别
                                        curr.data.push(arrList[j]);
                                    }
                                }
                            }
                        }else{
                            for(var k =0;k<arrList.length;k++){
                                var ini = arrList[k].charAt(0);           //截取第一个字符
                                if(!$this.isChar(ini)&&!$this.isChinese(ini)){
                                    curr.data.push(arrList[k]);
                                }
                            }
                        }
                        if(empty || curr.data.length) {
                            result.push(curr);
                            //curr.data.sort(function(a,b){
                            //    return b.localeCompare(a);       //排序,英文排序,汉字排在英文后面
                            //});
                        }
                    }
                    return result;
                },
                isChinese:function(temp){
                    var re=/[^\u4E00-\u9FA5]/;
                    if (re.test(temp)){return false;}
                    return true ;
                },
                isChar:function(char){
                    var reg = /[A-Za-z]/;
                    if (!reg.test(char)){return false ;}
                    return true ;
                },
                // 点击哪个到达使有on样式
                changeStyle(index){
                    this.isOn=index;
                },
                // 点击到哪个，则跳转到该位置
                goAnchor(selector){
                    var anchor=this.$el.querySelector(selector);
                    document.body.scrollTop=anchor.offsetTop+(anchor.offsetHeight/2);
                },
                // 到达某处显示导航条
                handleScroll(){
                    //获取偏移高度
                    var scrollTop=window.pageYOffset||document.documentElement.scrollTop||
                            document.body.scrollTop;
                    if(scrollTop>100){
                        this.isShow=true;
                    }else{
                        this.isShow=false;
                    }
                    var  item = new Array();
                    // 获取元素li的个数A-Z
                    var floors=this.$el.querySelectorAll("[data-letter='letter']");
                    for(var i=0;i<floors.length;i++){
                        var FHEIGHT=parseFloat(getComputedStyle(floors[i]).height);
                        console.log(FHEIGHT);
                        if(scrollTop>=floors[i].offsetTop&&scrollTop<floors[i].offsetTop+FHEIGHT){
                                    this.isOn=i;
                        }	
                    }
                }
            }
    })
        new Vue({
            router:new VueRouter({
                routes:[
                    {path:'',component:category},
                    {path:'/category',component:category,children:[
                    ]},
                    {path:'/rql',component:rql},
                    {path:'/scl',component:scl},
                    {path:'/shucai',component:shucai},
                    {path:'/gp',component:gp},
                    {path:'/mml',component:mml},
                    {path:'/twp',component:twp},
                    {path:'/ysl',component:ysl},
                    {path:'/search',component:search}
                ]

            }),
            el: ".category_box"
        })
        new Vue({
            router:new VueRouter({
                routes:[
                    {path:'',component:category},
                    {path:'/category',component:category},
                    {path:'/rql',component:rql},
                    {path:'/scl',component:scl},
                    {path:'/shucai',component:shucai},
                    {path:'/gp',component:gp},
                    {path:'/mml',component:mml},
                    {path:'/twp',component:twp},
                    {path:'/ysl',component:ysl},
                    {path:'/search',component:search}
                ]
            }),
            el: ".nav_wrap2",
            data: {
                isOn:'',
                listNav:[
                    {title:'首页',load:''},
                    {title:'肉禽类',load:'rql'},
                    {title:'水产品',load:'scl'},
                    {title:'蔬菜',load:'shucai'},
                    {title:'果品',load:'gp'},
                    {title:'米面豆乳',load:'mml'},
                    {title:'调味品',load:'twp'},
                    {title:'药食及其他',load:'ysl'},
                    {title:'按字母A-Z检索',load:'search'}
                ]
            },
            methods:{
                changeStyle(index){
                    this.isOn=index;
                }
            }
        })
})();
