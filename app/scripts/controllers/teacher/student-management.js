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
    hashGroups(); 
   // $scope.activeStudents = $scope.students;




    function hashGroups(){
        $scope.groupHash = {}
        for(var i =0; i<$scope.groups.length;i++){
          $scope.groupHash[$scope.groups[i].id] = $scope.groups[i];
        }
    }
    $scope.getGroup = function(groupId){
      console.log("Get group invoked with", groupId);
      return $scope.groupHash[groupId];
    }
    function filterStudentsBygroup(groupId){
      var currentStudents= [];
      for(var i=0; i<$scope.students;i++){
        if($scope.students[i].groups.indexOf(groupId) > -1){//this means the student IS in the group
            currentStudents.push($scope.students[i]);
        }
      }
      $scope.activeStudents = currentStudents;
    }

  }]);
