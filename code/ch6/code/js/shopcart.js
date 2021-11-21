$(function() {

    var headCheck = $('thead input[type=checkbox]');
    var commodityCheck = $('tbody input[type=checkbox]');
    var totalCheck = $('.total input[type=checkbox]');

    //头部全选
    headCheck.change(function() {
            if (headCheck.prop('checked')) {
                commodityCheck.prop('checked', true);
                totalCheck.prop('checked', true)
            } else {
                commodityCheck.prop('checked', false);
                totalCheck.prop('checked', false)
            }
            total();
        })
        //总计全选
    totalCheck.change(function() {
            if (totalCheck.prop('checked')) {
                commodityCheck.prop('checked', true);
                headCheck.prop('checked', true)
            } else {
                commodityCheck.prop('checked', false);
                headCheck.prop('checked', false)
            }
            total();

        })
        //商品选择影响全选框
    commodityCheck.change(function() {
        var state = false;
        commodityCheck.each(function() {
            if ($(this).prop('checked') === false) {
                // console.log('11')
                state = false;
            } else {
                state = true;
            }
            return state;
        })
        headCheck.prop('checked', state);
        totalCheck.prop('checked', state);
        total();

    })


    // 商品数量加减
    // 1.加
    $('tbody .add').click(function() {
            // alert('11')
            var count = $(this).prev().val();
            count++;
            $(this).prev().val(count);
            subtotal($(this), count);
            total();

        })
        // 2.减
    $('tbody .sub').click(function() {
        // alert('11')
        var count = $(this).next().val();
        count > 1 ? count-- : 1;
        $(this).next().val(count);
        subtotal($(this), count);
        total();

    })

    // 页面加载完成后填入相应的单价
    var index = $('tbody').find('tr').length; //获取tbody行数
    for (var i = 0; i < index; i++) {
        var a = parseFloat($('tbody').find('tr').eq(i).find('.price').text());
        $('tbody').find('tr').eq(i).find('.subtotalPrice').text(a.toFixed(2));
    }
    $('.count').text(index) //渲染全部商品数量

    // 小计价格
    function subtotal(dom, count) {
        var price = parseFloat(dom.closest('tr').find('.price').text());
        var totalprice = price * count;
        dom.closest('tr').find('.subtotalPrice').text(totalprice.toFixed(2)) //赋值，并保留小数后两位
    }
    //总计价格
    function total() {
        var allprice = 0;
        var selectCount = 0;
        $('tbody input[type=checkbox]').each(function() {
            if ($(this).prop('checked')) {
                allprice += parseFloat($(this).closest('tr').find('.subtotalPrice').text());
                selectCount++;
            }
        })
        $('.totalCount').text(selectCount);
        $('.totalprice').text(allprice.toFixed(2));
    }
    // 删除
    $('.del').click(function() {
            $(this).closest('tr').remove();
            var count = $('.count').text();
            count--;
            $('.count').text(count)
        })
        //删除选中
    $('.deleteCheck').click(function() {
        var count = $('.count').text();
        var len = $("tbody input[type='checkbox']:checked").length;
        $('tbody input[type=checkbox]').each(function() {
            if ($(this).prop('checked')) {
                $(this).closest('tr').remove();
            }
        })
        $('.count').text(count - len);
    })
})