'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('MainCtrl', function ($scope, $location, $http, APIservice) {
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
      getGroupsAndStudents("tcjr1435"); //TODO change the teacherId    this sets$scope.groups
      console.log("InitialGroups");
      console.log($scope.groups)
      
      $scope.tests = getTests(teacherId);
    }

    function getGroupsAndStudents(teacherId){
      APIservice.getData('/groups/'+teacherId).then(function(dataResponse) {
          console.log(dataResponse);
          $scope.groups= dataResponse.data;  

          $scope.activeStudents = [];

          
          // APIservice.getData('/students/teacher/'+teacherId).then(function(dataResponse){
          //   $scope.activeStudents = dataResponse.data;
          // })


          var body={student_email:'manuelpe.icc@gmail.com',
                    full_name:'Nancy Karina'
                    }
          console.log("DOING POST");
          APIservice.postData('/students', body).then(function(dataResponse){
            console.log("Post resposne");
            console.log(dataResponse);
          });
      });
    // return  [{"name":"CS407-A","id":20039, "color":"blue"},{"name":"IDGD-3","id":4974, "color":"red"},{"name":"ICE-2007", "id":98827, "color":"pink"}];
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

    function fetchFromAPI(route,task){
      $http({
        method: 'GET',
        url: route,
      }).then(function successCallback(response) {
           return task();
        }, function errorCallback(response) {

        });
    }

    $scope.currentTest = [];
  });










