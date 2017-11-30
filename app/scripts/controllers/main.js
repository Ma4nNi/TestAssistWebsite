'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('MainCtrl', function ($scope, $location, $http, $q, APIservice, authService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getAllStudents;

    //console.log('Main ctrl loaded');
    $scope.$on('$routeChangeStart', function(next, current) {
      validateUser();
    });


    function validateUser(){
      var currentUser = authService.getCurrentUser();
      $scope.currentUser = currentUser;
      if(currentUser.full_name != "anonymous"){
        $scope.role='teacher';
        getTeacherInfo(currentUser.teacher_id);
      }
      else{
        $scope.role = 'none';
      }

    }

    function validateScopeContent(){

    }

    function getTeacherInfo(teacherId){
      console.log("Getting info with teacherId", teacherId);
      validateScopeContent();
      getGroupsAndStudents(teacherId); // TODO change the teacherId this sets$scope.groups
      getTests(teacherId);
    }



    function getGroupsAndStudents(teacherId){
      APIservice.getData('/groups/'+teacherId).then(function(dataResponse) {
          //console.log(dataResponse);
          $scope.groups= dataResponse.data;
          $scope.groupHash = {};
          $scope.studentHash={};
          hashGroups(teacherId);


          // console.log('hashedGroup');
          // console.log($scope.groupHash);

          console.log('STUDENTS: ',  $scope.studentHash);

      });
    }
    function hashGroups(teacherId){
      // console.log($scope.groups);
      for(let i=0; i<$scope.groups.length; i++){
        let group = $scope.groups[i];
        try{
          APIservice.getData('/students/group?group_name='+group.name+'&teacher_id='+teacherId).then(function(groupStudentsResponse){
            $scope.groupHash[group.name] = groupStudentsResponse.data;
            $scope.getAllStudents = groupStudentsResponse.data
            console.log('GET ALL STUDENTS: ', $scope.getAllStudents);
            for(let j=0; j< $scope.groupHash[group.name].length; j++){
              let currentstudent = $scope.groupHash[group.name][j]['student_email'];
              if( $scope.studentHash[currentstudent]==null){
                $scope.studentHash[currentstudent]=[];
              }
              $scope.studentHash[currentstudent].push(group.name);
            }
            if(i == $scope.groups.length-1){
              // console.log('scope studenthash is: ');
              // console.log($scope.studentHash);
            }
          });
        }
        catch(e){
          console.log('error in a http request');
        }
      }
    }

    function getTests(teacherId){
      console.log('Entrando a get Test YEI');
      APIservice.getData('/tests/teacher/'+teacherId).then(function(dataResponse){
        $scope.tests = dataResponse.data;

      });


   }

    // function getAppliedTests(test){
    //   for(let i =0; i< test.length; i++){
    //     APIservice.getData('/applied_tests/test/' + test[i].test_id).then(function (dataResponse) {
    //       $scope.at = dataResponse;
    //     });
    //   }
    //
    // };


    $scope.searchTestByCode = function(code) {
      return $q(function(resolve, reject) {
        APIservice.getData('/tests/code/' + code).then(function (dataResponse) {
          if (dataResponse) {
            resolve(dataResponse.data);
          } else {
            reject('No');
          }
        });
      });
    };
  });










