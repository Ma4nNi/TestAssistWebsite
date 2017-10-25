'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherTestManagementCtrl
 * @description
 * # TeacherTestManagementCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherTestManagementCtrl', ['$scope','$location',function ($scope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.activeTest= $scope.tests[0];
    console.log($scope.activeTest)
    $scope.activeTestQuestionCounter=1;

    $scope.changeActiveTest = function(testId){
      for(var i=0; i<$scope.tests.length;i++){
        if($scope.tests[i].id==testId){
          $scope.activeTest = $scope.tests[i];
          $scope.activeTestQuestionCounter=1;          
          console.log("change active test to", $scope.activeTest)
        }
      }
    }
  }]);
