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


    //电子书手风琴效果
    $('#ebooks-right > li').mouseenter(function() {
        //对鼠标所在的位置操作
        $(this).find('.desc').show(); //内容显示
        $(this).find('#ebook-title').hide(); //标题隐藏
        //对其他位置的操作
        $(this).siblings().find('.desc').hide(); //内容隐藏
        $(this).siblings().find('#ebook-title').show(); //标题显示

    })
})