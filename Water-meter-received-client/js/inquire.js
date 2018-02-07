
;(function (inquire) {
    inquire.infor = function () {
        $('.layui-form-radio').click(function () {
            console.log($(this).index());
            console.log($(this).text());
            console.log($(this).find('div').text());
            console.log($('.infor-item'));
            if($(this).index()===1){
                $('.infor-query').find('.infor-item').eq(0).show().siblings('.infor-item').hide();
                console.log($('.infor-item').index());
            }
            if($(this).index()===3){
                $('.infor-query').find('.infor-item').eq(1).show().siblings('.infor-item').hide();
                console.log($('.infor-item').index());
            }
            if($(this).index()===5){
                $('.infor-query').find('.infor-item').eq(2).show().siblings('.infor-item').hide();
                console.log($('.infor-item').index());
            }
        })

    };

    window.inquire = inquire
})(window.inquire || { });


;(function ($) {
    $.extend({
        inquire:function () {

        }
    })

})(jQuery);
inquire.infor();
