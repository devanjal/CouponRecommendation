//loading the 'login' angularJS module
var userid = angular.module('userid', []);
//defining the login controller
userid.controller('userid', function($scope, $http,$window) {

    $scope.submit = function() {
        //alert($scope.userId);
        $http({
            method : "POST",
            url : '/getCouponList',
            data : {
                "userid" : $scope.userId,

            }
        }).success(function(data) {
            //checking the response data for statusCode

            if (data==null) {
             $scope.table=data;

            }

            else
            {
                console.log("Heree");

                $scope.test=data;
              // alert(data.genre_name)
            }
        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };
})
