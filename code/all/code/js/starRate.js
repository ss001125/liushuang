$(function() {
    $.fn.starRate = function(score) {
        if (score <= 5) {
            var on = '<span class="on iconfont icon-star-full"></span>'; //实星
            var off = '<span class="off iconfont icon-star"></span>'; //空星
            var half = '<span class="half iconfont icon-star-half"></span>'; //半星
            //计算总分
            var calcScore = Math.floor(score * 2) / 2;
            //计算实星
            var onScore = Math.floor(calcScore);
            //计算半星
            var halfScore = 0;
            if (calcScore % 1 !== 0) {
                halfScore = 1
            }
            //计算空星
            var offScore = 5 - onScore - halfScore;
            //拼接结果
            var rst = '';
            //实星
            for (i = 0; i < onScore; i++) {
                rst += on;
            }
            //半星
            if (halfScore == 1) {
                rst += half;
            }
            //空星
            for (k = 0; k < offScore; k++) {
                rst += off;
            }
            $(this).html(rst);
        } else {
            alert('评分不能超过5分')
        }
    }
})