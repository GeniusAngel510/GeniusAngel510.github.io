;(function ($) {
    $.extend({
        edit:function () {
            
        }
    })
})(jQuery);


// / 2-01
// var con_2 = document.getElementById("con-b");
var container_2_01 = document.getElementById("main-2-01");

var resizeContainer_2_01 = function () {
    // container_2.style.width = window.innerWidth+"px";
    container_2_01.style.width = con_2.clientWidth + "px";
//        container_2.style.height = window.innerHeight+"px";
    container_2_01.style.height = con_2.clientHeight + 'px';
};


resizeContainer_2_01();
var myChart_2_01 = echarts.init(container_2_01);


var option_2_01 = {
    /* title: {
         // text: '数值',
         textStyle: {
             fontSize: '15',
         }
     },*/
    tooltip: {
        trigger: 'axis'
    },
    //代表x轴，这里type类型代表字符
    xAxis: [{
        type: 'category',
        boundaryGap: false,//这里表示是否补齐空白
        'name':'时间', //名称
        data: ['10月1日', '10月15日', '11月1日', '11月15日', '12月1日', '12月15日', '']
    }],
    //代表y轴，这里type类型代表num类型
    yAxis: [{

        'type': 'value',
        'name':'数值', //名称
        'max': 2000,
//            'min':0,
//            'scale':'true',
        //分成几段
        'splitNumber': 4,
        'boundaryGap': true,  // x的距离
        'axisLabel': {	//字体
//                margin: 20,
            textStyle: {
                fontStyle: 'oblique',
                fontWeight: 800,
                fontSize: '15px',  //0.39rem
            }
        }


    }],
    //图表类型，type表示按照什么类型图表显示，line代表折线，下面的内容与
    //legend一一对应
    series: [

        {
            // name: '月采购峰值',
            type: 'line',


            smooth: true,
            itemStyle: {
                normal: {
                    //面积颜色
                    areaStyle: {
                        type: 'default',
                        //                        面积颜色
                        //    color:['#F08F8E'],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(183, 217, 255)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 255, 255)'
                        }])
                    },

                    color: '#59A7FF', //圆点颜色
//                        线条颜色
                    lineStyle: {
                        color: '#59A7FF'
                    }

                }
            },
            data: [1400, 1800, 1000, 1300, 1200, 1000, 500]
        }]
};
//配置图表设置并读取
//    myChart.setOption(option);

myChart_2_01.setOption(option_2_01);
//自适应屏幕


window.addEventListener("resize", function () {

    resizeContainer_2_01();
    myChart_2_01.resize();


});