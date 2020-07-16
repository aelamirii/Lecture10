(function () {
'use strict'

angular.module('DIApp', [])

.controller('DIController',['$scope','$filter', function ($scope, $filter) {

$scope.name = "Abdelhay";

$scope.uper = function () {

  var upercase = $filter('uppercase');
  $scope.name = upercase($scope.name);
};


}] );




})();
