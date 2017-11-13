/**
 * Created by Administrator on 2017/9/25.
 */
(()=>{
    //登录注册来回切换
    if(location.href.indexOf("register")>0){
        $(".loginbox_h").children().first().addClass("on");
        $(".loginbox_h").children().last().removeClass("on");
    }else {
        $(".loginbox_h").children().last().addClass("on");
        $(".loginbox_h").children().first().removeClass("on");
    }
    $(".loginbox_h").on("click", "a", function (e) {
        e.preventDefault();
        var $e=$(e.target);
        $e.addClass("on");
        $e.siblings().removeClass("on");
        if($e.index()==0){
            window.open("register.html","_blank");
        }else{
            window.open("login.html","_blank");
        }
    })
    //设置背景图片显示或者隐藏
     var timer=setInterval(()=>{
             var img=$("img.vegas-background");
             var show=$("img.show");
             //console.log(show);
             if(show.next().is("img")){
                 show.removeClass("show");
                 show.next().addClass("show")
             }else{
                 img.last().removeClass("show")
                 img.first().addClass("show");
             }
         },3000);
    //获取焦点，获取焦点时，则设置提示信息隐藏
    $("#username,#password").focus(function(){
         $("#msgError").css("display","none");
    })
    //获取用户输入的信息，验证是否通过，通过则返回index.html页面
        $("#loginbtn").click(function(e){
            e.preventDefault();
            var username=$("#username").val(),pwd=$("#password").val();
            if(username && pwd){
                //console.log(username,pwd);
                //发送ajax请求，验证是否通过
                $.ajax({
                    type:"POST",
                    url:"data/login/login.php",
                    data:{uname:username,upwd:pwd,phone:username},
                    success:function(data){
                        // console.log(data);
                        if(data.code>0){
                            sessionStorage.setItem("uname", data.uname);
                            sessionStorage.setItem("uid", data.uid);
                            sessionStorage.setItem("avatar",data.avatar);
                            //在跳转之前清除定时器
                            clearInterval(timer);
                            timer=null;
                            window.open("index.html", "_self");
                        }else{
                             $("#msgError").css("display","block");
                            $("#msgError").text("用户名或密码输入错误！请重新输入");
                        }
                    },
                    error:function(){
                        console.log("网络故障");
                    }
                })
            }else{
                  $("#msgError").css("display","block");
                 $("#msgError").text("用户名或密码不能为空");
            }
        })
        // 获取焦点时，提示信息隐藏
        // $("#uname,#upwd,#phone").focus(function(){
        //      $("#msg").css("display","none");
        // })
        // 用户注册功能 1当用户名失去焦点，显示提示信息
        $("#uname").blur(function(){
            var uname=$("#uname").val();
            $.ajax({
                type:"POST",
                url:"data/register/checkuname.php",
                data:{uname:uname},
                success:function(data){
                    if(data){
                    $("#msg").text(data.msg);
                    }
                },
                error:function(){
                    console.log("网络故障");
                }
            })
        })
        //手机号失去焦点时 验证手机号是否符合要求
        $("#phone").blur(function(){
           var number= $("#phone").val();
           var rel=/^1[3|4|5|7|8][0-9]{9}$/;
           if(!rel.test(number)){
              $("#msg").text("请输入正确的手机号");
           }else{
             $("#msg").text("手机号通过");
           }
        })
        $("#registerbtn").click(function(e){
              e.preventDefault;
              var uname=$("#uname").val();
              var number= $("#phone").val();
              var upwd=$("#upwd").val();
              if(uname&&number&&upwd){
                $.ajax({
                    type:"POST",
                    url:"data/register/register.php",
                    data:{uname:uname,upwd:upwd,phone:number},
                    success:function(data){
                        console.log(data);
                        if(data.code>0){
                            // 注册成功，跳转到登录页面
                           $("#msg").text("注册成功！1s跳转到登录界面")
                           setTimeout(function(){
                            location.href="login.html";
                           },1000)
                        }
                    },
                    error:function(){
                         console.log("网络故障");
                    }
                })
              }else{
                   $("#msg").text("注册信息不能为空");
              }
        })

})();
