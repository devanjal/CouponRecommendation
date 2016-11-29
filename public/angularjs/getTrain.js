var getTest = angular.module('getTrain', []);
//defining the login controller
getTest.controller('getTrain', function($scope, $http,$window,$location) {
    $scope.test = [];
    $http.get("/getTrain").success(function(data) {
        $scope.test=data;
        //   console.log($scope.test);

    })});