//模态框
$('#header').load('data/header.php');
$('#footer').load('data/footer.php');
+function () {
    var order = document.getElementById('banner-left');
    var model = document.getElementById('model');
    var btn = document.querySelector('#plan button');
    order.onclick = function () {
        tanchu();
    };
    function tanchu(){
        model.className='show';
        model.addEventListener('click', function (e) {
            var target = e.target;
            if(target.className==='close'){
                if($('#order>button').html()==='免费预约'){
                    $('#girl').removeClass('hidden').addClass('show');
                    $('#order').removeClass('show').addClass('hidden');
                }else{
                    $(model).removeClass('show');
                    $('#order>button').html('还差一步');
                    $('#m2').removeClass('show').addClass('hidden');
                    $('#m1').removeClass('hidden').addClass('show');
                }
            }
        })
    };
    //页脚按钮弹出模态框
    btn.onclick = function () {
        tanchu();
    }
}();

//导航和页脚
+function () {
    var wstyle = document.getElementById('w-style');
    $(wstyle).on('click','b', function (e) {
        var target = e.target;
        if(target.className!=='current'){
            target.className='current';
            $(target).siblings().removeClass('current')
        }
    })
}();
+function () {
    var wprice = document.getElementById('w-price');
    $(wprice).on('click','b',function(e){
        var target = e.target;
        if(target.className!=='current'){
            target.className='current';
            $(target).siblings().removeClass('current')
        }
    })
}();
+function () {
    var wsort = document.getElementById('w-sort');
    wsort.onclick= function (e) {
        var target = e.target;
        if($(target).hasClass('pre')&&!$(target).hasClass('current')){
            $(target).addClass('current');
            $(target).siblings().removeClass('current');
        }
    }
}();
//页签
+function () {
    $('#foot-page').on("click","a", function (e) {
        e.preventDefault();
        var target = e.target;
        if(!$(target).hasClass('page-current')){
            $(target).addClass('page-current');
            $(target).siblings().removeClass('page-current');
        }
    })
//页签两端
    var next = document.querySelector('#foot-page>b:last-child');
    next.addEventListener('click', function (e) {
        var target = e.target;
        if(target.className==='next'){
            var curr = document.querySelector('.page-current');
            curr.className='';
            curr.nextElementSibling.className='page-current';
        }
    })
}();



//页脚选项
+function () {
    $('.hidden-choose-style').on('click','li', function () {
        $('.select-plan-style>p').html($(this).html());
        $(this).parent().parent().css('height','0');
    })
}();
+function () {
    $('.plan-choose-style').on('mouseenter', function () {
        $('.hidden-choose-style').css('height','260px');
    });
    $('.plan-choose-style').on('mouseleave', function () {
        $('.hidden-choose-style').css('height','0');
    })
}();
+function () {
    $('.hidden-choose-money').on('click','li', function () {
        $('.select-plan-money>p').html($(this).html());
        $(this).parent().parent().css('height','0');
    })
}();
+function () {
    $('.plan-choose-money').on('mouseenter', function () {
        $('.hidden-choose-money').css('height','260px');
    });
    $('.plan-choose-money').on('mouseleave', function () {
        $('.hidden-choose-money').css('height','0');
    })
}();

//切换显示格式
+function () {
    $('.qiehuan>div:first').on('click', function () {
        if($(this).hasClass('huise2')){
            $(this).removeClass('huise2').addClass('hongse2');
            $(this).next().removeClass('hongse1').addClass('huise1');
            $('#ul-parent2').removeClass('hidden').addClass('show');
            $('#ul-parent').removeClass('show').addClass('hidden');
        }
    })
}();
+function () {
    $('.qiehuan>div:last').on('click', function () {
        if($(this).hasClass('huise1')){
            $(this).removeClass('huise1').addClass('hongse1');
            $(this).prev().removeClass('hongse2').addClass('huise2');
            $('#ul-parent2').removeClass('show').addClass('hidden');
            $('#ul-parent').removeClass('hidden').addClass('show');
        }
    })
}();

//模态框按钮
+function () {
    $('#order>button').on('click',function(){
        $(this).html('免费预约');
        $('#m1').removeClass('show').addClass('hidden');
        $('#m2').removeClass('hidden').addClass('show');
    })
}();

//girl
+function () {
    $('#girl button:nth-child(4)').on('click', function () {
        $(this).removeClass('show').addClass('hidden');
        $('#order').removeClass('hidden').addClass('show');
    });
    $('#girl button:last-child').on('click', function () {
        $('#model').removeClass('show').addClass('hidden');
        $('#girl').removeClass('show').addClass('hidden');
        $('#order').removeClass('hidden').addClass('show');
        $('#m1').removeClass('hidden').addClass('show');
        $('#m2').removeClass('show').addClass('hidden');
        $('#order>button').html('还差一步');
    })
}();











