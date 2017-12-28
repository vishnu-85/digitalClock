var app = angular.module('timeApp', []);
app.controller('timeCtrl', function($scope, $interval) {
  $scope.theTime = new Date().toLocaleTimeString();
  var date = new Date();
	$scope.currentDate=date.toDateString();

  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});