
var searchinput=$("input");
var textWidth = function (text) {
    var sensor = $('<pre>' + text + '</pre>').css({display: 'none'});
    $('body').append(sensor);
    var width = sensor.width();
    sensor.remove();
    return width;
};
searchinput.unbind('keyup').bind('keyup', function () {
    $(this).width(textWidth($(this).val() + 20));

});

$(function () {
    // console.log($('.tab_edt'));
    // console.log($('.se1'));
    // console.log($('.save'));
    // console.log($('.edit'));
    // console.log($('.compile'));
//编辑
    $('.edit').click(function () {
        console.log($(this).parents('.tab_edt').children('.compile').find('.se1'));
        $(this).parents('.tab_edt').children('.compile').find('.se1').removeClass('dis');
        $(this).hide().siblings().show();
        $(this).parents('.tab_edt').children('.compile').find('.se1').prop("disabled", false);

    });
    // 保存
    $('.save').click(function () {
        $(this).hide().siblings().show();
        $(this).parents('.tab_edt').children('.compile').find('.se1').addClass('dis');
        $(this).parents('.tab_edt').children('.compile').find('.se1').prop("disabled", true);
        // console.log($(this).parents('.tab_edt').children('.compile').find('.se1'));
        /*$(this).parents('.tab_edt').children('.compile').find('.se1').each(function (ind,ele) {
            console.log(ele);
        });*/
      /* var x = $(this).parents('.tab_edt').children('.compile').find('.se1').each(function (index,ele) {
            console.log($(ele).val());
           // $(ele).val()

        });*/

       function su(ts) {
           $(ts).parents('.tab_edt').children('.compile').find('.se1').each(function (index,ele) {
               console.log($(ele).val());
               // $(ele).val()
           });
       }
       // su(this);
       var x= su(this);
        // console.log($(this));
$.post('/json','',function (res) {
    console.log(res)
});
        $.ajax({
            url:'./package.json',
            type:'POST',
            data:x,
            success:function (result) {
                console.log(result.dependencies);
                for (var i in result.dependencies){
                    console.log(result.dependencies[i]);
                }
            },
            error:function (err) {
                console.log(err);
            }
        })

    })

});