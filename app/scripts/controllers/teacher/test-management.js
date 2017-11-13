'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherTestManagementCtrl
 * @description
 * # TeacherTestManagementCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherTestManagementCtrl', ['$scope','$route','$location','APIservice', function ($scope,$route,$location, APIservice) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.activeTest= $scope.tests[0];
    console.log($scope.activeTest)
    $scope.activeTestQuestionCounter=1;

    $scope.changeActiveTest = function(testId){
      if(testId=='newTest') {
        $scope.activeTest = {
          "title": "", "confidence":70, "tries": 1, "teacher_id": $scope.teacher_id, "subject": "New Test", "questions": [{'text':'', 'weighting':10}]
        };
      }
      for(var i=0; i<$scope.tests.length;i++){
        if($scope.tests[i].test_id==testId){
          $scope.activeTest = $scope.tests[i];
          $scope.activeTestQuestionCounter=1;
          console.log("change active test to", $scope.activeTest);
        }

      }
    }
    $scope.changeActiveTest('newTest');

    $scope.postTest = function() {
      var body = {
        teacher_id: 'tcjr1435', //TODO
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

    $scope.addQuestion = function(){
      $scope.activeTest.questions.push({'text':'', 'weighting':10});
    }






  }]);
