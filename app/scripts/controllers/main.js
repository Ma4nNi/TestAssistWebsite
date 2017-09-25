'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('MainCtrl', ['$scope','$location',function ($scope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('Main ctrl loaded');
    $scope.$on('$routeChangeStart', function(next, current) { 
      if($location.url().indexOf('teacher') !== -1){
        $scope.role='teacher';
        console.log('teacher here');
      }
      else{
        $scope.role = 'none';
      }
    });

  }]);
