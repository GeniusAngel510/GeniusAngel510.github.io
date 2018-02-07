
// 底部导航
;(function (nav) {
    nav._nav = function () {

        $('.nav').find('li').click(function () {

            console.log($(this).index());
            /*$(this).children('a').css('color','#2C80EC').parent('li').siblings('li').children('a').css('color','#666');*/

            $(this).children('a').addClass('ac').parent('li').siblings('li').children('a').removeClass('ac');
            function home() {
                $('.nav li').eq(0).find('p').attr('class','icon-home');
            }
            function user() {
                $('.nav li').eq(1).find('p').attr('class','icon-user');
            }
            function big() {
                $('.nav li').eq(2).find('p').attr('class','icon-big');
            }
            function count() {
                $('.nav li').eq(3).find('p').attr('class','icon-count');
            }
            if($(this).index()===0){
                console.log($(this).find('p').attr('class','icon-home'));
                $(this).find('p').attr('class','icon-home-2');
                user();big();count();
            }
            if($(this).index()===1){
                $(this).find('p').attr('class','icon-user-2');
                    home();big();count();
            }
            if($(this).index()===2){
                $(this).find('p').attr('class','icon-big-2');
                home();user();count();
            }
            if($(this).index()===3){
                $(this).find('p').prop('class','icon-count-2');
                    home();user();big();
            }

        })

    };

    window.nav = nav;

})(window.nav || { });

(function ($) {
    $.extend({
        drop:function () {
            $('.slider').click(function () {
              $('.h-nav').find('.drop').slideToggle();
            })

        }
    })

})(jQuery);