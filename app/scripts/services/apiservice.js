'use strict';

/**
 * @ngdoc service
 * @name noBullApp.APIservice
 * @description
 * # APIservice
 * Service in the noBullApp.
 */
angular.module('noBullApp')
  .service('APIservice', function ($http) {
    this.getData = function(route) {
      return $http({
        method: 'GET',
        url: 'https://xv7arvaxo8.execute-api.us-east-1.amazonaws.com/api' + route
      });
     };

    this.postData=function(route, body){
      console.log('POSTING TO', route);
      body.teacher = {
        'teacher_id': 'tcjr1435',
        'access_token': 'ABC1234'
      };
      console.log(body);
      return $http({
        method: 'POST',
        url: 'https://xv7arvaxo8.execute-api.us-east-1.amazonaws.com/api' + route,
        headers: {
          'Content-Type': 'application/json'
        },
        data: body
      });
    };

    this.putData=function(route, body){
      console.log('PUTTING TO', route);
      body.teacher = body.teacher = {
        'teacher_id': 'tcjr1435',
        'access_token': 'ABC1234'
      };
      console.log(body)

      return $http({
        method: 'PUT',
        url: 'https://xv7arvaxo8.execute-api.us-east-1.amazonaws.com/api' + route,
        headers: {
          'Content-Type': 'application/json'
        },
        data: body
      });
    }
  });
