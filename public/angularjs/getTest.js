var getTest = angular.module('getTest', []);
//defining the login controller
getTest.controller('getTest', function($scope, $http,$window,$location) {
    $scope.test = [];
    $http.get("/getTest").success(function(data) {
        $scope.test=data;
        //   console.log($scope.test);

    })});