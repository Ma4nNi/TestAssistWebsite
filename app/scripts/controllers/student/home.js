'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:StudentHomeCtrl
 * @description
 * # StudentHomeCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('StudentHomeCtrl', ['$scope', 'testService', function ($scope, testService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submit = function() {
      $('#warningBody').empty();
      if($scope.studentPass) {
        $scope.searchTestByCode($scope.studentPass)
        .then(function(response) {
          let test = response.test;
          if(Object.keys(test).length === 0) {
            $('#warningModal').modal('toggle');
            $('#warningBody').append('Código incorrecto, intente nuevamente');
            $('#warningAccept').hide();
          }
          else {
            $scope.currentTest = test;
            $('#warningModal').modal('toggle');
            $('#warningAccept').show();
            $('#warningBody').append('Estas a punto de iniciar tu examen, una vez dentro no podrás regresar o volver' +
              ' a intentar. ¿Deseas continuar?');
            testService.setCurrentTest($scope.currentTest);
            testService.setPasscode($scope.studentPass);
            testService.setCurrentEmail(response.email)
          }
        });
      } else{
        $('#warningModal').modal('show');
        $('#warningBody').append('Ingrese un código');
        $('#warningAccept').hide();
      }
    };

    $scope.acceptExam = function() {
      $('#warningModal').modal('toggle');
      $('#warningModal').on('hidden.bs.modal', function(e){
        window.location = '#!/student/exam';
      });
    };
  }]);
