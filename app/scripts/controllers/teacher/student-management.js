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

    $scope.activeGroupName="all";

    $scope.groupStudents=$scope.activeStudents;
    function hashGroups(){
        $scope.groupHash = {}
        for(var i =0; i<$scope.groups.length;i++){
          $scope.groupHash[$scope.groups[i].id] = $scope.groups[i];
        }
    }
    $scope.getGroup = function(groupId){
      //console.log("Get group invoked with", groupId);
      return $scope.groupHash[groupId];
    }



    $scope.getAnsweredTests = function(studentId){
      return "";
    }


    $scope.filterActiveStudents= function(groupId){
      console.log("filtering students with ", groupId)
      console.log("total students:", $scope.activeStudents)
      //send "all" as a parameter instead of a groupId to get all the students
      if(groupId.toString()==="all"){
        //consoel.log("WE DONEZO")
        $scope.groupStudents =  $scope.activeStudents;
        $scope.activeGroupName="all";        
      }
      else{
        var currentStudents= [];
        $scope.activeGroupName=$scope.groupHash[groupId].name;
        for(var i=0; i<$scope.activeStudents.length;i++){
          //console.log("evaluating: ", $scope.activeStudents[i]);
          //console.log($scope.activeStudents[i].groups, "contain ",groupId,"?")
          if($scope.activeStudents[i].groups.indexOf(groupId) > -1){//this means the student IS in the group
              currentStudents.push($scope.activeStudents[i]);
          }
        }
        //console.log("Filtered students", currentStudents);
          $scope.groupStudents=  currentStudents;          

      }
     
    }


  }]);
