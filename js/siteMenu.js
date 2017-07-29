//导航主菜单，都要引用
$(".serMenu").hover(
    function() {
        $(".subMenu").show();
    },
    function(){
        $(".subMenu").hide();
    }
);
$(".pageMenu .menu").click(function(){
    $(this).siblings().removeClass("selOn");
    $(this).addClass("selOn");
});
//详情顶部分层悬浮菜单
$(window).scroll(function(){
    //$(".pageMenu").hide();
    var scrollTop=$(window).scrollTop();
    if (scrollTop> 700) {
        $(".pageMenu").css("position","fixed");
        //$(".pageMenu").fadeIn(1500);
    }
    /*else if (scrollTop>= 700 && scrollTop<935){
        $(".pageMenu li").removeClass("selOn");
        $(".pageMenu li:nth-child(1)").addClass("selOn");
    }
    else if (scrollTop>= 935 && scrollTop<1480){
        alert("ok2");
        $(".pageMenu li").removeClass("selOn");
        $(".pageMenu li:nth-child(2)").addClass("selOn");
    }
    else if (scrollTop>= 1480 && scrollTop<2384){
        $(".pageMenu li").removeClass("selOn");
        $(".pageMenu li:nth-child(3)").addClass("selOn");
    }
    else if (scrollTop>= 2384 && scrollTop<2973){
        $(".pageMenu li").removeClass("selOn");
        $(".pageMenu li:nth-child(4)").addClass("selOn");
    }
    else if (scrollTop>= 2973 && scrollTop<3600){
        $(".pageMenu li").removeClass("selOn");
        $(".pageMenu li:nth-child(5)").addClass("selOn");
    }*/
    else{
        $(".pageMenu").css("position","static");
        $(".pageMenu li").removeClass("selOn");
        $(".pageMenu li:nth-child(1)").addClass("selOn");
    }
});