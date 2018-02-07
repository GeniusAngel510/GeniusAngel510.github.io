
(function ($) {
    $.extend({
        nav:function () {
            //左边导航 右边箭头
            $('.layui-nav-item').click(function () {

                $(this).children('.layui-icon').show();
                $(this).siblings().children('.layui-icon').hide();

            })
        }
    })

})(jQuery);