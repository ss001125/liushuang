$(function() {
    $('#myForm').validate({
            success: function(succ) {
                succ.html("<img src='img/勾.png' style='margin-top:-7px;margin-left:7px'>")
            },
            rules: {
                username: {
                    required: true,
                    rangelength: [3, 6]
                },
                password: {
                    required: true,
                    isPassword: true
                },
                confirmPassword: {
                    required: true,
                    equalTo: '#password'
                },
                number: {
                    required: true,
                    phone: true
                }
            },
            messages: {
                username: {
                    required: "<img src='' style='vertical-align:middle'>用户名不能为空",
                    rangelength: "<img src='' style='vertical-align:middle'>长度在3~6位哦"
                },
                password: {
                    required: "<img src='' style='vertical-align:middle'>密码不能为空",
                    isPassword: "<img src='' style='vertical-align:middle'>密码为6-10为数字"
                },
                confirmPassword: {
                    required: "<img src='' style='vertical-align:middle'>请再次输入密码",
                    equalTo: "<img src='' style='vertical-align:middle'>两次密码不一致!"
                },
                number: {
                    required: "<img src='' style='vertical-align:middle'>请输入你的电话号码",
                    phone: "<img src='' style='vertical-align:middle'>请正确输入电话号码!"
                }
            }
        })
        // 验证密码
    jQuery.validator.addMethod("isPassword", function(value, element) {
        var pwd = /^[0-9]{6,10}$/;
        return this.optional(element) || (pwd.test(value));
    }, "");
    // 验证电话号
    jQuery.validator.addMethod("phone", function(value, element) {
        var len = value.length
        var pwd = /^1[3|4|5|7|8]\d{9}$/;
        return this.optional(element) || (len == 11 && pwd.test(value));
    }, "");
    // 出现蒙版
    $('.commit').click(function() {
            $('.model').fadeIn();
        })
        // 关闭蒙版
    $('.content p .no,.top>span:eq(1)').click(function() {
            $('.model').fadeOut()
        })
        // 点击确定按钮跳转页面
    $('.content p .yes').click(function() {
        $(window).attr('location', 'index.html')
    })
})