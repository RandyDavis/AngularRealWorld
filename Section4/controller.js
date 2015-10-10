angular.module('eventApp')
.controller('FormCtrl', function($scope) {

   $scope.event = [];

   $scope.submitForm = function(form) {
      $scope.event.push(form);
      console.log($scope.event);
   }
} )
