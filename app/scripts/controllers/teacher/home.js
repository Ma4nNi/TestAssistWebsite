'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherHomeCtrl
 * @description
 * # TeacherHomeCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherHomeCtrl', ['$scope',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.appliedTest=$scope.tests;
    $scope.group=$scope.groups;

    $scope.getStudents = function(){
      $scope.students = $scope.allStudents;
    };


  }]);
