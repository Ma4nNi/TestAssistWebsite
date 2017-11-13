'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherStudentManagementCtrl
 * @description
 * # TeacherStudentManagementCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherStudentManagementCtrl', ['$scope','APIservice',function ($scope, APIservice) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("im student manager");
    setInitialGroupView();
    setPagination();
    console.log($scope.groups);



    $scope.getGroup = function(groupId){
      return $scope.groupHash[groupId];
    }

    // //GET TEST AND MAPS
    // for(var i=0; i< $scope.activeStudents.length;i++){
    //   var studentId =  $scope.activeStudents[i].id;
    //   $scope.activeStudents[i].tests = [{"name":"examensito"+studentId, "status":"COMPLETE", id:'128hj83hks'},{"name":"TESTOTE"+studentId, "status":"IN PROGRESS", id:'128hsj83hks'},{"name":"ESTRUCTURA DE DATOS"+studentId, "status":"PENDING", id:'128hj83hksdd'}];

    // }
    // console.log("students ");
    // console.log($scope.activeStudents);

    $scope.filterActiveStudents= function(groupName){
      if(groupName==="all"){
        $scope.groupStudents = $scope.allStudents;
        $scope.activeGroupName="all";
      }
      else{
        console.log("filtering for", groupName);
        $scope.activeGroupName=groupName;
        $scope.groupStudents=  $scope.groupHash[groupName];
      }
      console.log("filtered students for "+groupName, $scope.groupStudents);

    }

    function setPagination(){
      var pageSize=10;
      $scope.studentManagement={}

      $scope.studentManagement.pageAmount= Math.floor(3) + 1;
    }

    function setInitialGroupView(){
      //This function sets the "all" tab view for the first time it's needed
      $scope.activeGroupName="all";
      $scope.groupStudents=[];
      $scope.allStudents = [];
      var existingStudents = {};
      var groupKeys =Object.keys($scope.groupHash);
      for(let i =0; i< groupKeys.length;i++){
        let currentGroupStudents = $scope.groupHash[groupKeys[i]];
        //console.log("currentGroupStudents", currentGroupStudents);
        for(let j=0; j<currentGroupStudents.length;j++){
          if(existingStudents[currentGroupStudents[j].student_email]==null){
            $scope.allStudents.push(currentGroupStudents[j]);
            existingStudents[currentGroupStudents[j].student_email] = 1;
          }
        }
      }
      $scope.groupStudents = $scope.allStudents;
     // console.log("Initial students for", $scope.activeGroupName, $scope.groupStudents);
    }

    $scope.studentInput = {
      name:'',
      email:'',
      checkboxes:[]
    };

    for(var i=0; i < $scope.groups;i++){
      var name = $scope.groups[i].name;
      var checkbox = { name : ''};
      checkboxes.push( );
    }
    $scope.addStudentFromForm = function(){
      console.log($scope.studentInput);
      var body=
      {
        student_email:$scope.studentInput.email,
        full_name:$scope.studentInput.name
      }
      APIservice.postData('/students', body).then(function(dataResponse){
        console.log("Post response");
        console.log(dataResponse);
      });
      
      var putBody = {};
      APIservice.putData('/groups/', putBody).then(function(){

      });

    }
    $scope.selectedGroups={};
    $scope.selectGroups = function(selectGroup){
      console.log(selectGroup);
    }


  }]);
