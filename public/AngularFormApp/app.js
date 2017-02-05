var addressApp = angular.module('AddressApp',['ngRoute']);

addressApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl : 'pages/input.html',
    controller : 'inputController'
  })
  .when('/display',{
    templateUrl : 'pages/display.html',
    controller : 'displayController'
  })
  .when('/input',{
    templateUrl : 'pages/input.html',
    controller : 'inputController'
  })
});

addressApp.service('addressService',function(){
  this.addressList = [];
});

addressApp.controller('inputController',['$scope','$location','addressService',function($scope,$location,addressService){
   $scope.next = function() {
     if($scope.firstName && $scope.lastName)
      angular.element('#addressBlock').show();
   };
   $scope.submit = function() {
     addressService.addressList.push({
       firstName : $scope.firstName,
       lastName : $scope.lastName,
       addressOne : $scope.addressOne,
       addressTwo : $scope.addressTwo,
       city : $scope.city,
       state : $scope.state,
       zipCode : $scope.zipCode
     });
     $location.url('display');

   };

}]);

addressApp.controller('displayController',['$scope','addressService',function($scope,addressService){
  $scope.addressList = addressService.addressList;

}]);
