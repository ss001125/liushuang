$(function () {
    //首页轮播插件
    $('#img').tyslide({
        boxh: 435,//轮播的高度
        w: 1000,//图片宽度
        h: 410,//图片高度
        isShow: true,//是否显示控制按钮
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制器按钮上下偏移距离 
        controlsW: 40,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 10,//圆角度数
        controlsColor: "#ff6600",//普通控制按钮的颜色
        controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
        isShowNum: false //是否显示数字
    })
})