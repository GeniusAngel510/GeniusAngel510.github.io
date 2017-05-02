/**
 * Created by Science2050 on 2017/3/8.
 */

//导航
$(document).ready(function () {
    $("#cai").click(function () {
        $("#xian").slideDown("1000");
        $("#cai").css("display", "none");
        $("#cuo").css("display", "block")
    });
    $("#cuo").click(function () {
        $("#xian").slideUp("show");
        $("#cai").css("display", "block");
        $("#cuo").css({display: "none"})
    })
});

//滚轮
var div = document.getElementById("aside");
document.onscroll=function(){
    if(scrollY>=100 &&scrollY<3000){
        div.style.display="block"
    }else{
        div.style.display="none"
    }
};



//滚动监听

// /			把每一层楼距离顶部的距离存起来
var arr = [];
var aside_div = document.getElementById("container").children;
var aside_a = document.getElementById("jt").children;
for(var n=0;n<aside_div.length;n++){
    var top1 = aside_div[n].offsetTop;
    arr.push(top1);
}
arr.push(document.body.offsetHeight);	// 最后存一下整个页面的高度
console.log(arr);

//			滚轮
var num = 0;
window.onscroll=( function(){
//				1、获取滚动条的高度
    var h = document.documentElement.scrollTop || document.body.scrollTop;
//				2、和每一个色块的高度进行判断
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=h && h<arr[i+1]){
            if(num === i){ return; }
            num = i;					// 存储现在的下标
            break;
        }
    }
//				3、如果满足那么左边跳转
    for(var j=0;j<aside_a.length;j++){
        aside_a[j].className = "";
    }
    aside_a[num].className = "active";
});

//			点左边
for(var i=0;i<aside_a.length;i++){
    aside_a[i].index = i;
    aside_a[i].onclick = function(){
        for(var j=0;j<aside_a.length;j++){
            aside_a[j].className = "";
        }
        this.className = "active";
        if(document.body.scrollTop){
            document.body.scrollTop = arr[this.index];
        }else{
            document.documentElement.scrollTop = arr[this.index];
        }
    }
}


// 底部


$ (function () {

    $(".link1").click(function () {
        $ (".menu1").fadeToggle(1000)
    });
    $(".link2").click(function () {
        $ (".menu2") .fadeToggle(1000)
    });
    $(".link3").click(function () {
        $ (".menu3") .fadeToggle(1000)
    });
    $(".link4").click(function () {
        $ (".menu4") .fadeToggle(1000)
    });
    $(".link5").click(function () {
        $ (".menu5").fadeToggle(1000)
    });
    $(".link6").click(function () {
        $ (".menu6").fadeToggle(1000)
    });
    $(".link7").click(function () {
        $ (".menu7").fadeToggle(1000)
    });

});