(function () {
'use strict'

angular.module('DIApp' , [] )

.controller('DIController', DIController);


DIController.$inject = ['$scope', '$filter'];


function DIController($scope, $filter) {

  $scope.name = "Abdelhay";

  $scope.upper = function () {

    var upCAse = $filter('uppercase');
    $scope.name = upCAse($scope.name);

  }


}


})();


//!function(){"use strict";function e(e,n){e.name="Abdelhay",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
