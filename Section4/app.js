angular.module('eventApp', ['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    
	$routeProvider.when('/add-event', {
	   	templateUrl:'views/add-event.html'
	   })
	   .otherwise({redirectTo:'/'});
       
       $locationProvider.html5Mode(true);

}]);