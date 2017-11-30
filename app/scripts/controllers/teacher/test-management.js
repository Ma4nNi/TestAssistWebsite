'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherTestManagementCtrl
 * @description
 * # TeacherTestManagementCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherTestManagementCtrl', ['$scope','$route','$location','APIservice','authService',function ($scope,$route,$location, APIservice, authService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.activeTest= $scope.tests[0];
    $scope.appliedTestGroups = []
    $scope.groupStudents = []

    console.log($scope.activeTest)
    $scope.activeTestQuestionCounter=1;
    $scope.changeActiveTest = function(testId){
      if(testId=='newTest') {
        $scope.activeTest = {
          "title": "", "confidence":70, "tries": 1, "teacher_id": $scope.teacher_id, "subject": "New Test", "questions": [{'text':'', 'weighting':10}]
        };
        console.log("change active test to", $scope.activeTest);

      }
      for(var i=0; i<$scope.tests.length;i++){
        if($scope.tests[i].test_id==testId){
          $scope.activeTest = $scope.tests[i];
          $scope.activeTestQuestionCounter=1;
          console.log("change active test to", $scope.activeTest);
        }
      }
    }

    $scope.createAppliedTest = function () {
      console.log('ATG: ' + $scope.appliedTestGroups.length)

      for(let i=0; i< $scope.appliedTestGroups.length; i++) {
        console.log('SE ENTRO AL FOR :) y... ' + $scope.appliedTestGroups[i]);
        $scope.applied = {
          "student_email": $scope.appliedTestGroups[i],
          "test_id": '',
          "grade": 0,
          "state": "PENDING",
          "answers": []
        }

        postAppliedTest();
      }
    }


    function postAppliedTest(){
      console.log('HOLA ATESTS');
      var body = {
        teacher: {
          teacher_id: authService.getCurrentUser().teacher_id,
          access_token: authService.getCurrentUser().accessToken
        },
        student_email: $scope.applied.student_email,
        test_id: $scope.activeTest.test_id,
        grade: $scope.applied.grade,
        state: $scope.applied.state,
        answers:  $scope.applied.answers,

      }
      console.log('APPLIED TEST BODY ', body)
      APIservice.postData('/applied_tests', body).then(function(dataResponse){
        console.log("Post response");
        console.log(dataResponse);
        $route.reload();

      });

    }

    $scope.checkValue = function (id, checked, index) {
      if(checked){
        for(let i =0; i<id.length;i++){
          console.log('ENTRO:: ' + id[i])
          $scope.appliedTestGroups.push(id[i])

        }

      }
      else{
        console.log('NO ENTRO:: ' + id)
        var _index = $scope.appliedTestGroups.indexOf(id);
        $scope.appliedTestGroups.splice(_index, 1);
      }
    }


    $scope.changeActiveTest('newTest');

    $scope.postTest = function() {
      var body = {
        teacher_id: authService.getCurrentUser().teacher_id,
        confidence: $scope.activeTest.confidence,
        tries: $scope.activeTest.tries,
        subject: $scope.activeTest.subject,
        title:  $scope.activeTest.title,
        questions: $scope.activeTest.questions
      }
      console.log('BODY ', body)
      APIservice.postData('/tests', body).then(function(dataResponse){
        console.log("Post response");
        console.log(dataResponse);
        $route.reload();

      });
    }

    $scope.putTest = function() {
      var putBody = {
        test_id: $scope.activeTest.test_id,
        teacher_id: $scope.activeTest.teacher_id,
        expression: "set title=:t, subject=:s, questions=:q",
        attributes: {
          ":t": $scope.activeTest.title,
          ":s": $scope.activeTest.subject,
          ":q": $scope.activeTest.questions //TODO question_id
        }
       };

      console.log('BODY:', putBody);
      APIservice.putData('/tests', putBody).then(function(dataResponse){

        console.log("PUT response");
        console.log(dataResponse);
        alert('Your test has been updated');
        $route.reload();
      });
    }

    $scope.changeButton = function(){
      console.log('ID: ', $scope.activeTest.test_id);
      if($scope.activeTest.test_id == null){
        console.log("Entre a la funcion del boton con POST");
        $scope.postTest();
      }
      else{
        console.log("Entre a la funcion del boton con PUT");
        $scope.putTest();
      }
    }



    $scope.addQuestion = function(){
      $scope.activeTest.questions.push({'text':'', 'weighting':10});
    };
    }]);
