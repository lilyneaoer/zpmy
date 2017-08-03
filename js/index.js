
$(function(){
    //轮播图片和链接
    var adData = [{
        id: 1,
        src: base+"/img/swf01.png",
        title: "title1",
        link: "#"
    }, {
        id: 2,
        src: base+"/img/swf02.png",
        title: "title2",
        link: "#"
    }, {
        id: 3,
        src: base+"/img/swf01.png",
        title: "title1",
        link: "#"
    }];

//根据json生成广告
    var htmlAd = "", htmlBtn = "";
    $.each(adData, function (index, obj) {
        if (index == 0) {
            htmlAd = htmlAd + "<li id='tabAutoPlay" + obj.id + "' class='tabAutoPlayChid'><a href='" + obj.link + "' target='_blank'><img title='" + obj.title + "'src='" + obj.src + "'></a></li>";
            htmlBtn = htmlBtn + "<li class='tabs'><a href='"+obj.link+"' class='tab_a tab_on' data-rel='tabAutoPlay" + obj.id + "'>" + obj.id + "</a></li>";
        }
        else {
            htmlAd = htmlAd + "<li id='tabAutoPlay" + obj.id + "' class='tabAutoPlayChid' style='display: none;'><a href='" + obj.link + "'target='_blank'><img title='" + obj.title + "'src='" + obj.src + "'></a></li>";
            htmlBtn = htmlBtn + "<li class='tabs'><a href='"+obj.link+"' class='tab_a' data-rel='tabAutoPlay" + obj.id + "'>" + obj.id + "</a></li>";
        }
    });
    $("#tab_content").html(htmlAd);
    $("#tab_Auto_Btn").html(htmlBtn);
// 绑定
    $("#tab_Auto_Btn a").powerSwitch({
        classAdd: "tab_on",
        animation: "translate",
        duration:500,
        eventType: "mouseover",
        autoTime: 3500,
        hoverStop: true,
        container: $("#tab_Auto_Play")
    });
//设置点点点及按钮水平居中
    $("#tab_Auto_Play a").css("margin-top",-$("#tab_Auto_Play a").height()/2);
    $("#tab_Auto_Btn").css("margin-left",-$("#tab_Auto_Btn").width()/2);
//控制按钮渐入渐出
    $("#roll_Box").hover(
        function () {
            $("#tab_Auto_Play a").css("opacity", "0.6");
        },
        function () {
            $("#tab_Auto_Play a").css("opacity", "0");
        });
    $("#tab_Auto_Play a").hover(
        function () {
            $(this).css("opacity", "1");
        },
        function () {
            $(this).css("opacity", "0.6");
    });
    //弹出框
    $(".iconCls").click(function(){
        $(".loginBg,#lBox1,#lBox2,#lBox3").hide();
    });
    $("#topBtnLogin").click(function(){
        $(".loginBg,#lBox1").fadeIn();
    });
    //登录表单
    $(".searchTxt,.uPhoneNum,.uID,.userYzm,.userPwd,.uNum").focus(function () {
        if($(this).val()=='请输入搜索关键词'){$(this).val("");}else{$(this).val($(this).val());}
        if($(this).val()=='请输入手机号码'){$(this).val("");}else{$(this).val($(this).val());}
        if($(this).val()=='请输入帐号'){$(this).val("");}else{$(this).val($(this).val());}
        if($(this).val()=='请输入验证码'){$(this).val("");}else{$(this).val($(this).val());}
        if($(this).val()=='请输入密码'){$(this).val("");}else{$(this).val($(this).val());}
        if($(this).val()=='图形验证码'){$(this).val("");}else{$(this).val($(this).val());}
    });
    $(".searchTxt").blur(function () {
        if($(this).val()==''){$(this).val("请输入搜索关键词");}else{$(this).val($(this).val());}
    });
    $(".uPhoneNum").blur(function () {
        if($(this).val()==''){$(this).val("请输入手机号码");}else{$(this).val($(this).val());}
    });
    $(".uID").blur(function () {
        if($(this).val()==''){$(this).val("请输入帐号");}else{$(this).val($(this).val());}
    });
    $(".uNum").blur(function () {
        if($(this).val()==''){$(this).val("图形验证码");}else{$(this).val($(this).val());}
    });
    $(".userYzm").blur(function () {
        if($(this).val()==''){$(this).val("请输入验证码");}else{$(this).val($(this).val());}
    });
    $(".userPwd").blur(function () {
        if($(this).val()==''){$(this).val("请输入密码");}else{$(this).val($(this).val());}
    });
});
//电梯
$(window).scroll(function(){
    //$(".pageMenu").hide();
    var pageWidth=$(window).width();
    var pageHeight=$(window).height();
    var fixedHeight=$(document).scrollTop();;
    $(".loginBg").css({
        "width":pageWidth,
        "height":pageHeight,
        "top":fixedHeight
    });
    var scrollTop1=$(window).scrollTop();
    if(scrollTop1>= 200){
        $(".leftBar").fadeIn(1500); // 开始淡入
    }
    /*else if(scrollTop>500||scrollTop<900){
     $(".leftBar li:nth-child(1)").addClass("act");
     }*/
    else{
        $(".leftBar").stop(true,true).fadeOut(1500); // 如果小于等于 200 淡出
    }
    $(".testInfo").html($(window).scrollTop());
});
//电梯滚动
function goshow(divClass){
    $("html,body").animate({scrollTop:$(divClass).offset().top-40},500);
}
//4个找月嫂
$(".myfuwu li").hover(
    function() {
        $(this).children("span").hide();
        $(this).children("a").show();
    },
    function(){
        $(this).children("span").show();
        $(this).children("a").hide();
});