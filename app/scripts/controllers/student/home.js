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
        //Aqui va la verificacion de la clave de estudiante
        $("#warningModal").modal('toggle');
        $("#warningAccept").show();
        $("#warningBody").append("Estas a punto de iniciar tu examen, una vez dentro no podrás regresar o volvero a intentar. ¿Deseas continuar?");
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
