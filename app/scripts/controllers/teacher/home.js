'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:TeacherHomeCtrl
 * @description
 * # TeacherHomeCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('TeacherHomeCtrl', ['$scope','$filter', '$route', 'APIservice', '$http', 'authService' ,function ($scope, $filter, $route, APIservice, $http, authService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.group=$scope.groups;
    $scope.filterStudents = [];

    $scope.createGroup = function(){
        $scope.activeGroup = {
          'teacher_id': '',
          'name': '',
          'students': $scope.filterStudents
        };
        console.log('change active test to', $scope.activeGroup);

    }

    $scope.checkValue = function (id, checked, index) {
      if(checked){
        $scope.filterStudents.push(id)

      }
      else{
        var _index = $scope.filterStudents.indexOf(id);
        $scope.filterStudents.splice(_index, 1);
      }
    }

    $scope.postGroup = function(){
      var body = {
        teacher_id: authService.getCurrentUser().teacher_id,
        name: $scope.activeGroup.name,
        students: $scope.filterStudents
      }
      console.log('POST GROUP BODY', body);
      APIservice.postData('/groups', body).then(function(dataResponse){
        console.log("Post response");
        console.log(dataResponse);
        alert('Your group has been created');
      });

    }








  }]);
