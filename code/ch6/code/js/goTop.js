$(function() {
    window.gotop = function(opt) {
        var defaults = {
            imgUrl: 'img/返回顶部.png',
            bottom: '100px'
        }

        var prams = $.extend({}, defaults, opt);

        var $html = $(`<div class="backTop">
                            <img src="${prams.imgUrl}" alt="">
                    </div>`)

        $html.css({
            width: '48px',
            heght: '48px',
            position: 'fixed',
            bottom: prams.bottom,
            left: '620px',
            marginLeft: '50%',
            display: 'none',
        })

        $('body').append($html);
        $(document).scroll(function() {
            if ($('html,body').scrollTop() > 500) {
                $('.backTop').stop(true).fadeIn();
            } else {
                $('.backTop').stop(true).fadeOut();
            }
            $('html,body').on('click', '.backTop', function() {
                $('html,body').animate({
                    scrollTop: 0,
                }, 300)
            })
        })
    }
})