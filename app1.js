(function () {
'use strict'

angular.module('DIApp', [])

.controller('DIController', DICOntroller);

DICOntroller.$inject = ['$scope', '$filter'];

function DICOntroller($scope, $filter) {

  $scope.name = "Abdelhay";

  $scope.upCase = function () {

    var upper = $filter('uppercase');
    $scope.name = upper($scope.name);

  }

}



})();
