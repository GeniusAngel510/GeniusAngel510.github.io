
// 图1

// app = echarts.init(document.getElementById('main'));
var botLeft = $('.con_bot_left');
var myChart = document.getElementById('main');

//自适应宽高
var myChartContainer = function () {
    myChart.style.width = botLeft.innerWidth+'px';
    myChart.style.height = botLeft.innerHeight+'px';
};
myChartContainer();
var myChart = echarts.init(myChart);
myChart.title = '环形图';

option = {
    color:['#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x:'right',
        // y:'center',
        // 宽高
        itemWidth:'10',
        itemHeight:'10',

        data:['水利一站','水利二站','水利三站','水利四站','水利五站']
    },
    series: [
        {
            name:'收水费',
            type:'pie',
            center: ['50%', '60%'],
            radius: ['30%', '55%'],
            avoidLabelOverlap: false,
        /*    label: {
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
            },*/
            label: {
                normal: {
                    formatter: '  {per|{d}%}  ',

                    borderColor: '#aaa',
                    // borderWidth: 1,
                    borderRadius: 4,
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },

                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    //显示 提示箭头
                    show: true
                }
            },
            data:[
                {value:18, name:'水利一站'},
                {value:22, name:'水利二站'},
                {value:20, name:'水利三站'},
                {value:28, name:'水利四站'},
                {value:12, name:'水利五站'}
            ]
        }
    ]
};

// app.setOption(option);
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//用于使chart自适应高度和宽度
window.onresize = function () {
    //重置容器高宽
    myChartContainer();
    myChart.resize();
};

// 图 2
/*legend: {
    data:['水利一站','水利二站','水利三站','水利四站','水利五站']
},*/
// app.title = '世界人口总量 - 条形图';
var botCenter = $('.con_bot_center');
var myChart_water = document.getElementById('water');

//自适应宽高
var myChart_waterContainer = function () {
    myChart_water.style.width = botCenter.innerWidth+'px';
    myChart_water.style.height = botCenter.innerHeight+'px';
};
myChart_waterContainer();
var myChart_water = echarts.init(myChart_water);
myChart_water.title = '环形图';

//初始化数据
var category = ['水利一站','水利二站','水利三站','水利四站','水利五站'];
var barData = [35000, 46072, 40590, 65309, 45883];
var waterData = [
    {value:35000, name:'水利一站'},
    {value:46072, name:'水利二站'},
    {value:40590, name:'水利三站'},
    {value:65309, name:'水利四站'},
    {value:45883, name:'水利五站'}
];
var option_water = {

    // legend: {
    //     orient: 'vertical',
    //     y:'bottom',
    //   data:[ '水利站']
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        // right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
        splitLine: {show: false},
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    },
    yAxis: {
        type: 'category',
        data: category,
        name:'单位（元）',
/*
        splitLine: {show: false},
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        offset: 10,
        nameTextStyle: {
            fontSize: 15
        }*/
    },
    series: [
        {
            name: '水利站',
            type: 'bar',
            //[35000, 46072, 40590, 65309, 45883];
            data: barData,
            // data: waterData,
            /*data:[
                {value:35000, name:'水利一站'},
                {value:46072, name:'水利二站'},
                {value:40590, name:'水利三站'},
                {value:65309, name:'水利四站'},
                {value:45883, name:'水利五站'}
            ],*/
            barWidth: 15,
            barGap: 10,
            smooth: true,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [5, -2],
                    textStyle: {
                        color: '#86A1CC',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    barBorderRadius: 5
                },
               /* normal: {
                    barBorderRadius: 7,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#3977E6'},
                            {offset: 1, color: '#37BBF8'}

                        ]
                    )
                }*/
// color:['#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3'],
                normal: {
                    barBorderRadius: 7,
                    //设置不同的颜色
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3',

                    ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_water.setOption(option_water);

//用于使chart自适应高度和宽度
window.onresize = function () {
    //重置容器高宽
    myChart_waterContainer();
    myChart_water.resize();
};
// 图 3
/*legend: {
    data:['水利一站','水利二站','水利三站','水利四站','水利五站']
},*/
// app.title = '世界人口总量 - 条形图';
var botRight = $('.con_bot_right');
var myChart_fees = document.getElementById('fees');

//自适应宽高
var myChart_feesContainer = function () {
    myChart_fees.style.width = botRight.innerWidth+'px';
    myChart_fees.style.height = botRight.innerHeight+'px';
};
myChart_feesContainer();
var myChart_fees = echarts.init(myChart_fees);


/*//初始化数据
var category = ['水利一站','水利二站','水利三站','水利四站','水利五站'];
var barData = [35000, 46072, 40590, 65309, 45883];*/

var option_fees = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        // right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
        splitLine: {show: false},
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    },
    yAxis: {
        type: 'category',
        data: category,
        name:'单位（方）',

    },
    series: [
        {
            name: '水利站',
            type: 'bar',
            //[35000, 46072, 40590, 65309, 45883];
            data: barData,

            barWidth: 15,
            barGap: 10,
            smooth: true,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [5, -2],
                    textStyle: {
                        color: '#86A1CC',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    barBorderRadius: 5
                },

// color:['#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3'],
                normal: {
                    barBorderRadius: 7,
                    //设置不同的颜色
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3',

                    ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart_fees.setOption(option_fees);

//用于使chart自适应高度和宽度
window.onresize = function () {
    //重置容器高宽
    myChart_feesContainer();
    myChart_fees.resize();
};
