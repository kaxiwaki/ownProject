$('#menu>li.special').hover(function () {
    $(this).addClass('active').siblings('').removeClass('active');
}, function () {
    $(this).removeClass('active')
})

$('.right_plan').hover(function () {
    $('.left_wid').css('height', '209px');
    $('.ch_pic').show();
}, function () {
    $('.left_wid').css('height', '122px');
    $('.ch_pic').hide();
})


$('.order ul li:nth-child(1)').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.no_order').show().next().hide();
})
$('.order ul li:nth-child(2)').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.juyouhui').show().prev().hide();
})

$('.totop span').click(function () {
    $('body').animate({scrollTop: 0}, 500)
})


setInterval(function () {
    var t2 = $('.talk2');
    //console.log(t2.css('display'));
    if (t2.css('display') === 'none') {
        $('.talk1').css('height', 0).css('opacity', '0');
        $('.talk2').animate({height: '40px', opacity: '1'}, 1000);
        $('.talk2').css('display', 'block');
    } else {
        $('.talk2').css('height', 0).css('opacity', '0');
        $('.talk1').animate({height: '40px', opacity: '1'}, 1000);
        $('.talk2').css('display', 'none');
    }
}, 3000)


jQuery.fn.moveUp = function () {
    var interval = 3000;
    //var duration=500;
    var $ullist = this.children('ul');
    //console.log($ullist);
    var cur = 0;
    var next = 1;//?
    //������ʱ����ÿ��interval�л�һ�ι��
    setInterval(function () {
        lunhuan1();
    }, interval)
    function lunhuan1() {
        //console.log(cur,next);
        $ullist.eq(cur).css({bottom: '100%'}).removeClass('active');
        $ullist.eq(next).addClass('active').css({bottom: '100%'}).animate({bottom: '0'});
        cur = next;
        next++;
        if (next >= $ullist.length) {
            next = 0;
        }

    }
}
$('.webinfo').moveUp();

jQuery.fn.carousel = function () {
    var interval = 3000;
    var duration = 500;
    var $imglist = this.children('img');
    var cur = 0;
    var next = 1;
    setInterval(function () {
        lunhuan();
    }, interval);
    function lunhuan() {
        $imglist.eq(cur).animate({left: '-100%'}, duration, function () {
            $(this).removeClass('active');
        });
        $imglist.eq(next).addClass('active').css('left', '100%').animate({left: '0'});
        cur = next;
        next++;
        if (next >= $imglist.length) {
            next = 0;
        }
    }
}
$('#banner').carousel();

jQuery.fn.carousel1 = function () {
    var duration = 500;
    var $imglist = this.find('img');
    var $lilist = this.find('li');
    var cur = 0;
    var next = 1;

    $lilist.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            var i = $lilist.index(this);
            next = i;
            lunhuan();
        }
    });
    // $('.prev').click(function(){
    //
    //     $(this).unbind('click');
    //     next=next-1;
    //     if(next<0){
    //         next=3;
    //     }
    //     lunhuan(1);
    // });
    // $('.next').click(function(){
    //
    //     $(this).unbind('click');
    //     next=cur+1;
    //     if(next>3){
    //         next=0;
    //     }
    //     lunhuan(2);
    // });
    function slideLeft() {
        $(this).unbind('click');
        let that = $(this);
        if (next < 1) {
            next = 3;
        }else{next = next - 1;}
        lunhuan(that, 1);
    }
    function slideRight() {
        $(this).unbind('click');
        let that = $(this);
        if (next > 2) {
            next = 0;
        }else{next = cur + 1;}
        lunhuan(that, 2);
    }
    $('.prev').on('click', slideLeft);
    $('.next').on('click', slideRight);
    function lunhuan(that, nu) {
        $lilist.eq(next).addClass('active').siblings('.active').removeClass('active');
        $imglist.eq(cur).animate({left: '-100%'}, duration, function () {
          $(this).removeClass('active')
        });
        $imglist.eq(next).addClass('active').css('left', '100%').animate({left: '0'}, duration, function () {
            if (nu === 1) {
                that.on('click', slideLeft)
            } else if (nu === 2) {
                that.on('click', slideRight)
            }
        });
        cur = next;
        if (next >= $imglist.length) {
            next = 0;
        }
    }
}
$('.p_left').carousel1();
$('.bottom_son .choice').click(function () {
    $(this).addClass('active');
    $(this).children('ul.cj').addClass('active');
})
$('.bottom_son .choice').click(function () {
    $(this).addClass('active').css('z-index', '30');
    $(this).children('.hc').css('display', 'block');
})

var $li = $('.select_list li');
var $div = $('.p_right_bottom>.bottom_son');
$('.select_list li').click(function (e) {
    e.preventDefault();
    var i = $li.index(this);
    $(this).addClass('active').siblings().removeClass('active');
    $($div).eq(i).removeClass('s1').siblings().addClass('s1');
})
var $li1list = $('ul.zx li');
var $ullist = $('ul.news_list');
$('ul.zx li').click(function (e) {
    e.preventDefault();
    var i = $li1list.index(this);
    $(this).addClass('active').siblings().removeClass('active');
    $($ullist).eq(i).removeClass('hide').siblings('ul.news_list').addClass('hide');
});


jQuery.fn.carousel2 = function () {
    var duration = 3000;
    var $divlist = $('#tableitem div');
    var cur = 0;
    var next = 1;
    setInterval(function () {
        lunhuan();
    }, 3050)
    function lunhuan() {
        if ($divlist.eq(0).css('top') == '0px') {
            $divlist.eq(0).animate({top: '-100%'}, duration, function () {
                $(this).css('top', '100%')
            });
            $divlist.eq(1).css('top', '100%').animate({top: '0'}, duration);
        }
        else {
            $divlist.eq(0).animate({top: '0'}, duration);
            $divlist.eq(1).css('top', '0').animate({top: '-100%'}, duration, function () {
                $(this).css('top', '100%');
            })
        }

    }
}
$('#tableitem').carousel2();


+function () {
    var uname = sessionStorage['loginUname'];
    // console.log(uname);
    if (uname) {
        $('.u_login').html(`<a href="usercanter.html">欢迎回来 ${uname} 个人中心<a/>`)
    }
}()
