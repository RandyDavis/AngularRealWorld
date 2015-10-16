/*** Created by randy on 10/4/15.*/
angular.module('myFirstApp')

    .controller('myController', function($scope, personService) {
        $scope.firstName = "Trainee";
        $scope.lastName = "Davis";

        $scope.printName = function() {
            return personService.printName($scope.firstName, $scope.lastName);
        }

    })