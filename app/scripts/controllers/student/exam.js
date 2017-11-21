'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:StudentExamCtrl
 * @description
 * # StudentExamCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('StudentExamCtrl', ['$scope', 'testService', function ($scope, testService){
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'



    ];
    $scope.currentTest = testService.getCurrentTest();
    $scope.answers = [];

    $scope.submit = function() {
      $('#warningBody').empty();
      $('#warningModal').modal('toggle');
      $('#warningBody').append('Se enviará el examen, no podrá corregir nada ¿Seguro que desea continuar?');
    }

    $scope.acceptExam = function() {   
      for (let i = 0; i < $scope.currentTest.questions.length; i++){
        $scope.currentTest.questions[i]["answer"] = $("#answerBox"+i).val();
        $scope.answers.push({question_id: $scope.currentTest.questions[i].question_id, answer: $("#answerBox"+i).val()});
      }
      testService.setCurrentAnswers($scope.answers);
      $("#warningModal").modal('toggle');
      $("#warningModal").on('hidden.bs.modal', function(e){window.location = '#!/student/finished';});
    }

    $scope.questionHelp = function(index){
      if ($scope.test.questions.data[index].hints > 0) {
        $scope.test.questions.data[index].hints -= 1;
        $('#feedback' + index).show();
        $('#feedback' + index).empty();
        $('#feedback' + index).append('Tu puedes!');
      }
      else{
        $('#feedback' + index).show();
        $('#feedback' + index).empty();
        $('#feedback' + index).append('No mas pistas');
      }

    }
  }]);

