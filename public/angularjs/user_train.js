var user_train = angular.module('user_train', []);
//defining the login controller
user_train.controller('user_train', function($scope, $http,$window,$location) {
    $scope.test = [];
    $http.get("/user_train").success(function(data) {
        $scope.test=data;
        //   console.log($scope.test);

    })});