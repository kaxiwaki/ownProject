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
  $http.get('data/sdetail.php?sid=' + 1).success(function (data) {
    $scope.list = data;
    console.log($scope.list);
    $scope.list.sprice=Number($scope.list.sprice);
  });
  $scope.par={};

  $scope.updateCart = function () {
    $http.get('data/addcart.php?sid=1&uid=1&opayed=1').success(function (data) {
      console.log(data);
    })
  }
}]);














