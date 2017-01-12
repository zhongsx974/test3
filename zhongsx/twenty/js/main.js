
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

//导航栏按钮

function show ()
{

    var oBtn = document.getElementById('btnPic');
    var oMenu = document.getElementById('btnMenu');

    oBtn.onclick = function(){
        if (oMenu.style.display == "block") {
            oMenu.style.display = "none";
        } else {
            oMenu.style.display = "block";
        };
    };
};

//菜单效果

function submenu()
{
    var oAc1=document.getElementById('anchor1');
    var oAc2=document.getElementById('anchor2');
    var oSw1=document.getElementById('show1');
    var oSw2=document.getElementById('show2');
    var timer=null;
    var timer2=null;

    oAc1.onmouseover=function ()
    {
        clearTimeout(timer);
        setTimeout(function (){
            oSw1.style.display='block';
        }, 100);
    };
    oAc1.onmouseout=function ()
    {
        timer=setTimeout(function (){
            oSw1.style.display='none';
        }, 500);
    };
    oAc2.onmouseover=function ()
    {
        clearTimeout(timer2);
        setTimeout(function (){
            oSw2.style.display='block';
        }, 100);
    };
    oAc2.onmouseout=function ()
    {
        timer2=setTimeout(function (){
            oSw2.style.display='none';
        }, 500);
    };
};


addLoadEvent(show);
addLoadEvent(submenu);

//页面加载内容缓慢出现

$(function(){
    $('#slow').hide().fadeIn(2000);
    /*$('#panel').click(function(){
     $(this).fadeIn();
     })*/
})
//导航栏显示


$(function(){
    var navH = $(".pos").offset().top;
    var navS = $(".pos2").offset().top;

    $(window).scroll(function(){
        height = $(window).scrollTop();
        /*	if(height < navS){
         $('.top').show();
         }*/
        if(height > navH){
            $('.top').show().css({position: 'fixed',}).addClass("top2");
            $('.top').find('a').attr("style","color:#7c8081;");
            $('.navBtn_pic').css({top:'30px'});
        }
        else{
            $('.top ').css({position: 'static'}).removeClass("top2");
            $('.top').find('a').attr("style","color:#fff;");
            $('.navBtn_pic').css({top:'26px'});
            $('.top .submenu , #btnMenu').find('a').attr("style","color:#7c8081;");

        };

    });
});
/*$(function(){
 //获取要定位元素距离浏览器顶部的距离
 var navH = $(".pos").offset().top;
 var navS = $("#slow").offset().top;
 alert('a');
 //滚动条事件
 $(window).scroll(function(){
 //获取滚动条的滑动距离
 var scroH = $("this").scrollTop();
 //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定
 if(scroH<10){
 $(".top").hide();
 }
 else if(scroH>=10){
 $(".top").show().css({position: 'fixed',top:0});
 }
 else{
 $(".top").css({position: 'static'});
 }
 })
 })*/
