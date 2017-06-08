$('#header').load('data/header.php');
$('#footer').load('data/footer.php');
//验证手机号输入是否正确
$(phone).blur(function () {
	var p=$(this).val();
	var regExp=/^(\+86|0086)?\s*1[34578]\d{9}$/ig;
	//发送ajax请求,验证数据库是否已经存在这个号码
	if(!phone.value.match(regExp)){
		$('.phone_yz .cuo').addClass('active').siblings().removeClass('active');
	}else{
    $.ajax({
      type:'POST',
      url:'/user/phone',
      data:{phone:p},
      success:function (data) {
        console.log(data);
        if(data.code===1){
          $('.phone_yz .cuo2').addClass('active').siblings().removeClass('active');
				}else{
          $('.phone_yz .dui').addClass('active').siblings().removeClass('active');
        }
      }
    });
  }
});
//判断密码是否输入正确
$(upwd).blur(function () {
	var up=$(this).val();
	//console.log(up);
	if(up!=''){
    $('.upwd_yz .dui').addClass('active').siblings().removeClass('active');
    upwdrf();
  }else{
    $('.upwd_yz .cuo').addClass('active').siblings().removeClass('active');
  }
})
//判断第二次输入的密码是否输入正确
$(upwdr).blur(function () {
	upwdrf();
})
//判断再次输入密码时是否正确
function upwdrf() {
  if($(upwdr).val()!=''){
    if($(upwdr).val()!=$(upwd).val()){
      $('.upwdr_yz .cuo').addClass('active').siblings().removeClass('active');
    }else{
      $('.upwdr_yz .dui').addClass('active').siblings().removeClass('active');
    }
  }else{
    $('.upwdr_yz .cuo').addClass('active').siblings().removeClass('active');
  }
}
//注册
$('#reg-btn').click(function (e) {
	e.preventDefault();
	var pn=$('#phone').val(),
			pwd=$('#upwd').val(),
			n=$('#uname').val();
	var phone=$('.phone_yz span.dui').hasClass('active');
	var upwd=$('.upwd_yz span.dui').hasClass('active');
	var upwdr=$('.upwdr_yz span.dui').hasClass('active');
	if(phone&&upwd&&upwdr){
		$.ajax({
			type:'POST',
			url:'/user/register',
			data:{uphone:pn,upwd:pwd,uname:n||'tom'+num(1,1000)},
			success:function (data) {
				console.log(data)
				if(data.code===1){
					$('.modal').addClass('active')
				}
      }
		})
	}
})
//注册成功弹出的模态框点击关闭
$('.modal span').click(function () {
	$(this).parent().parent().removeClass('active');
	$(phone).val('');
	$(upwd).val('');
	$(upwdr).val('');
	$(uname).val('');
	$('.dui').removeClass('active')
})
//注册成功弹出的模态框button按钮跳转到登录页面
$('.modal button').click(function (e) {
	e.preventDefault();
	location.href='login.html';
})
//用户没有输入昵称自动生成tom+随机数,的随机数函数
function num(max,min) {
	return Math.floor(Math.random()*(max-min+1)+min);
}