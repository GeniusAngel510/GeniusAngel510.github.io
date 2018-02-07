$(function () {
    $('.tab').on('click','.tab_nav li',function () {
        console.log($(this).index());
        $(this).children('.layui-btn').addClass('active');
        $(this).siblings().children('.layui-btn').removeClass('active');

        $('.tab').find('.tab_item').eq($(this).index()).show().siblings().hide();

        console.log($('.tab_item'))


    })
});

/*// 年度统计
// 图1
var botLeft = $('.con_bot_left');
// var botLeft = document.getElementsByClassName('con_bot_left');
var myChart_fees = document.getElementById('fees');

//自适应宽高
var myChart_feesContainer = function () {
    myChart_fees.style.width = botLeft.innerWidth+'px';
    myChart_fees.style.height = botLeft.innerHeight+'px';
};
myChart_feesContainer();
var myChart_fees = echarts.init(myChart_fees);


option_fees = {
    color:['#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3'],

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series: [
        {
            name:'使用水量',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            label: {
                normal: {
                    formatter: '  {per|{d}%}  ',

                    borderColor: '#aaa',
                    // borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
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
                            // color: '#eee',
                            // backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
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
myChart_fees.setOption(option_fees);

//用于使chart自适应高度和宽度
window.onresize = function () {
    //重置容器高宽
    myChart_feesContainer();
    myChart_fees.resize();
};
// 图2
var botCenter = $('.con_bot_center');
var myChart_water = document.getElementById('water');

//自适应宽高
var myChart_waterContainer = function () {
    myChart_water.style.width = botCenter.innerWidth+'px';
    myChart_water.style.height = botCenter.innerHeight+'px';
};
myChart_waterContainer();
var myChart_water = echarts.init(myChart_water);


option_water = {
    color:['#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3'],

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series: [
        {
            name:'使用水量',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],

            label: {
                normal: {
                    formatter: '  {per|{d}%}  ',

                    borderColor: '#aaa',
                    // borderWidth: 1,
                    borderRadius: 4,

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

            data:[
                {value:15,name:'水利一站'},
                {value:28,name:'水利二站'},
                {value:20,name:'水利三站'},
                {value:22,name:'水利四站'},
                {value:15,name:'水利五站'}
            ]
        }
    ]
};

// app.setOption(option);
// 使用刚指定的配置项和数据显示图表。
myChart_water.setOption(option_water);

//用于使chart自适应高度和宽度
window.onresize = function () {
    //重置容器高宽
    myChart_waterContainer();
    myChart_water.resize();
};

// 图3
var botLRight = $('.con_bot_right');
var myChart = document.getElementById('main');

//自适应宽高
var myChartContainer = function () {
    myChart.style.width = botLRight.innerWidth+'px';
    myChart.style.height = botLRight.innerHeight+'px';
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
        y:'center',
        // 宽高
        itemWidth:'15',
        itemHeight:'10',

        data:['水利一站','水利二站','水利三站','水利四站','水利五站']
    },
    series: [
        {
            name:'收水费',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    formatter: '  {per|{d}%}  ',

                    borderColor: '#aaa',
                    // borderWidth: 1,
                    borderRadius: 4,

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

            data:[
                {value:20, name:'水利一站'},
                {value:25, name:'水利二站'},
                {value:20, name:'水利三站'},
                {value:25, name:'水利四站'},
                {value:10, name:'水利五站'}
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

//每日统计*/
// 里面选项卡
$(function () {
    console.log($('.slt'));
    // console.log($('.sel'));

    $('.tab_nav').on('change','.irrigation_season',function () {
        var s = $(this).children('option:selected');
        console.log(s.index());
        $('.tab_content').find('.proportion').eq(s.index()).show().siblings().hide()

    })

    /*$('.con_b-left').on('change','.con_b-r',function () {
        //  var ss = $(this).children('option:selected').val();
        // console.log(ss)
        var s = $(this).children('option:selected');
        console.log(s.index());

        $('#con-t').find('.ruc').eq(s.index()).show().siblings().hide()

    });*/


});

