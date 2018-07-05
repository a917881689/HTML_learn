//+function(){}(jQuery)
// $(function () {} 让页面先加载,在加载JS
$(function () {
    $('#uname').focus(function () {
        $uname_s = $('#uname_s');
        $uname_s.text('用户名必须是4~16位');
        $uname_s.css({"color":"grey"})
    });
    $('#uname').blur(function () {
        // 获取非空验证,正则验证
        var $uname = $(this).val();
        if ('' == $uname) {
            $uname_s = $('#uname_s');
            $uname_s.text('用户名不能为空');
            $uname_s.css({"color":"red"});
            return;
        }
        var $reg_uname = /^.{4,16}$/;
        if (!$reg_uname.test($uname)) {
            $uname_s.text('×用户名格式错误');
            $uname_s.css({"color":"blue"});
            return;
        }
        $uname_s.text('');
    });
    $('#pwd').focus(function () {
        $('#pwd_s').text('');
    });
    $('#pwd').blur(function () {
        var $pwd = $(this).val();
        if ('' == $pwd) {
            $pwd_s = $('#pwd_s');
            $pwd_s.text('×密码不能为空');
            $pwd_s.css({"color":"red"});
            return;
        }
        $('#pwd_s').text('');
    });
// 登录按钮
    $('#login').click(function () {
        var $info = $('input:text');
        var $reg_login = [/^.{4,16}$/,/^.+$/];
        for (var index = 0;index < $info.length;index++) {
            if ('' == $info.eq(index).val() || !$reg_login[index].test($info.eq(index).val())) {
                $info.eq(index).blur();
                return;
            }
        }
        alert("提交");
        $('form').submit();
    });
})


