$('#btn_login').click(function (e) {
  e.preventDefault();
  var itm=$(uname).val();
  var pwd=$(upwd).val();
  console.log(pwd);
  $.ajax({
    type:'get',
    url:'/user/login',
    data:{name:itm,upwd:pwd},
    success:function (data) {
      console.log(data);
      if(data.code===1){
        $('.modal').css('display','block');
        $('.modal_yse').addClass('active');
        sessionStorage['loginUname']=itm;
        sessionStorage['loginUid']=data.uid;
        //location.href='index.html';
      }else{
        $('.modal').css('display','block');
        $('.modal_no').addClass('active');
      }
    }
  })
})

//登录成功之后弹出框处理事件
// $('.modal_yse span').click(function () {
//   $('.modal').css('display','none');
//   $(this).parent().removeClass('active');
//   $('#uname').val('');
//   $('#upwd').val('');
// })
//登录成功后button跳转首页
$('.modal_yse button').click(function (e) {
  e.preventDefault();
  location.href='index.html';
})
//登录失败后弹出框的处理事件
$('.modal_no button').click(function (e) {
  e.preventDefault();
  $('.modal').css('display','none');
  $(this).parent().removeClass('active');
  $('#uname').val('');
  $('#upwd').val('');
})