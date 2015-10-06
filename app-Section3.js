angular.module('myFirstApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	   $routeProvider
           .when('/about/:param1', {
               //templateUrl:'views/about.html', // Use this one vs template alone
               template: '<h1>I AM THE ABOUT PAGE</h1>',
               controller: 'AboutCtrl'
           })
           .when('/contact/:param1', {
                templateUrl:'views/contact.html',
                controller: 'ContactCtrl'
           })
           .otherwise({redirectTo:'/'})

	   $locationProvider.html5Mode(true);

}])

.factory('personService',  function(){

	 var person = {};

	 person.printName = function(firstName,lastName) {
	 	return firstName + ' ' +lastName;
	 }
	return person;
})
.controller('myController', function($scope, personService) {

    $scope.firstName = 'Trainee';
    $scope.lastName = 'Russo';


    $scope.printName = function () { return personService.printName($scope.firstName,$scope.lastName) }
 ;


} );