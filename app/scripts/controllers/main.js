'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('MainCtrl', ['$scope','$location',function ($scope,$location) {
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
      return [{'name':'Manuel Puentes', 'email':'mpuentes@cetys.edu.mx','groups':[20039,4974],'lastActivity':'12/23/17'},
      {'name':'Allan CAstro', 'email':'acastro@cetys.edu.mx','groups':[98827,20039],'lastActivity':'10/10/17'},
      {'name':'Fidel Martistro', 'email':'fiddy@cetys.edu.mx','groups':[98827,4974], 'lastActivity':'04/09/16'}];
    }

    function getTests(teacherId){
      return[{"name":"Test1","questions":{"amount:":10}, "data":["Q1??","Q2: "]},
       {"name":"Test3","questions":{"amount:":20}, "data":["Q1??","Q2: "]}, {"name":"Tiesto","questions":{"amount:":3}, "data":["Q1??","Q2: "]}]
    }

    
  }]);

