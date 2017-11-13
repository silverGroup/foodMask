/**
 * Created by WEB-UID-JAVA on 2017/10/18.
 */
(function(){
    //导入头部
    $("#J_top_bar").load("data/header.php",function(){
        /*头部鼠标悬停时设置display为block*/
        $(".top_bar_more").mouseover(function(){
            $(".top_bar_more>div").css("display","block");
        }).mouseout(function(){
            $(".top_bar_more>div").css("display","none");})
        $(".right .bar-login").mouseover(function(){
            $(".bar-login .bar-box").addClass("on");
        }).mouseout(function(){
            $(".bar-login .bar-box").removeClass("on");
        })
        $(".right .bar-add").mouseover(function(){
            $(".bar-add .bar-box").addClass("on");
        }).mouseout(function(){
            $(".bar-add .bar-box").removeClass("on");
        })
        /*判断用户名和用户id是否存在*/
        var uname=sessionStorage.getItem("uname");
        var uid=sessionStorage.getItem("uid");
        var avatar=sessionStorage.getItem("avatar");
        //console.log(uname,uid,avatar);
        if(uname&&uid){
            $(".bar-login ,.bar-link").css("display","none");
            //修改注册登录样式为个人头像样式
            $(".bar-user").css("display","block");
            //修改签到有礼位置，当天记录签到次数每点击一次，增加一次
            //鼠标悬停在签到上，就盒子下拉
            $("#J_barSign").mouseover(function(){
                $(".bar-sign-box").css("display","block");
            }).mouseout(function(){
                $(".bar-sign-box").css("display","none");
            })
        }else{
            $(".bar-sign-box").css("display","none");
        }
        //判断用户名和用户id是否存在，如果存在，则进行判断是否已签到
        if(uname&&uid) {
            //有账户则进行签到操作 无账户密码则进行跳转到登录页面
            //查询数据库中的签到时间
            var lucySign=0;
            $.ajax({
                type: "POST",
                url: "data/header/mysignTag.php",
                data: {uid: uid},
                success: function (data) {
                    var timeEnd = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;
                    var timeBegin = new Date(new Date().toLocaleDateString()).getTime();
                    if (data.signtime > timeBegin && data.signtime < timeEnd){
                        //表示已签到
                        $(".bar-sign-text").html(`<img width="18" height="18" src="img/index/nr2.png">已签到`);
                        lucySign += 1;
                        $(".bar-sign-box>h3>b").html(lucySign);
                        //记录签到次数
                        $(".bar-sign-box>p>b").html(`${data.lucysign}`);
                    }
                },
                error: function () {
                    console.log("网络故障");
                }
            })
        }
        //点击签到处，即可签到
        $(".bar-sign-text").click(function(){
            var lucySign=0;
            if(uname&&uid){
                //有账户则进行签到操作 无账户密码则进行跳转到登录页面
                //查询数据库中的签到时间
                $.ajax({
                    type:"POST",
                    url:"data/header/mysignTag.php",
                    data:{uid:uid},
                    success:function(data){
                        var timeEnd=new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1;
                        var timeBegin=new Date(new Date().toLocaleDateString()).getTime();
                        if(data.signtime>timeBegin && data.signtime<timeEnd){
                            //表示已签到
                            $(".bar-sign-text").html(`<img width="18" height="18" src="img/index/nr2.png">已签到`);
                            lucySign+=1;
                            $(".bar-sign-box>h3>b").html(lucySign);
                            //记录签到次数
                            $(".bar-sign-box>p>b").html(`${data.lucysign}`);
                        }else{
                            //未签到
                            lucySign+=1;
                            //给数据库插入数据
                            var time=new Date().getTime();
                            console.log(lucySign);
                            $.ajax({
                                type:"POST",
                                url:"data/header/mySignAdd.php",
                                data:{lucysign:lucySign,uid:uid,signtime:time},
                                success:function(data){
                                    console.log(data);
                                    $(".bar-sign-text").html(`<img width="18" height="18" src="img/index/nr2.png">已签到`);
                                    $(".bar-sign-box>h3>b").html(lucySign);
                                    $(".bar-sign-box>p>b").html(`${data.lucysign}`);
                                    if($(".bar-sign-box>h3>b").html()==1){
                                        $(".bar-sign-text").unbind("click");
                                    }
                                },
                                error:function(){
                                    console.log("网络故障");
                                }
                            })
                        }
                    },
                    error:function(){
                        console.log("网络故障");
                    }
                })
            }else{
                $(".login_box").css("display","block");
                $(".login_box_ui").css("display","block");
                //用户的注册登录
                $("#m-btn").click(function(e){
                    e.preventDefault();
                    var username=$("#uname").val(), pwd=$("#m-pass").val();
                    if(username && pwd){
                        console.log(username,pwd);
                        //发送ajax请求，验证是否通过
                        $.ajax({
                            type:"POST",
                            url:"data/login/login.php",
                            data:{uname:username,upwd:pwd,phone:username},
                            success:function(data){
                                console.log(data);
                                if(data.code>0){
                                    sessionStorage.setItem("uname", data.uname);
                                    sessionStorage.setItem("uid", data.uid);
                                    sessionStorage.setItem("avatar",data.avatar);
                                    location.href="index.html"
                                    window.open("index.html", "_self");
                                }else{
                                    $(".msg_waring").html("用户名或密码输入错误！");
                                    $(".msg_waring").css("display","block");
                                }
                            },
                            error:function(){
                                console.log("网络故障");
                            }
                        })
                    }else{
                        $(".msg_waring").html("用户名或密码不能为空");
                        $(".msg_waring").css("display","block");
                    }
                })
                //按x则显示为none
                $(".head_text>span>a").click(function(e){
                    e.preventDefault();
                    $(".login_box").css("display","none");
                    $(".login_box_ui").css("display","none");
                })
            }
        })
        //发菜谱添加点击事件
        $("[data-toggle='modal']").click(function(e){
            e.preventDefault();
            if(uname&&uid){
                //有账户则进行页面跳转任务 无账户密码则进行跳转到登录页面
                location.href="foodMembercenter.html";
            }else{
                $(".login_box").css("display","block");
                $(".login_box_ui").css("display","block");
                //用户的注册登录
                //获取用户输入的账号密码
                $("#m-btn").click(function(e){
                    e.preventDefault();
                    var username=$("#uname").val(), pwd=$("#m-pass").val();
                    if(username && pwd){
                        console.log(username,pwd);
                        //发送ajax请求，验证是否通过
                        $.ajax({
                            type:"POST",
                            url:"data/login/login.php",
                            data:{uname:username,upwd:pwd,phone:username},
                            success:function(data){
                                console.log(data);
                                if(data.code>0){
                                    sessionStorage.setItem("uname", data.uname);
                                    sessionStorage.setItem("uid", data.uid);
                                    sessionStorage.setItem("avatar",data.avatar);
                                    location.href="index.html"
                                    window.open("index.html", "_self");
                                }else{
                                    $(".msg_waring").html("用户名或密码输入错误！");
                                    $(".msg_waring").css("display","block");
                                }
                            },
                            error:function(){
                                console.log("网络故障");
                            }
                        })
                    }else{
                        $(".msg_waring").html("用户名或密码不能为空");
                        $(".msg_waring").css("display","block");
                    }
                })
                //按x则显示为none
                $(".head_text>span>a").click(function(e){
                    e.preventDefault();
                    $(".login_box").css("display","none");
                    $(".login_box_ui").css("display","none");
                })
            }
        })


        //悬停在用户头像上，下拉列表显示
        $(".bar-user").mouseover(function(){
            $(".bar-user  .bar-box").addClass("on");
        }).mouseout(function(){
            $(".bar-user  .bar-box").removeClass("on");
        })
        //点击退出，清除session记录并且刷新页面内容，将用户信息隐藏，登录显示
        $(".J_barExit").click((e)=>{
            e.preventDefault();
            //清除
            sessionStorage.clear();
            //刷新页面
            window.location.reload();
        })
        //删除提示信息，用户签到信息
        $(".close").click(function(){
            $("#J_barSignTips").css("display","none");
        })
        $(".top-bar .nr3").mouseover(function(){
            $(".code").css("display","block");
        }).mouseout(function(){
            $(".code").css("display","none");
        })
    })



    //导入尾部
    $("#footer").load("data/footer.php");

})();