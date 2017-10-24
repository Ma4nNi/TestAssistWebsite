'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherHomeCtrl
 * @description
 * # TeacherHomeCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherHomeCtrl', ['$scope',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("teacher home started");
    $scope.groups= [{"name":"CS407-A","id":20039, "color":"blue"},{"name":"IDGD-3","id":4974, "color":"red"},{"name":"ICE-2007", "id":98827, "color":"pink"}]
  }]);
