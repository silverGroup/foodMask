<?php
header("Content-Type:text/html;charset=UTF-8");
?>
    <!--左侧导航条-->
    <ul class="bar-left left">
        <li><a href="index.html" title="美食天下" class="top_bar_logo"><i>美食天下</i>首页</a>
        </li>
        <li><a href="foodmenu.html" title="菜谱">菜谱</a></li>
        <li><a href="foodmaterial.html" title="食材">食材</a></li>
        <li><a href="foodzhen.html" title="珍选">珍选</a></li>
        <li><a href="foodhealth.html" title="健康">健康</a></li>
        <li><a href="foodsubject.html" title="专题">专题</a></li>
        <li><a href="foodcommunity.html" title="社区">社区</a></li>
        <li><a href="foodtopic.html" title="话题">话题</a></li>
        <li><a href="foodactiviy.html" title="活动">活动</a></li>
        <li><a href="foodsearch.html" title="搜索">搜索</a></li>
        <li class="top_bar_more">
            <i></i>
            <div>
                <a href="" title="烘焙">烘焙</a>
                <a href="" title="妈妈派">妈妈派</a>
            </div>
        </li>
    </ul>
    <!--导航条右侧区-->
    <a href="phoneload.html" title="客户端" target="_blank" class="nr3">
        <img src="img/index/nr3.png" alt=""/>客户端
        <img src="img/index/msc_app.png" class="code">
    </a>
    <div class="right" id="J_top_bar_user">
        <ul>
            <li class="bar-tips bar-sign-tips" id="J_barSignTips" style="display: list-item;">
                <i class="arrow"></i>
                <b class="arrow"></b>
                <a href="javascript:;" class="close">×</a>
                签到即可参加 0元购
            </li>
            <li class="bar-link bar-item bar-reg"><a href="register.html" target="_blank">注册</a></li>
            <li class="bar-link bar-item bar-login"><a href="login.html" target="_blank">登录</a></li>
            <li class="bar-login J_down bar-item">
                <div class="bar-text">
                    <a href=""><img src="img/index/nir1.png">QQ登录</a>
                </div>
                <div class="bar-box">
                    <ul>
                        <li class="bar-box-item-0" style="line-height:14px">
                        <a href="">
                            <img width="18" height="18" src="img/index/nir2.png">
                            微博登录
                        </a>
                    </li>
                        <li>
                            <a href="">
                            <img width="18" height="18" src="img/index/nir3.png">
                            微信登录
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="bar-user J_down bar-item">
            <div class="bar-text">
            <div class="bar-text-userName" id="J_barUserName">
                <a href="foodMembercenter.html" target="_blank" title="">
                    <img alt="" class="imgLoad" src="img/user/n2.jpg" style="width:30px;height:30px">
                </a>
            </div>
            <i class="arrow"></i>
            </div>
            <div class="bar-box">
            <ul>
            <li class="bar-box-item-0 bar-box-item-fav">
            <a title="我的收藏" href="javascript:;" target="_blank">收藏</a>
            </li>
            <li class="bar-box-item-1">
            <a title="管理中心" href="javascript:;" target="_blank">管理</a></li>
            <li class="bar-box-item-2">
            <a title="私信" href="javascript:;" target="_blank" id="privately_list">私信<span>
            </span>
            </a>
            </li>
            <li class="bar-box-item-3">
            <a title="通知" href="javascript:;" target="_blank" id="my_notice_list">
            通知
            <span>
            </span>
            </a>
            </li>
            <li class="bar-box-item-4">
            <a title="退出" href="#" class="J_barExit">退出</a>
            </li>
            </ul>
            </div>
            </li>
            <li class="bar-add J_down bar-item">
                <div class="bar-text">
                    <img width="18" height="18" src="img/index/nr1.png">发布</div>
                <div class="bar-box">
                    <ul>
                        <li class="bar-box-item-0">
                            <a href="foodMembercenter.html" target="_blank" class="J_barLogin" data-toggle="modal">发菜谱</a>
                        </li><li class="bar-box-item-1">
                             <a href="foodMembercenter.html" target="_blank" class="J_barLogin" data-toggle="modal">发话题</a>
            </li>
                        <li class="bar-box-item-2">
                             <a href="foodMembercenter.html" target="_blank" class="J_barLogin" data-toggle="modal">发日志</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="bar-item bar-sign J_down" id="J_barSign">
                <a href="javascript:void(0);" class="bar-sign-text J_barLogin">
                    <img width="18" height="18" src="img/index/nr2.png">签到有礼</a>
                <div class="bar-sign-box">
                    <h3>签到<b>0</b> 天</h3>
                    <p><b>0</b></p>
                    <a target="_blank" href="foodactiviy.html">去抽奖</a>
                </div>
            </li>
        </ul>
    </div>