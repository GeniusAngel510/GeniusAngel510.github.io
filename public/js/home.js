
$(function () {
   $('.drop').on('click','.icon.up',function () {
       $(this).hide();
       $(this).siblings().show();
       console.log($(this).parents('.item').children('.down'));
       $(this).parents('.item').children('.down').slideUp()
   }) ;
    $('.drop').on('click','.icon.bot',function () {
       $(this).hide();
       $(this).siblings().show();
        $(this).parents('.item').children('.down').slideDown()
   })

});

// 图1
var con_1 = document.getElementById("con-1");
var container_1 = document.getElementById("main-1");

var resizeContainer_1 = function () {
    container_1.style.width = con_1.clientWidth + "px";
    container_1.style.height = con_1.clientHeight + 'px';
};
resizeContainer_1();

var myChart_1 = echarts.init(container_1);

data = ['12:00','12:30','13:00','13:30','14:00','14:30'];
/*
var dateList = data.map(function (item) {
    return item[0];
});
var valueList = data.map(function (item) {
    return item[1];
});
*/

option_1 = {

 /*   visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 10
    }, {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: data.length - 1
    }],
*/
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['水量','风速'],
        textStyle: {
            color: '#0188C0'          //legend字体颜色
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: data,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#A3A7A8'
            }
        }
    }, {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#A3A7A8'
            }
        },
        data: data,
        gridIndex: 1
    }],
    yAxis: [{
        type: 'value',
        // boundaryGap: false,
        // data: [0,2,4,6,8,10],

        max:10,
        min:0,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#A3A7A8'
            }
        },
        splitLine: {show: false}

    }, {
        // type: 'category',
        // boundaryGap: false,
        // data: ['特危','警告','正常','特危','警告'],
        max:10,
        min:0,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#A3A7A8'
            }
        },
        splitLine: {show: false},
        gridIndex: 1
    }],
    grid: [{
        bottom: '60%'
    }, {
        top: '60%'
    }],
    series: [{
        type: 'line',
        name:'水量',
        showSymbol: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(23, 217,179)'
                }, {
                    offset: 1,
                    color: 'rgb(0, 7, 26)'
                }])
            }
        },
        itemStyle:{
            normal:{
                color: "#17DAB4" //图标颜色
            }
        },
        data:[2,5,4,6,8,5]
    }, {
        type: 'line',
        name:'风速',
        showSymbol: true,
        itemStyle:{
            normal:{
                color: "#CF2454" //图标颜色
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(170, 31, 73)'
                }, {
                    offset: 1,
                    color: 'rgb(0, 7, 26)'
                }])
            }
        },
        data:[5,3,7,6,8,5],
        xAxisIndex: 1,
        yAxisIndex: 1
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart_1.setOption(option_1);
// 图 2

var con = document.getElementById("con");
var container = document.getElementById("main");

var resizeContainer = function () {
    container.style.width = con.clientWidth + "px";
    container.style.height = con.clientHeight + 'px';
};
resizeContainer();
var myChart = echarts.init(container);

option = {
    // title: {
    //     text: '未来一周气温变化',
    //     subtext: '纯属虚构'
    // },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '15%',
        // bottom: '3%',
        // containLabel: true
    },
    // legend: {
    //     data:['最高气温','最低气温']
    // },
    /*toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },*/
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        // splitLine:{show: false},//去除网格线
        splitLine:{show: true},
        axisLabel: {
            show: true,
            textStyle: {
                color: '#A3A7A8'
            }
        },
        data: ['0:00','4:00','8:00','12:00','16:00','20:00']
    },
    yAxis: {
        type: 'value',
        // splitLine:{show: false},//去除网格线
        splitLine:{show: true},
        axisLabel: {
            show: true,
            textStyle: {
                color: '#A3A7A8'
            },
            formatter: '{value}%',

        },
        min:0,
        // splitNumber:4, //分几段
        max:100,
        interval:25, //间距
        // data:[0,25,50,75,100]

    },
    series: [
        {
            // name:'最高气温',
            type:'line',
            //设置轴线的属性
            // lineStyle:{
            //     normal:{
            //         width:10,  //连线粗细
            //         color: "#0F0"  //连线颜色
            //     }
            // },
            itemStyle:{
                normal:{
                    color: "#F98548" //图标颜色
                }
            },
            symbol: 'circle',
            data:[70, 60, 80, 45, 55, 70],

        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);