var getData = angular.module('getData', []);
//defining the login controller
getData.controller('getData', function($scope, $http,$window,$location) {
    $scope.test = [];
    $http.get("/get").success(function(data) {
        $scope.test=data;
     //   console.log($scope.test);

    })});
