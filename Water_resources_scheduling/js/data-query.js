$(function () {

    $('#con-1').on('change','.xuan',function () {
        var s = $(this).children('option:selected');
        console.log(s.index());
        //
        console.log($('#con-1').find('.guan').eq(s.index()).show().siblings('.guan'));
        $('#con-1').find('.guan').eq(s.index()).show().siblings('.guan').hide()

    })
});



// 图
// 图1
// app.title = '坐标轴刻度与标签对齐';
var con_1 = document.getElementById("con-1");
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

    color: ['#75CB79'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['12.01', '12.03', '12.05', '12.07', '12.09', '12.11', '12.13','12.15','12.17','12.19','12.21','12.23','12.25','12.27','12.29','12.31'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            //去掉线条
            splitLine: {show: false},
            name:'吨/日',
            nameLocation:'start',

            // nameTextStyle:{
            //     nameGap:10,
            //     nameRotate:90
            // }



        }
    ],
    series : [
        {
            name:'用水统计',
            type:'bar',
            //改变颜色
            /*itemStyle:{
                normal:{
                    color:'#75CB79'
                }
            },*/
            barWidth: '50%',
            data:[1500, 1300, 1000, 1400, 1500, 1700, 2000,1120,1100,1400,1300,1800,2100,2000,1000,2300]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_1.setOption(option_1);

// 图1-01

// var con_1 = document.getElementById("con-1");
var container_1_01 = document.getElementById("main-1-01");

var resizeContainer_1_01 = function () {
//        container_3.style.width = window.innerWidth+"px";
    container_1_01.style.width = con_1.clientWidth + "px";
//        container.style.height = window.innerHeight+"px";
    container_1_01.style.height = con_1.clientHeight + 'px';
};


resizeContainer_1_01();
var myChart_1_01 = echarts.init(container_1_01);

option_1_01 = {

    color: ['#75CB79'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['12.01', '12.03', '12.05', '12.07', '12.09', '12.11', '12.13','12.15','12.17','12.19','12.21','12.23','12.25','12.27','12.29','12.31'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            //去掉线条
            splitLine: {show: false},
            name:'吨/日',
            nameLocation:'start',

            // nameTextStyle:{
            //     nameGap:10,
            //     nameRotate:90
            // }



        }
    ],
    series : [
        {
            name:'用水统计',
            type:'bar',
            //改变颜色
            /*itemStyle:{
                normal:{
                    color:'#75CB79'
                }
            },*/
            barWidth: '50%',
            data:[1000, 1300, 1000, 1400, 1500, 1700, 900,1120,2100,1400,1300,1800,2100,2000,1000,1000]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_1_01.setOption(option_1_01);

// / 图1-02

// var con_1 = document.getElementById("con-1");
var container_1_02 = document.getElementById("main-1-02");

var resizeContainer_1_02 = function () {
//        container_3.style.width = window.innerWidth+"px";
    container_1_02.style.width = con_1.clientWidth + "px";
//        container.style.height = window.innerHeight+"px";
    container_1_02.style.height = con_1.clientHeight + 'px';
};


resizeContainer_1_02();
var myChart_1_02 = echarts.init(container_1_02);

option_1_02 = {

    color: ['#75CB79'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['12.01', '12.03', '12.05', '12.07', '12.09', '12.11', '12.13','12.15','12.17','12.19','12.21','12.23','12.25','12.27','12.29','12.31'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            //去掉线条
            splitLine: {show: false},
            name:'吨/日',
            nameLocation:'start',

            // nameTextStyle:{
            //     nameGap:10,
            //     nameRotate:90
            // }



        }
    ],
    series : [
        {
            name:'用水统计',
            type:'bar',
            //改变颜色
            /*itemStyle:{
                normal:{
                    color:'#75CB79'
                }
            },*/
            barWidth: '50%',
            data:[1500, 2300, 1000, 1400, 1500, 1700, 1900,1120,1100,1400,1500,1800,2100,2000,1000,1500]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_1_02.setOption(option_1_02);

// / 图1-03

// var con_1 = document.getElementById("con-1");
var container_1_03 = document.getElementById("main-1-03");

var resizeContainer_1_03 = function () {
//        container_3.style.width = window.innerWidth+"px";
    container_1_03.style.width = con_1.clientWidth + "px";
//        container.style.height = window.innerHeight+"px";
    container_1_03.style.height = con_1.clientHeight + 'px';
};


resizeContainer_1_03();
var myChart_1_03 = echarts.init(container_1_03);

option_1_03 = {

    color: ['#75CB79'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['12.01', '12.03', '12.05', '12.07', '12.09', '12.11', '12.13','12.15','12.17','12.19','12.21','12.23','12.25','12.27','12.29','12.31'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            //去掉线条
            splitLine: {show: false},
            name:'吨/日',
            nameLocation:'start',

            // nameTextStyle:{
            //     nameGap:10,
            //     nameRotate:90
            // }



        }
    ],
    series : [
        {
            name:'用水统计',
            type:'bar',
            //改变颜色
            /*itemStyle:{
                normal:{
                    color:'#75CB79'
                }
            },*/
            barWidth: '50%',
            data:[1300, 1700, 1000, 1400, 1500, 1700, 1900,1120,1100,1400,500,1800,2100,2000,1000,2500]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_1_03.setOption(option_1_03);

// 图2
var con_2 = document.getElementById("con-2");
var container_2 = document.getElementById("main-2");

var resizeContainer_2 = function () {
    container_2.style.width = con_2.clientWidth + "px";
    container_2.style.height = con_2.clientHeight + 'px';
};

resizeContainer_2();
var myChart_2 = echarts.init(container_2);

var option_2 = {
    // title: {
    //     text: '水果销售量'
    // },
    tooltip : {
        trigger: 'axis'
    },
    // legend: {
    //     data:['水果销量']
    // },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            // 旋转
            axisLabel:{
                rotate: 30,
                interval:0
            },
            splitLine: {show: false},
            data : ['','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月','']
        }
    ],
    yAxis : [
        {
            type : 'value',
            //去掉线条
            splitLine: {show: false},
            name:'吨/日',
            nameLocation:'start',
            minInterval: 1
        }
    ],
    series : [
        {
            name:'水果销量',
            type:'line',
            stack: '销量',
            /*symbol:'arrow', //图标形状
            symbolSize:60,  //图标尺寸*/
            itemStyle:{
                normal:{
                    color: "#4BA0FF" //图标颜色
                }
            },
            lineStyle:{
                normal:{
                    // width:10,  //连线粗细
                    color: "#4BA0FF"  //连线颜色
                }
            },

            data:[, 2000, 2100, 1700, 1900, 1800, 2200, 2300,2250,2400,1700,1700,2500]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_2.setOption(option_2);

/*图3*/
// var con_3 = document.getElementById("con-3");
var con_3 = $('.con-3-left');
// console.log($('.con-3-left'));
var container_3 = document.getElementById("main-3");

var resizeContainer_3 = function () {
    container_3.style.width = con_3.clientWidth + "px";
    container_3.style.height = con_3.clientHeight + 'px';
};

resizeContainer_3();
var myChart_3 = echarts.init(container_3);

option_3 = {
    color:['#FF7B8C','#FFCD2F','#4BA0FF'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'center',
        bottom: 'bottom',
        itemWidth:10,
        itemHeight:10,
        data: ['已交水费','未交水费','应交水费']
    },
    series : [
        {
            name: '水费',
            type: 'pie',
            radius : '55%',
            center: ['50%', '40%'],
            data:[
                {value:10, name:'已交水费'},
                {value:40, name:'未交水费'},
                {value:50, name:'应交水费'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart_3.setOption(option_3);

