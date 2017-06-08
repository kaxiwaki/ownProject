(function (a) {
  a.fn.hunjuDate = function (l) {
    var c = {
      version: "0.1",
      author: "zhaowei",
      marryHotelId: "",
      marryLocationId: "",
      marryYearId: "",
      marryDateId: "",
      marryDaysToId: "",
      marryDateAttrStr: "dateStr",
      hotelName: "",
      selectShow: true,
      callback: function () {
      }
    };
    var b = a.extend(c, l);
    var h = a(this);
    var f = a("#" + b.marryHotelId).html();
    var j = a("#" + b.marryLocationId).html();
    var i = a("#" + b.marryYearId).html();
    var e = a("#" + b.marryDateId).html();
    var k = function (p, r) {
      var q = "-";
      var o;
      var n;
      var t;
      o = p.split(q);
      n = r.split(q);
      var s = new Date(o[0] + "-" + o[1] + "-" + o[2]);
      var m = new Date(n[0] + "-" + n[1] + "-" + n[2]);
      t = parseInt(Math.abs(s - m) / 1000 / 60 / 60 / 24);
      return t
    };
    var d = function () {
      var n = new Date();
      var q = n.getFullYear();
      var r = n.getMonth() + 1;
      var m = n.getDate();
      var p = n.getHours();
      var s = n.getMinutes();
      var o = q + "-";
      if (r < 10) {
        o += "0"
      }
      o += r + "-";
      if (m < 10) {
        o += "0"
      }
      o += m;
      return o
    };
    var g = '<div class="change_marry_date_layer" id="hunjuDateDiv">   <div class="change_date_content">       <div class="close_bt"></div>       <div class="new_lr_dt_right">           <div class="date_title clearfix">               <div class="date_title_font fl">选择您的婚礼日期</div>               <div class="date_title_font fl ml15" id="date_result"></div>               <div class="date_years fr">                   <div class="current_year">2014</div>                   <ul class="years_list">                       <li class="lr_year" data-id="2015">2015</li>                       <li class="lr_year" data-id="2016">2016</li>                       <li class="lr_year" data-id="2017">2017</li>                   </ul>               </div>           </div>           <div class="date_month">               <ul class="clearfix">                   <li class="lr_month" data-id="1">1月</li>                   <li class="lr_month" data-id="2">2月</li>                   <li class="lr_month"  data-id="3">3月</li>                   <li class="lr_month" data-id="4">4月</li>                   <li class="lr_month" data-id="5">5月</li>                   <li class="lr_month" data-id="6">6月</li>                   <li class="lr_month" data-id="7">7月</li>                   <li class="lr_month" data-id="8">8月</li>                   <li class="lr_month" data-id="9">9月</li>                   <li class="lr_month" data-id="10">10月</li>                   <li class="lr_month" data-id="11">11月</li>                   <li class="lr_month" data-id="12">12月</li>               </ul>           </div>           <div class="date_day">               <table class="day_table" cellspacing="0">               </table>           </div>       </div>       <div class="select_date_location clearfix">           <div class="select_box ' + (b.selectShow ? "" : "displayNone") + '">               <div class="location_box fl ' + (b.hotelName == "" ? "" : "hidden") + '">                   <span class="current_city" id="location_val">南京</span><img class="sj_gray" src="/static/img/individual/gray_sanjiao.png">                   <div class="all_city"></div>               </div>               <div class="marry_hotel_box fl ' + (b.hotelName == "" ? "" : "ml_54") + '">                   <input type="text" placeholder="输入酒店名称" id="hotel_val" value="' + b.hotelName + '">               </div>           </div>           <button class="submit" id="saveBt">确定</button>       </div>   </div></div>';
    if (typeof(a("#hunjuDateDiv")) != "undefined") {
      a("#hunjuDateDiv").remove()
    }
    a("body").append(g);
    a.getScript("/static/js/hunju/lr_date.js", function () {
      a().hunjuDateWidget()
    });
    a(".change_marry_date_layer .close_bt").click(function () {
      a("#hunjuDateDiv").addClass("displayNone")
    });
    a(".change_marry_date_layer #saveBt").click(function () {
      a("#" + b.marryHotelId).html(a("#hotel_val").val());
      a("#" + b.marryLocationId).html(a("#location_val").html());
      if (a().hunjuDateWidget.getResult() != null && a().hunjuDateWidget.getResult() != "") {
        var n = a().hunjuDateWidget.getResult().substring(0, 4);
        var m = a().hunjuDateWidget.getResult().substring(5).replace("-", ".");
        a("#" + b.marryYearId).html(n);
        a("#" + b.marryDateId).html(m);
        a("#" + b.marryDaysToId).html("" + k(a().hunjuDateWidget.getResult(), d()));
        a("#" + b.marryDateId).attr(b.marryDateAttrStr, a().hunjuDateWidget.getResult())
      }
      b.callback(a().hunjuDateWidget.getResult());
      a("#hunjuDateDiv").hide()
    })
  }
})(jQuery);