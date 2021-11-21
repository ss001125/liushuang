$(function() {
    //首页轮播插件
    $('#img').tyslide({
            boxh: 435, //轮播的高度
            w: 1000, //图片宽度
            h: 410, //图片高度
            isShow: true, //是否显示控制按钮
            isShowBtn: true, //是否显示左右按钮
            controltop: 1, //控制器按钮上下偏移距离 
            controlsW: 20, //控制按钮宽度
            controlsH: 20, //控制按钮高度
            radius: 10, //圆角度数
            controlsColor: "#ff6600", //普通控制按钮的颜色
            controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
            isShowNum: true //是否显示数字
        })
        // 电子书轮播
    $('#ebook').tyslide({
            boxh: 223, //轮播的高度
            w: 332, //图片宽度
            h: 223, //图片高度
            isShow: true, //是否显示控制按钮
            isShowBtn: true, //是否显示左右按钮
            controltop: 1, //控制器按钮上下偏移距离 
            controlsW: 20, //控制按钮宽度
            controlsH: 20, //控制按钮高度
            radius: 10, //圆角度数
            controlsColor: "#ff6600", //普通控制按钮的颜色
            controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
            isShowNum: true //是否显示数字
        })
        // 衣服轮播
    $('#clothes').tyslide({
            boxh: 340, //轮播的高度
            w: 420, //图片宽度
            h: 340, //图片高度
            isShow: true, //是否显示控制按钮
            isShowBtn: true, //是否显示左右按钮
            controltop: 1, //控制器按钮上下偏移距离 
            controlsW: 20, //控制按钮宽度
            controlsH: 20, //控制按钮高度
            radius: 10, //圆角度数
            controlsColor: "#ff6600", //普通控制按钮的颜色
            controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
            isShowNum: true //是否显示数字
        })
        // 体育用品轮播
    $('#sport').tyslide({
            boxh: 340, //轮播的高度
            w: 420, //图片宽度
            h: 340, //图片高度
            isShow: true, //是否显示控制按钮
            isShowBtn: true, //是否显示左右按钮
            controltop: 1, //控制器按钮上下偏移距离 
            controlsW: 20, //控制按钮宽度
            controlsH: 20, //控制按钮高度
            radius: 10, //圆角度数
            controlsColor: "#ff6600", //普通控制按钮的颜色
            controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
            isShowNum: true //是否显示数字
        })
        // 童装轮播
    $('#children-clothes').tyslide({
            boxh: 340, //轮播的高度
            w: 420, //图片宽度
            h: 340, //图片高度
            isShow: true, //是否显示控制按钮
            isShowBtn: true, //是否显示左右按钮
            controltop: 1, //控制器按钮上下偏移距离 
            controlsW: 20, //控制按钮宽度
            controlsH: 20, //控制按钮高度
            radius: 10, //圆角度数
            controlsColor: "#ff6600", //普通控制按钮的颜色
            controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
            isShowNum: true //是否显示数字
        })
        //电子书手风琴效果
    $('#ebooks-right > li').mouseenter(function() {
            //对鼠标所在的位置操作
            $(this).find('.desc').show(); //内容显示
            $(this).find('#ebook-title').hide(); //标题隐藏
            //对其他位置的操作
            $(this).siblings().find('.desc').hide(); //内容隐藏
            $(this).siblings().find('#ebook-title').show(); //标题显示

        })
        // 推荐用品滑动
    $('#active>li').mouseenter(function() {
            $(this).css('backgroundColor', '#ccc').siblings().css('backgroundColor', '#ff6700');
            let index = $(this).index();
            $('.out-box>.inner-box').animate({
                // 'left': -index * 1170 左右滑动
                'top': -index * 600 //上下滑动
            }, 1000)
        })
        //推荐用品提示用户此页为第一页，以此好提示用户不去触发第一个li标签
    var list = $('.out-box>.inner-box');
    if (list.css('top') == '0px') {
        $('#active>li').eq(0).css('backgroundColor', '#ccc')
    }

    // 二维码
    $('.qr-code p:eq(1)').hover(function() {
            $('.qr-code .ticket').stop(true).animate({
                        left: '-100px'
                    },
                    800)
                // console.log('11');
        }, function() {
            $('.qr-code .ticket').stop(true).animate({
                left: 0
            }, 800)
        })
        // 顶部搜索框交互
    $(document).scroll(function() {
        if ($('html,body').scrollTop() > 300) {
            // console.log('11')
            $('.top-search').fadeIn();
        } else {
            $('.top-search').fadeOut();
        }
    })

    //楼层跳转
    $('.floor li').click(function() {
        var index = $(this).index();
        var topOffset = $('.floor-box').eq(index).offset().top
        $('html,body').animate({
            scrollTop: topOffset - 50,
        })
    })
})