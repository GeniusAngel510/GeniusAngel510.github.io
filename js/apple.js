/**
 * Created by Science2050 on 2017/3/3.
 */

//登录

$(function () {
    $("#wu2").click(function () {
        $("#sign").toggle();
        $("#deng").css("display","none");
        $("#lu").css("display","none");
    });
    $("#si2").click(function () {
        $("#deng").css("display","block");
        $("#sign").css("display","none");
    })
    ;$("#qu1").click(function () {
        $("#deng").css("display","none");
    });
    $("#ai").click(function () {
        $("#deng").css("display","none");
        $("#lu").css("display","block");
    })
    ;$("#qu2").click(function () {
        $("#lu").css("display","none");
    })
});


//下拉菜单
//
// var cai=document.getElementById("cai");
// var cuo=document.getElementById("cuo");
// var xi=document.getElementById("xian");
// cai.onclick=function () {
//     cai.style.display="none";
//     xi.style.display="block";
//     cuo.style.display="block"
// };
// cuo.onclick=function () {
//     xi.style.display="none";
//     cai.style.display="block";
//     cuo.style.display="none"
// };
//

//回顶
//
// var hui=document.getElementById("hui");
// var timer=null;
// hui.onclick = function(){
//     clearInterval(timer);
//     timer=setInterval(function(){
//         var oSt = document.documentElement.scrollTop || document.body.scrollTop;
//         var speed=Math.floor(-oSt/6);
//
//         if(document.body.scrollTop){
//             document.body.scrollTop = oSt+speed;
//         }else{
//             document.documentElement.scrollTop = oSt+speed;
//         }
//
//         if (oSt==0) {
//             clearInterval(timer);
//         }
//     },30);
// };
// var da = document.getElementById("hui");
// document.onscroll=function(){
//     if(scrollY>=3000 &&scrollY<4500){
//         da.style.display="block"
//     }else{
//         da.style.display="none"
//     }
// };
//展开

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


$(function () {
// 1/
    $("#fu_w").click(function () {
        $("#bu_t1").slideDown("1000");
        $("#fu_w").css("display", "none");
        $("#zhi_c").css("display", "block");
    });
    $("#zhi_c").click(function () {
        $("#bu_t1").slideUp("show");
        $("#fu_w").css("display", "block");
        $("#zhi_c").css("display", "none");
    });
    // 2/
    $("#fu_w2").click(function () {
        $("#bu_t2").slideDown("1000");
        $("#fu_w2").css("display", "none");
        $("#zhi_c2").css("display", "block");
    });

    $("#zhi_c2").click(function () {
        $("#bu_t2").slideUp("show");
        $("#fu_w2").css("display", "block");
        $("#zhi_c2").css("display", "none");
    });
    // 3/
    $("#fu_w3").click(function () {
        $("#bu_t3").slideDown("1000");
        $("#fu_w3").css("display", "none");
        $("#zhi_c3").css("display", "block");
    });
    $("#zhi_c3").click(function () {
        $("#bu_t3").slideUp("show");
        $("#fu_w3").css("display", "block");
        $("#zhi_c3").css("display", "none");
    });
    // 4/
    $("#fu_w4").click(function () {
        $("#bu_t4").slideDown("1000");
        $("#fu_w4").css("display", "none");
        $("#zhi_c4").css("display", "block");
    });
    $("#zhi_c4").click(function () {
        $("#bu_t4").slideUp("show");
        $("#fu_w4").css("display", "block");
        $("#zhi_c4").css("display", "none");
    });
    //开关
    $("#kai").click(function () {
        $("#med_p").slideDown("1000");
        $("#kai").css("display", "none");
        $("#guan").css("display", "block");
        $("#med_t").css("background", "white");
    });
    $("#guan").click(function () {
        $("#med_p").slideUp("show");
        $("#kai").css("display", "block");
        $("#guan").css("display", "none");
        $("#med_t").css("background", "#C6C5CD");
    });
//开关2
    $("#kai2").click(function () {
        $("#xian2").slideDown("1000");
        $("#kai2").css("display", "none");
        $("#guan2").css("display", "block");
        $("#zhan").text(" 收起产品列表 ")
    });
    $("#guan2").click(function () {
        $("#xian2").slideUp("show");
        $("#kai2").css("display", "block");
        $("#guan2").css("display", "none");
        $("#zhan").text(" 展开产品列表 ")
    })

});

//选项卡

var oTab=document.getElementById("tab2");
 var oLi=oTab.querySelectorAll("ul li");
 var oBut=oTab.querySelectorAll("button");

for (let i=0;i<oBut.length;i++){
    oBut[i].onclick=()=>{
        for (let j=0;j<oBut.length;j++){
            oBut[j].className="";
            oLi[j].className=""
        }
        oBut[i].className="active";
        oLi[i].className="act"
    }
}


//底部

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

