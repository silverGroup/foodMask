/**
 * Created by WEB-UID-JAVA on 2017/9/22.
 */
(()=>{
    //w4请求页面菜单内容
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
    /*banner   w1*/
    $(".w1_1>ul>li.i1").mouseover(function(e){
        $("li.i1 .sub").css("display","block");
    }).mouseout(function(e){
        $("li.i1 .sub").css("display","none");
    })
    $(".w1_1>ul>li.i2").mouseover(function(e){
        $("li.i2 .sub").css("display","block");
    }).mouseout(function(e){
        $("li.i2 .sub").css("display","none");
    })
    $(".w1_1>ul>li.i3").mouseover(function(e){
        $("li.i3 .sub").css("display","block");
    }).mouseout(function(e){
        $("li.i3 .sub").css("display","none");
    })
    $(".w1_1>ul>li.i4").mouseover(function(e){
        $("li.i4 .sub").css("display","block");
    }).mouseout(function(e){
        $("li.i4 .sub").css("display","none");
    })
    $(".w1_1>ul>li.i5").mouseover(function(e){
        $("li.i5 .sub").css("display","block");
    }).mouseout(function(e){
        $("li.i5 .sub").css("display","none");
    });
    $(".w2").mouseover(function(e){
        $(".w2 .control>a").css("display","block");
    }).mouseout(function(e){
        $(".w2 .control>a").css("display","none");
    })
    // 实现banner区域 实时轮播
    var bannerImgs=$("[data-load=bannerImgs]"),
        bannerInds=$("[data-load=bannerInds]"),
        LIWIDTH=990,n=0,TRAINS=300,MINT=2000;
        $.ajax({
            type:"POST",
            url:"data/index/banners.php",
            success:function(data){
                var html="";
                data.push(data[0]);
                for(var b of data){
                    html+=`
                <li class="slide" data-slide="">
                        <a title="${b.title}" href="${b.href}" target="_blank">
                            <img src="${b.img}" srcset="${b.img}">
                        </a>
                </li>
                `;
                }
                bannerImgs.html(html).css("width",LIWIDTH*data.length);
                bannerInds.append(`<li data-target="1" class="" >
                        <a href="#"></a>
                    </li>`.repeat(data.length-1))
                    .children().first().addClass("hover");
                return new Promise(resolve=>resolve);
            },
            error:function(){
                console.log("网络故障");
            }
        })
        .then(()=>{
            function moveOnce(){
                n++;
                bannerImgs.css("left",-n*LIWIDTH);
                bannerInds.children(":eq("+(n-1)+")").removeClass("hover");
                if(n==bannerImgs.children().length-1){
                    bannerInds.children().last().removeClass("hover");
                    bannerInds.children().first().addClass("hover");
                    setTimeout(function(){
                        bannerImgs.css("transition","");
                        bannerImgs.css("left",0);
                        n=0;
                        setTimeout(function(){
                            bannerImgs.css("transition","all "+TRAINS/1000+"s linear");
                        },100);
                    },TRAINS);
                }else{
                    bannerInds.children(":eq("+(n)+")").addClass("hover");
                }
            }
            var timer=setInterval(moveOnce,TRAINS+MINT);
            $(".w1").mouseover(()=>{
                clearInterval(timer);
                timer=null;
            }).mouseleave(function(){
                timer=setInterval(moveOnce,TRAINS+MINT);
            })
            bannerInds.children().click(function(e){
                e.preventDefault();
                var i=$(e.target).index();
                bannerInds.children(".hover").removeClass("hover");
                bannerInds.children(":eq("+(i)+")").addClass("hover");
                bannerImgs.css("left",-LIWIDTH*i);
            })
            $("[data-move=left]").click(function(e){
                e.preventDefault();
                if(n>0){
                    n--;
                    bannerInds.children(".hover").removeClass("hover");
                    bannerInds.children(":eq("+(n)+")").addClass("hover");
                    bannerImgs.css("left",-LIWIDTH*n);
                }else{
                    bannerImgs.css("transition","");
                    n=bannerImgs.children().length-2;
                    bannerImgs.css("left",-LIWIDTH*n);
                    bannerInds.children(".hover").removeClass("hover");
                    bannerInds.children(":eq("+(n)+")").addClass("hover");
                    setTimeout(function(){
                        bannerImgs.css("transition","all "+TRAINS/1000+"s linear");
                    },100)
                }
            })
            $("[data-move=right]").click(function(e){
                e.preventDefault();
                if(n<bannerImgs.children().length-2){
                    n++;
                    bannerInds.children(".hover").removeClass("hover");
                    bannerInds.children(":eq("+(n)+")").addClass("hover");
                    bannerImgs.css("left",-LIWIDTH*n);
                }else{
                    bannerImgs.css("transition","");
                    bannerInds.children().first().addClass("hover");
                    n=0;
                    bannerInds.children(".hover").removeClass("hover");
                    bannerInds.children(":eq("+(n)+")").addClass("hover");
                    bannerImgs.css("left",-LIWIDTH*n);
                    setTimeout(function(){
                        bannerImgs.css("transition","all "+TRAINS/1000+"s linear");
                    },100)
                }
            })
        })
        // w2区域实现左右滑动
        var i=0,LIWIDTH1=900;
         var w2Slider=$("#w2_slider>ul");
        $(".w2 .control>a.prevBtn").click((e)=>{
               e.preventDefault();
                if(i>0){
                    i--;
                    w2Slider.css("left",-LIWIDTH1*i);
                }else{
                    w2Slider.css("transition","");
                    i=3;
                    w2Slider.css("left",-LIWIDTH1*i);
                    setTimeout(function(){
                    w2Slider.css("transition","all 1s linear");
                    },100)
                }
        })
         $(".w2 .control>a.nextBtn").click((e)=>{
              e.preventDefault();
              if(i<3){
                    i++;
                    w2Slider.css("left",-LIWIDTH1*i);
                }else{
                    i=0;
                    w2Slider.css("transition","");
                    w2Slider.css("left",-LIWIDTH1*i);
                    setTimeout(function(){
                       w2Slider.css("transition","all 1s linear");
                    },100)
                }

         })
    //点击h3有on的,发送ajax请求
    $(".w4 .ui_title_wrap ").on("click","h3.on",function(e){
        var $e=$(e.target);
        var classid=0;
        if($e.text()=="新秀菜谱"){
            classid=2;
        }else if($e.text()=="一周热门"){
            classid=4;
        }else if($e.text()=="最受欢迎的家常菜"){
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
        console.log("�������");
        }
    })

    })

    /*w3*/
    $(".w3_1 .ui_title_wrap>h2").click(function(e){
        var $e= $(e.target);
        $e.parent().addClass("on");
        $e.parent().siblings().removeClass("on");
        if($e.parent().hasClass("on")) {
            if ($e.parent().index() == 1) {
                //console.log($(".w3_1").children().last());
                $(".w3_1").children().last().css("display","block");
                $(".w3_1").children(":eq(1)").css("display","none");
            } else {
                $(".w3_1").children(":eq(1)").css("display","block");
                $(".w3_1").children().last().css("display","none");
            }
        }
    })
    $(".w3_2 .ui_title_wrap>h2").click(function(e){
        var $e= $(e.target);
        $e.parent().addClass("on");
        $e.parent().siblings().removeClass("on");
        if($e.parent().hasClass("on")) {
            if ($e.parent().index() == 1) {
                //console.log($(".w3_1").children().last());
                $(".w3_2").children().last().css("display","block");
                $(".w3_2").children(":eq(1)").css("display","none");
            } else {
                $(".w3_2").children(":eq(1)").css("display","block");
                $(".w3_2").children().last().css("display","none");
            }
        }
    });
    /*ͼƬ�Ŵ�*/
    $(".big4_list li").mouseover(function(e){
       $(this).children().children().children().css("transform","scale(1.1,1.1)");
    }).mouseout(function(e){
        $(this).children().children().children().css("transform", "scale(1,1)");
    });
    /*����л�ģ�飬���� һ������ ���ܻ�ӭ�Ĳ�*/
    $(".w4 .ui_title_wrap>h3").click(function(e){
        var $e= $(e.target);
        $e.parent().addClass("on");
        $e.parent().siblings().removeClass("on");
        if($e.parent().hasClass("on")) {
            var n=$e.parent().index();
            $(".big4_list").children(":eq("+n+")").addClass("on");
            $(".big4_list").children(":eq("+n+")").siblings().removeClass("on");
        }
    })
    /*���Ż�������;�����־֮���л�*/
    $(".w6 .ui_title h3").click(function(e){
        var $e= $(e.target);
        $e.parent().addClass("on");
        $e.parent().siblings().removeClass("on");
        if($e.parent().hasClass("on")) {
            var n=$e.parent().index();
            if (n == 1) {
                $(".w6").children().last().css("display","block");
                $(".w6").children(":eq(1)").css("display","none");
            } else {
                $(".w6").children(":eq(1)").css("display","block");
                $(".w6").children().last().css("display","none");
            }
        }
    })

})();



