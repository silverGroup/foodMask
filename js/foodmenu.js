(()=>{
    $.ajax({
        type:"POST",
        url:"data/index/indexmenu.php",
        data:{classid:2},
        success:function(data){
            console.log(data);
            var html="";
            if(data){
            for(var m of data){
                html+=`
                   <li>
                        <a title="${m.name}" href="foodmenudetail.html?id=${m.id}" target="_blank">
                            <i>
                                <img alt="${m.name}" class="imgLoad" src="${m.pic}">
                            </i>
                            <p>${m.name}</p>
                        </a>
                        <a title="${m.peoplenum}"?href="" target="_blank" class="u">${m.peoplenum}</a>
                    </li>
                `
                $(".big4_list>ul.on").html(html);
            }
            }else{
                $(".big4_list>ul.on").html(`
                <p>加载中....</p>
                <img src="img/index/loading.gif"/>
                `)
            }
        },
        error:function(){
        console.log("网络故障");
        }
    })
    $(".ui_title .ui_title_wrap>h3").click(function(e){
        console.log(e);
        var $e= $(e.target);
        $e.parent().addClass("on");
        $e.parent().siblings().removeClass("on");
        if($e.parent().hasClass("on")) {
            var n=$e.parent().index();
            $(".big4_list").children(":eq("+n+")").addClass("on");
            $(".big4_list").children(":eq("+n+")").siblings().removeClass("on");
        }
    })
       //点击h3有on的,发送ajax请求
    $(".ui_title .ui_title_wrap").on("click","h3.on",function(e){
        var $e=$(e.target);
        console.log($e);
        var classid=0;
        if($e.text()=="最新推荐"){
            classid=2;
        }else if($e.text()=="最新发布"){
            classid=4;
        }else if($e.text()=="热菜"){
            classid=3;
        }
        //w4请求页面菜单内容
         $.ajax({
        type:"POST",
        url:"data/index/indexmenu.php",
        data:{classid:classid},
        success:function(data){
            console.log(data);
            var html="";
            if(data){
            for(var m of data){
                html+=`
                   <li>
                        <a title="${m.name}" href="foodmenudetail.html?id=${m.id}" target="_blank">
                            <i>
                                <img alt="${m.name}" class="imgLoad" src="${m.pic}">
                            </i>
                            <p>${m.name}</p>
                        </a>
                        <a title="${m.peoplenum}"?href="" target="_blank" class="u">${m.peoplenum}</a>
                    </li>
                `
                $(".big4_list>ul.on").html(html);
            }
            }else{
                $(".big4_list>ul.on").html(`
                <p>加载中....</p>
                <img src="img/index/loading.gif"/>
                `)
            }
        },
        error:function(){
        console.log("网络故障");
        }
    })
    })
// 实现左右滑动
})();