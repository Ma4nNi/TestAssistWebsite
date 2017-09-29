'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherStudentManagementCtrl
 * @description
 * # TeacherStudentManagementCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherStudentManagementCtrl', ['$scope',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("im student manager");
    $scope.activeStudents = [{'name':'Manuel Puentes', 'email':'mpuentes@cetys.edu.mx','groups':['cc401','phy123'],'lastActivity':'12/23/17'},
    {'name':'Allan CAstro', 'email':'acastro@cetys.edu.mx','groups':['cc401','phy123'],'lastActivity':'10/10/17'},
    {'name':'Fidel Martistro', 'email':'fiddy@cetys.edu.mx','groups':['cc401','phy123'], 'lastActivity':'04/09/16'}]
  }]);
