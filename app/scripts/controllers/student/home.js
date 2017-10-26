'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:StudentHomeCtrl
 * @description
 * # StudentHomeCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('StudentHomeCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submit = function() {
      $("#warningBody").empty();
      if ($scope.studentPass){
        var exam = $scope.searchExam($scope.studentPass);
        if(exam == null || exam.length == 0){
          $("#warningModal").modal('toggle');
          $("#warningBody").append("Código incorrecto, intente nuevamente");
          $("#warningAccept").hide();
        }
        //Aqui va la verificacion de la clave de estudiante
        else {
          $("#warningModal").modal('toggle');
          $("#warningAccept").show();
          $("#warningBody").append("Estas a punto de iniciar tu examen, una vez dentro no podrás regresar o volver a intentar. ¿Deseas continuar?");
          $scope.currentExam = exam;
        }
      }
      else{
        $("#warningModal").modal('show');
        $("#warningBody").append("Ingrese un código");
        $("#warningAccept").hide();
      }
    }

    $scope.acceptExam = function() {
      $("#warningModal").modal('toggle');
      $("#warningModal").on('hidden.bs.modal', function(e){window.location = "#!/student/exam";});
    }
  }]);
