'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherStudentManagementCtrl
 * @description
 * # TeacherStudentManagementCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherStudentManagementCtrl', ['$scope',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("im student manager");
    var pageSize=10;
    $scope.studentManagement={}

    $scope.studentManagement.pageAmount= Math.floor($scope.activeStudents.length/pageSize) + 1;
  }]);
