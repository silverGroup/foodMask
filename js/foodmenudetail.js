/**
 * Created by WEB-UID-JAVA on 2017/10/28.
 * 功能模块:实现菜单详情页的功能完善:
 * 1:页面内容显示 2:评论功能实现 3回复评论功能
 */
(()=>{  
    /*插入文本编辑器*/
    $(document).ready(function() {
        $("#example2").emojioneArea();
    });
    //获取url中search的lid
    var id=location.search.split('=')[1];
    // console.log($(".comment-post-answer .emojionearea-editor"));
    // 将插入的文本编辑器默认的空格符删除
   
     //根据菜谱id 请求数据，插入到页面上
    $.ajax({
        type:"POST",
        url:"data/fooddetail/fooddetail.php",
        data:{id:id},
        success:function(data){
            $("#path").append(`<a title="${data.tag}" href="javascript:;" target="_blank">${data.tag}</a>&nbsp;&nbsp;`);
            $("h1.recipe_De_title").append(`<a href="javascript:;" id="recipe_title" title="${data.name}">${data.name}</a>`);
            $("#recipe_De_imgBox").append(`<a class="J_photo" title="${data.name}" ><span></span>
                             <img src="${data.pic}" alt="${data.name}"></a>`);
            $("#block_txt1").append(`<span class="txt_tart">“</span>${data.content}<span class="txt_end">”</span>`);
            var html="";
            for(var m of data.material){
                html+=`
                <li>
                    <span class="category_s1">
                    <a target="_blank" href="javascript:;" title="${m.mname}">
                        <b>${m.mname}</b>
                    </a>
                    </span>
                    <span class="category_s2">${m.amount}</span>
                </li>
                `;
            }
            $("#material>ul").html(html);
            $("#other>ul").append(`<li><span class="category_s1">
                                <a title="${data.preparetime}" href="javascript:;" target="_blank">
                                ${data.preparetime}</a>
                                </span>
                                  <span class="category_s2">准备时长</span>
                                </li>
                                <li><span class="category_s1">
                                <a title="${data.peoplenum}" href="javascript:;" target="_blank">${data.peoplenum}</a>
                                </span>
                                 <span class="category_s2">适合人数</span>
                                </li>
                                 <li><span class="category_s1">
                                <a title="${data.cookingtime}" href="javascript:;" target="_blank">${data.cookingtime}</a>
                                </span>
                                 <span class="category_s2">耗时</span>
                                </li>
                                `)
            $("#moheader").append(`<h3>${data.name}的做法步骤</h3>`);

            var process=""
            for(var i=0;i<data.process.length;i++){
               var p=data.process[i];
            //    console.log(data.process[i]);
                  process+=`
                  <li>
                   <div class="recipeStep_img">
                    <img src="${p.pic}" alt="${data.name}的做法步骤${i+1}">
                   </div>
                   <div class="recipeStep_word">
                   <div class="recipeStep_num">${i+1}</div>
                  ${p.pcontent}</div>
                  </li>
                `
            }
            $(".recipeStep>ul").html( process);
            $(".recipeTip").append(`<a title="${data.tag}" href="javascript:;" target="_blank">${data.tag}</a>&nbsp;&nbsp;`)
        },
        error:function(){
            console.log("网络故障");
        }
    })

    // 封装弹窗小盒子行为
    function alertBox(){
            $(".login_box").css("display","block");
            $(".login_box_ui").css("display","block");
                //用户的注册登录
                $("#m-btn").click(function(e){
                    e.preventDefault();
                    var username=$("#uname").val(), pwd=$("#m-pass").val();
                    if(username && pwd){
                        // console.log(username,pwd);
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
    // 设置评论功能 点击发送触发事件，将获取到的内容获取并且插入数据库
    var uid=sessionStorage.getItem("uid");
    $(".comment-post-answer .emojionearea-editor").html("");
    $("[data-type='add_submit']").click(function(e){
        e.preventDefault(); 
        if(uid){
            var html=$(".comment-post-answer .emojionearea-editor").html();
            var time=new Date().getTime();
            //发送ajax请求，并且返回到页面上
            $.ajax({
                type:"POST",
                data:{menuid:id,msg:html,uptime:time,user_id:uid},
                url:"data/comment/comment.php",
                success:function(data){
                    console.log(data);
                    if(data.code>0){
                        //插入成功，则刷新一下
                    location.reload();
                    }
                },
                error:function(){
                    console.log("网络故障");
                }
            })
        }else{
           alertBox(); 
        } 
    })
    function updateDateStyle(revgtime){
        var pinMsg="";
        if(revgtime){
        var timeEnd=new Date().getTime();
        var total = (timeEnd-parseInt(revgtime))/1000;
        var day = parseInt(total / (24*60*60));//计算整数天数
        var afterDay = total - day*24*60*60;//取得算出天数后剩余的秒数
        var hour = parseInt(afterDay/(60*60));//计算整数小时数
        var afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数
        var min = parseInt(afterHour/60);//计算整数分
        var afterMin = total - day*24*60*60 - hour*60*60 - min*60;//取得算出分后剩余的秒数
        var miao=afterMin/60;
        if(day>0){
           pinMsg+=day+"天前."
        }else{
            if(hour>0){
           pinMsg+=hour+"小时前."
            }else{
                if(min>0){
                  pinMsg+=min+"分钟前."
                }else{
                    if(miao<1){
                       pinMsg+="刚刚"
                    }else{
                       pinMsg+=miao+"秒前."
                    }
                }
            }   
        }
    }
    return pinMsg;
    }
    //查询数据库信息，并且将评论列表显示在页面上
    $.ajax({
        type:"POST",
        data:{menuid:id},
        url:"data/comment/commentlist.php",
        success:function(data){
            console.log(data);
            if(data){
            //查询到评论列表有信息，则将页面本身信息隐藏
            $("[data-dom='error']").css("display","none");
            //返回评论信息，并且通过 
            for(var obj of data.commentList){
                var html="";
                html=updateDateStyle(obj.uptime);
                var appendMsg=`
                <li id="${obj.mid}">
                    <div class="pic">
                        <a href="foodCenter.html?id=${obj.uid}" title="点击进入${obj.uname}的主页">
                            <img class="imgLoad" src="${obj.avatar}" width="48" height="48" style="display: block;">
                        </a>
                    </div>
                    <div class="detail">
                        <div class="tools">
                            <div class="left">
                                <a title="点击进入${obj.uname}的主页" href="" target="_blank">${obj.uname}</a>
                                <span class="subtime">${html}</span>
                            </div>
                            <div class="right"> `
                            if(obj.uid==uid){
                                appendMsg+=`<a href="javascript:;" class="J_event replyEdit" data-type="edit">编辑</a>
                                </div>
                            </div>
                        <div class="content">${obj.msg}</div>
                            <div class="comment-post comment-reply" data-dom="edit">
                                <div class="comment-post-loading"></div>
                                <i class="arrow"></i>
                                <div class="replyMsg">

                                </div>
                                <div class="comment-post-tools clear">
                                    <div class="right">
                                    <a href="javascript:;" class="tips J_event" data-type="edit_cancel">取消</a>
                                        <a href="javascript:;"  class="comment-btn J_event" data-type="edit_submit">保存</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </li>`;
                }else{
                        appendMsg+=`<a href="javascript:;" class="J_event replyEdit" data-type="reply">回复</a>
                        </div>
                    </div>
                    <div class="content">${obj.msg}</div>
                    <div class="comment-post comment-reply" data-dom="reply">
                        <div class="comment-post-loading"></div>
                        <i class="arrow"></i>
                        <div class="replyMsg">

                        </div>
                        <div class="comment-post-tools clear">
                            <div class="right">
                            <a href="javascript:;" class="tips J_event" data-type="reply_cancel">取消</a>
                            <a href="javascript:;" class="comment-btn J_event" data-type="reply_submit">回复</a>
                            </div>
                        </div>
                        </div>
                    </div>
                 </li>`;
                }
                $("[data-dom='list']").append(appendMsg);  
                }
                if(data.replyList){
                    for(var r of data.replyList){
                    var replyAppend="";
                    var html1="";
                    html1=updateDateStyle(r.replytime);
                        replyAppend=`
                        <li data-rid="${r.rid}">
                            <div class="pic">
                                <a href="foodCenter.html?id=${r.user_id}" title="点击${r.uname}进入的主页">
                                    <img class="imgLoad" src="${r.avatar}" width="48" height="48" style="display: block;">
                                </a>
                            </div>
                            <div class="detail">
                                <div class="tools">
                                    <div class="left">
                                        <a title="点击进入${r.uname}的主页" href="" target="_blank">${r.uname}</a>
                                        <span class="subtime">${html1}</span>
                                    </div>
                                    <div class="right"> `
                                    if(r.user_id==uid){
                                        replyAppend+=`<a href="javascript:;" class="J_event" data-type="edit">编辑</a>`;
                                    }else{
                                        replyAppend+=`<a href="javascript:;" class="J_event" data-type="reply">回复</a>`;
                                    }
                                     replyAppend+=`</div>
                                    </div>
                                    <div class="content">
                                        <div class="quote">
                                        <span class="q"><b>${r.com_name}</b>回复:${r.msg}</span>
                                        </div>
                                        ${r.reply}
                                    </div>
                                    <div class="comment-post comment-edit" data-dom="edit">
                                        <div class="comment-post-loading"></div>
                                        <i class="arrow"></i>
                                        <div class="replyMsg">
                                        </div>
                                        <div class="comment-post-tools clear">
                                            <div class="right">
                                            <a href="javascript:;" class="tips J_event" data-type="edit_cancel">取消</a>
                                            <a href="javascript:;"  class="comment-btn J_event" data-type="edit_submit">保存</a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </li>`
                        $("[data-dom='list']").append(replyAppend);  
                    }
                }
                 //修改页面条数为： 
                 $("[data-dom='recordCount']").html(`${data.commentList.length+data.replyList.length}条`);

            }
        },
        error:function(){
          console.log("网络故障");
        }

    }).then(()=>{
         $(".replyMsg").emojioneArea();
         $(".comment-post").addClass("off");
          // 点击回复，出现弹框，显示回复信息！并且往数据库中插入信息 往评论表中插入一条记录在msgreply
          var mid=0,CommentName=""; 
         $("[data-type='reply']").click((e)=>{
            if(uid){
                var $e=$(e.target);
                $(".replyMsg .emojionearea-editor").html("");
                $e.parents(".detail").children("[data-dom='reply']").toggleClass("off");
                mid=$e.parents("li").attr("id");
                CommentName=$e.parent().prev().children("a").text();
                // console.log(CommentName);    
            }else{
                alertBox(); 
            }
         })
        //  实现回复功能模块，提交到数据库
        $("[data-type='reply_submit']").click((e)=>{
            e.preventDefault();
             var $e=$(e.target);
            if(mid!=0){
                // console.log(mid);
            var replymsg=
            $e.parents(".comment-post-tools").prev().children(".emojionearea-editor").html();
            // $(".replyMsg .emojionearea-editor").html();
                // console.log(replymsg);
            if(replymsg){
                var replytime=new Date().getTime();
                $.ajax({
                    type:"POST",
                    url:"data/comment/commentreply.php",
                    data:{menu_id:id,user_id:uid,m_id:mid,reply:replymsg,replytime:replytime,com_name:CommentName},
                    success:function(data){
                        console.log(data);
                        if(data.code>0){
                            location.reload();
                        }
                    },
                    error:function(){
                        console.log("网络故障");
                    }
                })
            }
            }
        })
        // 点击回复取消，实现取消功能
        $("[data-type='reply_cancel']").click((e)=>{
            e.preventDefault();
            // console.log('点击取消');
            $("[data-dom='reply']").addClass("off");
        })
        // 点击编辑中的取消，实现取消功能
        $("[data-type='edit_cancel']").click((e)=>{
            e.preventDefault();
            // console.log('点击编辑中的取消');
            $("[data-dom='edit']").addClass("off");
        })     
        // 点击回复编辑，实现编辑功能
        var rid=0,comment_id=0;
        $("[data-type='edit']").click((e)=>{
            e.preventDefault();
            if(uid){
            var $e=$(e.target);
            var $Main= $e.parents(".detail").children("[data-dom='edit']");
            $Main.toggleClass("off");
            rid=$(e.target).parents("li").attr("data-rid");
            comment_id=$(e.target).parents("li").attr("id");
            }else{
                alertBox();
            }
        })
        // 点击保存，修改页面回复内容
        $("[data-type='edit_submit']").click((e)=>{
            var $e=$(e.target);
             var upMsg=$e.parents(".comment-post-tools").prev().children(".emojionearea-editor").html();
        //    $(".comment-edit .replyMsg").html();
            //  console.log(rid,comment_id,upMsg);
            //  根据rid修改数据库中，该回复内容
            if(rid>0){
                $.ajax({
                type:"POST",
                url:"data/comment/updateReplyMsg.php",
                data:{rid:rid,reply:upMsg},
                success:function(data){
                    console.log(data);
                    if(data.code>0){
                        location.reload();
                    }
                },
                error:function(){
                    console.log("网络故障");
                }
            })
        }
        if(comment_id>0){
              $.ajax({
                type:"POST",
                url:"data/comment/updateComment.php",
                data:{mid:comment_id,msg:upMsg},
                success:function(data){
                    console.log(data);
                    if(data.code>0){
                        location.reload();
                    }
                },
                error:function(){
                    console.log("网络故障");
                }
            })
        }
        })
    }) 
})()
