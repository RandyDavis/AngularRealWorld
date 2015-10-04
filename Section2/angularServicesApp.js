/*** Created by randy on 10/4/15.*/
var myApp = angular.module('myFirstApp', []);

myApp.factory('personService', function() {

    var person = {};

    person.printName = function(firstName, lastName) {
        return firstName + ' ' + lastName;
    }

    return person;
})


myApp.controller('myController', function($scope, personService) {
    $scope.firstName = "Trainee";
    $scope.lastName = "Davis";

    $scope.printName = function() {
        return personService.printName($scope.firstName, $scope.lastName);
    }

})
