'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TestDetailsCtrl
 * @description
 * # TestDetailsCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TestDetailsCtrl', function ($scope, $location, $http, APIservice, testService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var currentTestidUrl = window.location.href.split('/');
    $scope.activeTest = [];
    $scope.activeStudentTest = testService.getStudentAppliedTest();
    $scope.activeStudentName = testService.getStudentName();
    //console.log($scope.activeStudentName);
    for(var i =0; i < $scope.tests.length; i++){
      if ($scope.tests[i].test_id == currentTestidUrl[currentTestidUrl.length-1]){
        $scope.activeTest = $scope.tests[i];
        break;
      }
    }
    console.log($scope.activeTest);
    console.log($scope.activeStudentTest);
  });




