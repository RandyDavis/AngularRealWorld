var myApp = angular.module('myFirstApp', []);

    myApp.controller ('myController', ["$scope", function($scope) {
        $scope.firstName = 'Trainee';
        $scope.lastName = 'Davis';

        $scope.printName = function() {
            return $scope.firstName + ' ' + $scope.lastName;
        }
    }]);