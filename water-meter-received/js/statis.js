
$(function () {


var bot_left = $('.con_bot_left');
var bot_center = $('.con_bot_center');
var bot_right = $('.con_bot_right');

// var use_water = document.getElementById('use_water');
/**
 * 年度统计
 * @param x
 * @param y
 */
//自适应宽高
function adaptive(x,y) {
    var myChart_use_waterContainer = function () {
        x.style.width = y.innerWidth+'px';
        x.style.height = y.innerHeight+'px';
    };

    return myChart_use_waterContainer();
}
function user_water_data(oneStop,twoStop,threeStop,fourStop,fiveStop) {
    return  [
        {value:oneStop, name:'水利一站'},
        {value:twoStop, name:'水利二站'},
        {value:threeStop, name:'水利三站'},
        {value:fourStop, name:'水利四站'},
        {value:fiveStop, name:'水利五站'}
    ]
}

function myOption(fn) {
    var  option_use_water = {
        color:['#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3'],

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable : true,
        series: [
            {
                name:'使用水量',
                // name:i,
                type:'pie',
                center: ['50%', '50%'],
                radius: ['30%', '55%'],
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
                                // color: '#eee',
                                // backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },

                data:fn
                /*[
                {value:18, name:'水利一站'},
                {value:22, name:'水利二站'},
                {value:20, name:'水利三站'},
                {value:28, name:'水利四站'},
                {value:12, name:'水利五站'}
            ]*/
            }
        ]
    };
    return option_use_water;
}

function _Option(fn) {
    var  option_use_water = {
        color:['#B077EF','#72B8F1','#73C2AF','#F6A455','#E879A3'],

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable : true,
        series: [
            {
                name:'灌溉面积',
                // name:i,
                type:'pie',
                center: ['50%', '50%'],
                radius: ['30%', '55%'],
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
                                // color: '#eee',
                                // backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },

                data:fn
                /*[
                {value:18, name:'水利一站'},
                {value:22, name:'水利二站'},
                {value:20, name:'水利三站'},
                {value:28, name:'水利四站'},
                {value:12, name:'水利五站'}
            ]*/
            }
        ]
    };
    return option_use_water;
}
// 使用水量
function water(n,m,a,b,c,d,e,f) {
    var area = document.getElementById(n);

    adaptive(area,m);
    var myChart_area = echarts.init(area);

    myChart_area.setOption(myOption(user_water_data(a,b,c,d,e,f)));

//用于使chart自适应高度和宽度
   /* window.onresize = function () {
        //重置容器高宽
        // myChart_use_waterContainer()
        adaptive(area,m);

        myChart_area.resize();
    };*/
    window.addEventListener("resize",function(){
        myChart_area.resize();
    });
}
//灌溉面积
function area(n,m,a,b,c,d,e,f) {
    var area = document.getElementById(n);

    adaptive(area,m);
    var myChart_area = echarts.init(area);

    myChart_area.setOption(_Option(user_water_data(a,b,c,d,e,f)));

//用于使chart自适应高度和宽度
   /* window.onresize = function () {
        //重置容器高宽
        // myChart_use_waterContainer()
        adaptive(area,m);

        myChart_area.resize();
    };*/
    window.addEventListener("resize",function(){
        myChart_area.resize();
    });
}
//使用水量1-01
water('fees',bot_left,15,22,20,28,15);
//灌溉面积1-02
  area('water',bot_center,15,22,15,28,20);


// 2

// 3水费 1-03
function my_Option(fn) {
    var  option_use_water = {
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
                center: ['40%', '50%'],
                radius: ['30%', '55%'],
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

                data:fn

            }
        ]
    };
    return option_use_water;
}
function toll(n,m,a,b,c,d,e,f) {
    var area = document.getElementById(n);

    adaptive(area,m);
    var myChart_area = echarts.init(area);

    myChart_area.setOption(my_Option(user_water_data(a,b,c,d,e,f)));

//用于使chart自适应高度和宽度
    window.onresize = function () {
        //重置容器高宽
        // myChart_use_waterContainer()
        adaptive(area,m);

        myChart_area.resize();
    };
    //浏览器大小改变时重置大小
       /* window.addEventListener("resize", function () {
            adaptive(area,m);
            myChart_area.resize();

        });
*/
}
// 03
    toll('main',bot_right,15,20,15,28,22);

 /*
 每日统计
 */

    $('.tab_nav').on('click','li',function () {
        console.log($(this).index());

        if ($(this).index()===2){

            $(function () {
                //使用水量 3-01

                water('use_water',bot_left,15,22,20,28,15);
//灌溉面积 3-02
                area('irrigated_area',bot_center,15,22,15,28,20);
// 水费计收 3-03
                toll('water_fee',bot_right,15,20,15,28,22);

            })
           /* //使用水量 3-01
            water('use_water',bot_left,15,22,20,28,15);
//灌溉面积 3-02
            water('irrigated_area',bot_center,15,22,15,28,20);
// 水费计收 3-03
            toll('water_fee',bot_right,15,20,15,28,22);*/

        }
        if ($(this).index()===1){
            $(function () {
                //使用水量 2-01
                water('_use_water', bot_left, 15, 22, 20, 28, 15);
//灌溉面积 3-02
                area('_irrigated_area', bot_center, 15, 22, 15, 28, 20);
// 水费计收 3-03
                toll('_water_fee', bot_right, 15, 20, 15, 28, 22);

            })

        }

        // 选项卡里面图
        $('.tab_nav').on('change','.irrigation_season',function () {
// 22

            var x = $(this).children('option:selected');

           /* if(x.index()===0) {
                water('use_water_one', bot_left, 15, 22, 20, 28, 15);
//灌溉面积 3-02
                area('irrigated_area_one', bot_center, 15, 22, 15, 28, 20);
// 水费计收 3-03
                toll('water_fee_one', bot_right, 15, 20, 15, 28, 22);
                // 33
            }*/
            if(x.index()===1) {
                water('use_water_one', bot_left, 15, 22, 20, 28, 15);
//灌溉面积 3-02
                area('irrigated_area_one', bot_center, 15, 22, 15, 28, 20);
// 水费计收 3-03
                toll('water_fee_one', bot_right, 15, 20, 15, 28, 22);
                // 33
            }

            // console.log(x.index());
            if(x.index()===2){
                // $(function () {
                    water('use_water_two', bot_left, 15, 22, 20, 28, 15);
//灌溉面积 3-02
                area('irrigated_area_two', bot_center, 15, 22, 15, 28, 20);
// 水费计收 3-03
                    toll('water_fee_two', bot_right, 15, 20, 15, 28, 22);
                // })
            }


            // 44
            if(x.index()===3) {

                water('use_water_three', bot_left, 15, 22, 20, 28, 15);
//灌溉面积 3-02
                area('irrigated_area_three', bot_center, 15, 22, 15, 28, 20);
// 水费计收 3-03
                toll('water_fee_three', bot_right, 15, 20, 15, 28, 22);
            }
        })




    });



/*
//使用水量 3-01
water('use_water',bot_left,15,22,20,28,15);
//灌溉面积 3-02
water('irrigated_area',bot_center,15,22,15,28,20);
// 水费计收 3-03
toll('water_fee',bot_right,15,20,15,28,22);

*/
// araAZQQAaaaaqaqaqqa去啊阿堵物 。/ +
  //使用水量 2-01
/*
water('_use_water',bot_left,15,22,20,28,15);
  灌溉面积 2-02
water('_irrigated_area',bot_center,15,22,15,28,20);
// 水费计收 2-03
toll('_water_fee',bot_right,15,20,15,28,22);

*/


});