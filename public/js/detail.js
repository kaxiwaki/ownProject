$('#header').load('data/header.php');
$('#footer').load('data/footer.php');
$('.bottom').on('click', 'li', function () {
  $(this).toggleClass('active');
});
myvideo.addEventListener('canplaythrough', function () {
  var v = document.getElementById('myvideo').duration;
  $('div.play span').html(Math.floor(v));
});
$('.videoBox').on('click', '>div', function () {
  var video = document.getElementById('myvideo');
  $(this).hide();
  if ($(this).hasClass('play')) {
    video.play();
    $('div.pause').show();
    $(this).hide();
  } else {
    video.pause();
    $('div.play').show();
  }
});
var app = angular.module('hjwApp', ['ng']);
app.run(function ($http) {
  $http.defaults.headers.post = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
app.controller('hjwCtrl', ['$scope', '$http', '$location', function ($scope, $http) {
  $scope.hasLogin=true;
  $http.get('/hjwDetail/' + 1).success(function (data) {
    $scope.list = data[0];
    console.log($scope.list);
    $scope.list.sprice=Number($scope.list.sprice);
  });
  let par={};
  par.sid=sessionStorage['sid'];
  par.uid=sessionStorage['uid'];
  let str='sid='+par.sid+'&uid='+par.uid+'&opayed=1';
  console.log(str);
  $scope.updateCart = function () {
    if(par.uid!==undefined){
    $http.get('/hjwCart?'+str).success(function (data) {
     if(data.msg===2){
       alert('订单出现问题，请刷新后重试！')
     }else{

     }
    })}else{
      $scope.hasLogin=false;
    }
  }
}]);














