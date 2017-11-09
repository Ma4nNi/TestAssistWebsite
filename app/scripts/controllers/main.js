'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('MainCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('Main ctrl loaded');
    $scope.$on('$routeChangeStart', function(next, current) {
      if($location.url().indexOf('teacher') !== -1){
        $scope.role='teacher';
        console.log('teacher here');
        getTeacherInfo(123123);
      }
      else{
        console.log("I'm a student");
        $scope.role = 'none';
      }
    });

    function getTeacherInfo(teacherId){
      $scope.groups= getGroups(teacherId);

      $scope.activeStudents = getStudents(teacherId);

      $scope.tests = getTests(teacherId);
    }

    function getGroups(teacherId){
     return  [{"name":"CS407-A","id":20039, "color":"blue"},{"name":"IDGD-3","id":4974, "color":"red"},{"name":"ICE-2007", "id":98827, "color":"pink"}];
    }

    function getStudents(teacherId){
      return [{'id':100,'name':'Manuel Puentes', 'email':'mpuentes@cetys.edu.mx','groups':[20039,4974],'lastActivity':'12/23/17'},
      {'id':101,'name':'Allan Castro', 'email':'acastro@cetys.edu.mx','groups':[98827,20039],'lastActivity':'10/10/17'},
      {'id':102,'name':'Fidel Martistro', 'email':'fiddy@cetys.edu.mx','groups':[98827,4974], 'lastActivity':'04/09/16'}];
    }

    function getTests(teacherId){
      return[{"id":1002, "groups":98827, "teacher":"John Doe","name":"Test1","questions":{"amount:":10, "data":[{"text":"What is inheritance?","value":20, "hint": 3},{"text":"Explain whatever is:","value":30, "hint": 3}]}},
        {"id":1003, "groups":20039, "teacher":"John Doe","name":"Test3","questions":{"amount:":20, "data":[{"text":"What is a class?","value":20, "hint": 3},{"text":"Explain what an object is:","value":10, "hint": 3}]}},
        {"id":1039, "groups":4974, "teacher":"John Doe","name":"Tiesto","questions":{"amount:":3, "data":[{"text":"What is a programming language?","value":20, "hint": 3},{"text":"Explain what sharding is:","value":40, "hint": 3}]}},
        {"id":1042, "groups":98827, "teacher":"John Doe","name":"Estructura de Datos","questions":{"amount:":5, "data":[{"text":"¿Qué es un stack?","value":20, "hints": 2},{"text":"¿Qué es un queue?","value":20, "hints": 3}, {"text":"¿Qué es LIFO?","value":20, "hints": 0}, {"text":"¿Qué FIFO?","value":20, "hints": 3}]}}];
    }

    $scope.searchExam = function (examId){
      var exams = getTests(321);
      return exams.filter(
        function(exams){
          return exams.id == examId;
        });
    }

    $scope.currentTest = [];
  });










