//loading the 'login' angularJS module
var reco = angular.module('reco', []);
//defining the login controller
reco.controller('reco', function($scope, $http,$window) {
    $scope.categories = [


        { id: 2, name: "San Franscisco"},
        { id: 1, name: "San Jose"},
        { id: 3, name: "New York"},


    ];
    $scope.dest = [
        { id: 1, name: "San Jose"},
        { id: 2, name: "San Franscisco"},
        { id: 3, name: "New York"},


    ];


    $scope.itemSelected = $scope.categories[0];

    $scope.onCategoryChange = function () {

    }
    $scope.item=$scope.dest[0];
    $scope.onDestChange = function () {
    }
    $scope.invalid_login = true;
    $scope.validlogin = true;
    $scope.myData = [];
    $scope.submit = function() {

        $http({
            method : "POST",
            url : '/data',
            data : {
                "username" : $scope.itemSelected.name,
                "password" : $scope.item.name
            }
        }).success(function(data) {
            //checking the response data for statusCode
            if (data.statusCode == 401) {
                $scope.invalid_login = false;
                $scope.validlogin = true;

            }

            else
            {

                $scope.dome=data;


                $scope.validlogin = false;
                $scope.invalid_login = true;

                $scope.myData.push($scope.dome);
                $scope.dome="";


            }
        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };
})
