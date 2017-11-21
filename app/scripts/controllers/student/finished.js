'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:StudentFinishedCtrl
 * @description
 * # StudentFinishedCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('StudentFinishedCtrl', ['$scope', 'testService', 'APIservice', function ($scope, testService, APIservice) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.currentTest = testService.getCurrentTest();
    $scope.answers = testService.getCurrentAnswers();
    var code = testService.getPasscode();
    var email = testService.getCurrentEmail();
    var grade = 100;
    var finishedTest = {
      "test_id": $scope.currentTest.test_id,
      "student_email": email,
      "expression": "set grade=:g, current_state=:s, answers=:a",
      "attributes": {
        ":g": grade,
        ":s": "ANSWERED",
        ":a": $scope.answers
      }
    };

    APIservice.putData('/applied_tests', finishedTest).then(function(dataResponse){
      
              console.log("PUT response");
              console.log(dataResponse);
              alert('Your test has been updated');
            });
  }]);
