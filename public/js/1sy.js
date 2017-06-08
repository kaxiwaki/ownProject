

//页面加载成功突出显示的半透明背景框，从下面滑动上来
$(function () {
  $("#tc").animate({"top":"0"},1000)
});

//
$("div.tc ").on('click','div',function () {
  $(".zt ul").animate({"left":0},800);
  $(".zt .zt_right").animate({"top":0},1200);
  $(".zt button").animate({"bottom":0},1500);
  $("#tc").hide();



  //主体02 右边点击事件
  $(".zt_02_right ul").on('click','li',function () {
    var n=$(this).data('price');
    var m=$(this).data('price1');
    var input=$('.zt_02 input');
    $(input[0]).val(n);
    $(input[1]).val(m);
    var son=$(this).find("div.cs_li_click");
    if($(son).hasClass('active')){
      $(son).removeClass('active')
    }else{
      $(son).addClass('active').parent().siblings().children('.active').removeClass('active');
    }
  })
//----------------
//主体 03点击事件 加class active 显示黑色背景
  $("div.zt_03_left").on('click','div.zt_03_left_11',function () {
    var n=$(this).data('price');
    var m=$(this).data('price1');
    var input=$('.zt_03 input');
    $(input[0]).val(n);
    $(input[1]).val(m);
    var div=$(this).children('.zt_03_right_click');
    console.log(div);
    if(div.hasClass('active')){
      div.removeClass('active')
    }else{
      div.addClass('active').parent().siblings().children('.active').removeClass('active');
    }
  })


  //---------
  //点击最下面的li列表，滑动背景，和主体内容
  var Lilist=$("#foot li");
  $("#foot ul").on('click',"li",function () {
    var n=Lilist.index(this);
    //$("#qb").animate({"background-position":-n*1920-1920},500);
    //$("#foot ul").animate({"background-position":-520+n*94},500);
    var divlist=$("div.dh");
    //找到当前显示主体的儿子们
    var son=divlist.eq(n).children();
    ddd(son);
    //遍历。如果是这个儿子就。。。如果是那个就。。。
    var input=divlist.eq(n).find('input');
    if(input.val()===""){
      //$(this).siblings().off('click');
      //console.log('kong')
    }else{
      divlist.eq(n).addClass('active').siblings('div.active').removeClass('active');
      $("#qb").animate({"background-position":-n*1920-1920},500);
      $("#foot ul").animate({"background-position":-520+n*94},500);
      $(this).css('cursor','pointer');
    }
    //divlist.eq(n).addClass('active').siblings('div.active').removeClass('active');
  });

//点击当前主体上的那个button
  var btnlist=$('.dh>button');
  console.log(btnlist);
  $('.dh').on('click','button',function () {
    var n=btnlist.index(this);
    console.log(n);
    //$("#qb").animate({"background-position":-n*1920-1920*2},500);
    //$("#foot ul").animate({"background-position":-520+(n+1)*94},500);
    var div=$(this).parent('div');
    var son=div.next().children();
    var input=div.find('input');
    if(input.val()===""){
      console.log('kong');
    }else{
      div.next().addClass('active').siblings('div.active').removeClass('active');
      $("#qb").animate({"background-position":-n*1920-1920*2},500);
      $("#foot ul").animate({"background-position":-520+(n+1)*94},500);
      ddd(son)
    }
    //div.next().addClass('active').siblings('div.active').removeClass('active');

    //console.log(son);
    //遍历。如果是这个儿子就。。。如果是那个就。。。
    //ddd(son);
  });


//页面主体小件动画函数
  function ddd(son){
    for(var i=0;i<son.length;i++){
      if(son[i].className===("zt_01_left")){
        //console.log(son[i]);
        $(son[i]).animate({"top":0},500);
      }
      if(son[i].className===("zt_01_right")){
        $(son[i]).animate({"top":0},1000);
      }
      if(son[i].className===("zt_01_btn")){
        $(son[i]).animate({"right":120},1500)
      }
      if(son[i].className===("zt_02_left")){
        $(son[i]).animate({"bottom":180,"left":0},700)
      }
      if(son[i].className===("zt_02_right")){
        $(son[i]).animate({"right":-10,"top":0},1000)
      }
      if(son[i].className===("zt_02_btn")){
        $(son[i]).animate({"right":120,"bottom":0},1500)
      }
      if(son[i].className===("zt_03_left")){
        $(son[i]).animate({"top":0,"left":0},800)
      }
      if(son[i].className===("zt_03_right")){
        $(son[i]).animate({"top":0,"right":0},1000)
      }
      if(son[i].className===("zt_03_button")){
        $(son[i]).animate({"bottom":80,"right":160},1500)
      }
    }
  }

  //第一个主体图片的点击效果
  $(".zt ul").on('click','li',function () {
    var div1=$(this).find("div");
    var n=$(this).data('price');
    var m=$(this).data('price1');
    var input=$('.zt .zt_right_bottom input');
    $(input[0]).val(n);
    $(input[1]).val(m);
    if($(div1).hasClass('active')){
      div1.removeClass('active')
    }else{
      div1.addClass('active').parent().siblings().children(".active").removeClass("active");
    }
  })

//-----
  //第二主主体 图片点击
  $(".zt_01_right ul").on('click','li',function () {
    var div1=$(this).children('div');
    var n=$(this).data('price');
    var m=$(this).data('price1');
    var input=$('.zt_01 input');
    $(input[0]).val(n);
    $(input[1]).val(m);
    if($(div1).hasClass('active')){
      div1.removeClass('active')
    }else{
      div1.addClass('active').parent().siblings().children('.active').removeClass('active');
    }

    //div1.addClass('active').parent().siblings().children('.active').removeClass('active');
    //判断当前有几个div有.active如果有两个就不能在点
  });



})

