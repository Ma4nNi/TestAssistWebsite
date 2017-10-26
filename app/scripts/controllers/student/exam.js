'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:StudentExamCtrl
 * @description
 * # StudentExamCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('StudentExamCtrl', ['$scope', '$location', function ($scope, $location){
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
   
   
   
    ];
    var tests =  [{"id":1002, "teacher":"John Doe","name":"Test1","questions":{"amount:":10, "data":[{"text":"What is inheritance?","value":20},{"text":"Explain whatever is:","value":30}]}},
      {"id":1003, "teacher":"John Doe","name":"Test3","questions":{"amount:":20, "data":[{"text":"What is a class?","value":20},{"text":"Explain what an object is:","value":10}]}},
      {"id":1039, "teacher":"John Doe","name":"Tiesto","questions":{"amount:":3, "data":[{"text":"What is a programming language?","value":20},{"text":"Explain what sharding is:","value":40}]}},
      {"id":1042, "teacher":"John Doe","name":"Estructura de Datos","questions":{"amount:":3, "data":[{"text":"¿Qué es un stack?","value":20},{"text":"¿Qué es un queue?","value":20}, {"text":"¿Qué es LIFO?","value":20}, {"text":"¿Qué FIFO?","value":20}]}}];

    $scope.test = tests[3];

    $scope.submit = function() {
      $("#warningBody").empty();
      $("#warningModal").modal('toggle');
      $("#warningBody").append("Se enviará el examen, no podrá corregir nada ¿Seguro que desea continuar?");
    }

    $scope.acceptExam = function() {
      $("#warningModal").modal('toggle');
      $("#warningModal").on('hidden.bs.modal', function(e){window.location = "#!/student/finished";});
    }

  }]);

