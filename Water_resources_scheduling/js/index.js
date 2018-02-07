$(function () {

    // $('.cur').each(function (m) {
    //             // console.log($(this).index())
    //
    // });
    $('.con_b-left').on('change','.con_b-r',function () {
       //  var ss = $(this).children('option:selected').val();
       // console.log(ss)
        var s = $(this).children('option:selected');
       console.log(s.index());

        $('#con-t').find('.ruc').eq(s.index()).show().siblings().hide()

    });

    // 右边
    $('.con_b-right').on('change','.con_b-r',function () {
        //  var ss = $(this).children('option:selected').val();
        // console.log(ss)
        var s = $(this).children('option:selected');
        console.log(s.index());

        $('#con-b').find('.im').eq(s.index()).show().siblings().hide()

    });

});

/*图表*/

// 1
var con_1 = document.getElementById("con-t");
var container_1 = document.getElementById("main-1");

var resizeContainer_1 = function () {
//        container_3.style.width = window.innerWidth+"px";
    container_1.style.width = con_1.clientWidth + "px";
//        container.style.height = window.innerHeight+"px";
    container_1.style.height = con_1.clientHeight + 'px';
};


resizeContainer_1();
var myChart_1 = echarts.init(container_1);
option_1 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'center',
        bottom: 'bottom',
        data: ['管理站一', '管理站二', '管理站三']
    },
    series: [
        {
            color: ['#4BA0FF', '#FF7B8C', '#FFCD2F'],
            name: '用水占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 55, name: '管理站一'},
                {value: 26, name: '管理站二'},
                {value: 24, name: '管理站三'},

            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_1.setOption(option_1);
// 01
var con_01 = document.getElementById("con-t");
var container_01 = document.getElementById("main-01");

var resizeContainer_01 = function () {
//        container_3.style.width = window.innerWidth+"px";
    container_01.style.width = con_01.clientWidth + "px";
//        container.style.height = window.innerHeight+"px";
    container_01.style.height = con_01.clientHeight + 'px';
};


resizeContainer_01();
var myChart_01 = echarts.init(container_01);
option_01 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'center',
        bottom: 'bottom',
        data: ['管理站一', '管理站二', '管理站三']
    },
    series: [
        {
            color: ['#4BA0FF', '#FF7B8C', '#FFCD2F'],
            name: '用水占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 50, name: '管理站一'},
                {value: 25, name: '管理站二'},
                {value: 25, name: '管理站三'},

            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_01.setOption(option_01);

// 01
var con_02 = document.getElementById("con-t");
var container_02 = document.getElementById("main-02");

var resizeContainer_02 = function () {
//        container_3.style.width = window.innerWidth+"px";
    container_02.style.width = con_02.clientWidth + "px";
//        container.style.height = window.innerHeight+"px";
    container_02.style.height = con_02.clientHeight + 'px';
};


resizeContainer_02();
var myChart_02 = echarts.init(container_02);
option_02 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'center',
        bottom: 'bottom',
        data: ['管理站一', '管理站二', '管理站三']
    },
    series: [
        {
            color: ['#4BA0FF', '#FF7B8C', '#FFCD2F'],
            name: '用水占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 50, name: '管理站一'},
                {value: 20, name: '管理站二'},
                {value: 30, name: '管理站三'},

            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_02.setOption(option_02);
// 03
// var con_1 = document.getElementById("con-t");
var container_03 = document.getElementById("main-03");

var resizeContainer_03 = function () {
//        container_3.style.width = window.innerWidth+"px";
    container_03.style.width = con_1.clientWidth + "px";
//        container.style.height = window.innerHeight+"px";
    container_03.style.height = con_1.clientHeight + 'px';
};


resizeContainer_03();
var myChart_03 = echarts.init(container_03);
option_03 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'center',
        bottom: 'bottom',
        data: ['管理站一', '管理站二', '管理站三']
    },
    series: [
        {
            color: ['#4BA0FF', '#FF7B8C', '#FFCD2F'],
            name: '用水占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 30, name: '管理站一'},
                {value: 20, name: '管理站二'},
                {value: 50, name: '管理站三'},

            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_03.setOption(option_03);
// 2
var con_2 = document.getElementById("con-b");
var container_2 = document.getElementById("main-2");

var resizeContainer_2 = function () {
    // container_2.style.width = window.innerWidth+"px";
    container_2.style.width = con_2.clientWidth + "px";
//        container_2.style.height = window.innerHeight+"px";
    container_2.style.height = con_2.clientHeight + 'px';
};


resizeContainer_2();
var myChart_2 = echarts.init(container_2);


var option_2 = {
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
            data: [1400, 1700, 1100, 1000, 1200, 900, 800]
        }]
};
//配置图表设置并读取
//    myChart.setOption(option);

myChart_2.setOption(option_2);
//自适应屏幕


window.addEventListener("resize", function () {

    resizeContainer_2();
    myChart_2.resize();


});

// 2-01
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

// 2-02
// var con_2 = document.getElementById("con-b");
var container_2_02 = document.getElementById("main-2-02");

var resizeContainer_2_02 = function () {
    // container_2.style.width = window.innerWidth+"px";
    container_2_02.style.width = con_2.clientWidth + "px";
//        container_2.style.height = window.innerHeight+"px";
    container_2_02.style.height = con_2.clientHeight + 'px';
};


resizeContainer_2_02();
var myChart_2_02 = echarts.init(container_2_02);


var option_2_02 = {
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
            data: [1000, 1700, 1100, 1000, 1200, 1000, 300]
        }]
};
//配置图表设置并读取
//    myChart.setOption(option);

myChart_2_02.setOption(option_2_02);


// 2-03
// var con_2 = document.getElementById("con-b");
var container_2_03 = document.getElementById("main-2-03");

var resizeContainer_2_03 = function () {
    // container_2.style.width = window.innerWidth+"px";
    container_2_03.style.width = con_2.clientWidth + "px";
//        container_2.style.height = window.innerHeight+"px";
    container_2_03.style.height = con_2.clientHeight + 'px';
};


resizeContainer_2_03();
var myChart_2_03 = echarts.init(container_2_03);


var option_2_03 = {
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
            data: [1400, 1700, 1000, 900,1200, 800,1100,]
        }]
};
//配置图表设置并读取
//    myChart.setOption(option);

myChart_2_03.setOption(option_2_03);

// 2-04
// var con_2 = document.getElementById("con-b");
var container_2_04 = document.getElementById("main-2-04");

var resizeContainer_2_04 = function () {
    // container_2.style.width = window.innerWidth+"px";
    container_2_04.style.width = con_2.clientWidth + "px";
//        container_2.style.height = window.innerHeight+"px";
    container_2_04.style.height = con_2.clientHeight + 'px';
};


resizeContainer_2_04();
var myChart_2_04 = echarts.init(container_2_04);


var option_2_04 = {
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
            data: [1400, 1700, 1100, 1800, 1200, 900, 800]
        }]
};
//配置图表设置并读取
//    myChart.setOption(option);

myChart_2_04.setOption(option_2_04);

// 2-05
// var con_2 = document.getElementById("con-b");
var container_2_05 = document.getElementById("main-2-05");

var resizeContainer_2_05 = function () {
    // container_2.style.width = window.innerWidth+"px";
    container_2_05.style.width = con_2.clientWidth + "px";
//        container_2.style.height = window.innerHeight+"px";
    container_2_05.style.height = con_2.clientHeight + 'px';
};


resizeContainer_2_05();
var myChart_2_05 = echarts.init(container_2_05);


var option_2_05= {
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
            data: [1000, 1700, 1100, 1800, 1200, 900, 800]
        }]
};
//配置图表设置并读取
//    myChart.setOption(option);

myChart_2_05.setOption(option_2_05);

// 2-06
// var con_2 = document.getElementById("con-b");
var container_2_06 = document.getElementById("main-2-06");

var resizeContainer_2_06 = function () {
    // container_2.style.width = window.innerWidth+"px";
    container_2_06.style.width = con_2.clientWidth + "px";
//        container_2.style.height = window.innerHeight+"px";
    container_2_06.style.height = con_2.clientHeight + 'px';
};


resizeContainer_2_06();
var myChart_2_06 = echarts.init(container_2_06);


var option_2_06 = {
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
            data: [1000, 1200, 1500, 1000, 1200, 900, 1800]
        }]
};
//配置图表设置并读取
//    myChart.setOption(option);

myChart_2_06.setOption(option_2_06);