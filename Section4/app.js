angular.module('eventApp', ['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    
	$routeProvider.when('/add-event', {
	   	templateUrl:'views/add-event-x.html',
		controller: 'FormCtrl'
	   })
	   .otherwise({redirectTo:'/'});
       
       $locationProvider.html5Mode(true);

}]);