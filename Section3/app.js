angular.module('myFirstApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.when('/about', {
			templateUrl:'/Section3/views/about.html'
		})
			.when('/contact', {
				templateUrl:'/Section3/views/contact.html'
			})
			.otherwise({redirectTo:'/Section3/'})

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


//angular.module('myFirstApp', ['ngRoute'])
//
//	.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
//		$routeProvider
//			.when('/about', {
//				templateUrl: 'views/about.html'
//			})
//			.when('/contact', {
//				templateUrl: 'views/contact.html'
//			})
//			.otherwise({redirectTo: '/'})
//
//			//$locationProvider.html5Mode(true);
//	}])
//
//	.factory('personService',  function(){
//
//		 var person = {};
//
//		 person.printName = function(firstName,lastName) {
//			return firstName + ' ' +lastName;
//		 }
//		return person;
//	})
