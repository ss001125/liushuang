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

    //手风琴效果
    $('#newbook-right > li').mouseenter(function() {
            //对鼠标所在的位置操作
            $(this).find('.desc').show(); //内容显示
            $(this).find('#ebook-title').hide(); //标题隐藏
            //对其他位置的操作
            $(this).siblings().find('.desc').hide(); //内容隐藏
            $(this).siblings().find('#ebook-title').show(); //标题显示
        })
        // 独家提供
        // $('.ez-content .banner').tyslide({
        //     boxh: 500, //轮播的高度
        //     w: 1200, //图片宽度
        //     h: 440, //图片高度
        //     isShow: true, //是否显示控制按钮
        //     isShowBtn: true, //是否显示左右按钮
        //     controltop: 20, //控制器按钮上下偏移距离 
        //     controlsW: 20, //控制按钮宽度
        //     controlsH: 20, //控制按钮高度
        //     radius: 20, //圆角度数
        //     controlsColor: "#ff6600", //普通控制按钮的颜色
        //     controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
        //     isShowNum: false //是否显示数字
        // })
    $('.ez-content:gt(0)').hide();
    $('.productList .top li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.ez-content').eq(index).show().siblings().hide();
    })
})