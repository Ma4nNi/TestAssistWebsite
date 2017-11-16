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
    setNewStudentViewModel();
    





    $scope.getGroup = function(groupId){
      return $scope.groupHash[groupId];
    }

    $scope.filterActiveStudents= function(groupName){
      if(groupName==="all"){
        $scope.groupStudents = $scope.allStudents;
        $scope.activeGroupName="all";
      }
      else{
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
      var selectedKeys = Object.keys($scope.selectedGroups);
      for(var i=0;i< selectedKeys.length; i++){
        var currentGroupName = selectedKeys[i];
        var currentGroupActivated = $scope.selectedGroups[currentGroupName];
        if(currentGroupActivated== false){
          continue;
        }
        var putBody=
        {
          name: $scope.studentInput.checkboxes[i].name,
          teacher_id: "tcjr1435",
          expression: "set students=:s",
          attributes: {
            ":s": []
          }
        }
        var currStudents =  $scope.groupHash[putBody.name];
        for(var z=0;z<currStudents.length;z++){
          putBody.attributes[":s"].push(currStudents[z].student_email);
        }
        putBody.attributes[":s"].push($scope.studentInput.email);
        APIservice.putData('/groups/', putBody).then(function(){
            console.log("Successful update on", currentGroupName);
        });
      }



    }
    $scope.selectedGroups={};
    $scope.selectGroups = function(selectGroup){
      console.log(selectGroup);
      if( $scope.selectedGroups[selectGroup]){
        $scope.selectedGroups[selectGroup] = false;
        console.log("removed", selectGroup)
      }
      else{
        $scope.selectedGroups[selectGroup] = true;     
        console.log("added", selectGroup);   
      }
    }

    function setNewStudentViewModel(){
      console.log($scope.groups);
      $scope.studentInput = {
        name:'',
        email:'',
        checkboxes: [],
      };
      console.log($scope.groups.length);
      for(let i=0; i < $scope.groups.length; i++){
        var newObj = {};
        newObj['name'] = $scope.groups[i].name;
        newObj['value'] = false;
        $scope.studentInput.checkboxes.push(newObj);
      }
  
    }

  }]);
