$('#header').load('data/header.php');
$('#footer').load('data/footer.php');
+function () {
  let clickLf = 0,
    lis = $('.box-body .active').children();
  $('.wed-top-slide li').hover(function () {
    $(this).children('.pList,.imgList').addClass('hover');
  }, function () {
    $(this).children('.pList,.imgList').removeClass('hover');
  });
  function checkLf() {
    rebuildUl(clickLf, lis);
    let rLeft = parseInt($('.mask-left').css('width'));
    $('.box-body ul').css('left', `${rLeft - 1800}px`);
  }

  $(function () {
    lis = $('.box-body .active').children();
    checkLf();
  });
  $(window).resize(function () {
    lis = $('.box-body .active').children();
    checkLf();
  });
  $(".box-tag").on('click', 'a', function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass('active')) {
      $(this).parent().addClass('active').siblings('.active').removeClass('active');
      let $ulList = $('.box-body ul'),
        $as = $('.box-tag a');
      let n = $as.index(this);
      $ulList.eq(n).addClass('active').siblings('.active').removeClass('active');
      lis = $('.box-body .active').children();
      clickLf = 0;
      checkLf();
    }
  });
  function rebuildUl(cur, lis) {
    let wait = 0,
      prev = 0,
      next = 0,
      str = '';
    switch (cur) {
      case 0:
        wait = 2;
        next = 1;
        prev = 3;
        break;
      case 1:
        wait = 3;
        next = 2;
        prev = 0;
        break;
      case 2:
        wait = 0;
        next = 3;
        prev = 1;
        break;
      case 3:
        wait = 1;
        next = 0;
        prev = 2;
        break;
    }
    str = `	<li>${lis.eq(wait).html()}</li>
					<li>${lis.eq(prev).html()}</li>
					<li>${lis.eq(cur).html()}</li>
					<li>${lis.eq(next).html()}</li>
					<li>${lis.eq(wait).html()}</li>
					`;
    $('.box-body .active').html(str);
    console.log(wait, prev, cur, next, wait);
  }

  function slide(n,that) {
    let $acu = $('.box-body .active');
    that.unbind('click');
    checkLf();
    let lf = parseInt($acu.css('left'));
    $acu.animate({left: lf + n * 900}, 200,function () {
      if(n==-1){
        that.on('click',moveRight)
      }else{
        that.on('click',moveleft)
      }
    });
  }
  function moveLeft() {
    let that=$(this);
    slide(1,that);
    clickLf > 0 ? clickLf-- : clickLf = 3;
  }
  function moveRight() {
    let that=$(this);
    slide(-1,that);
    clickLf < 3 ? clickLf++ : clickLf = 0;
  }
  $('.mask-right').on('click',moveRight);
  $('.mask-left').on('click',moveLeft);
  $('.zpff>ul>li').hover(function () {
    "use strict";
    $(this).children('span').animate({top: -85}, 300);
  }, function () {
    "use strict";
    $(this).children('span').animate({top: -30}, 300);
  });
  let $lis = $('.ihwp li');
  $('.pyb').on('mouseenter', 'li', function () {
    let i = $lis.index(this) + 1;
    $(this).children('span').css('background', `url("images/gou${i}.png")`);
  });
  $('.pyb').on('mouseleave', 'li', function () {
    let i = $lis.index(this);
    $(this).children('span').css('background', `url("images/gou.png")`);
  });
}();