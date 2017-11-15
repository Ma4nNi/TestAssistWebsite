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
    //delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function(route) {
      return $http({
          method: 'GET',
          url: 'https://xv7arvaxo8.execute-api.us-east-1.amazonaws.com/api'+route
          //params: 'limit=10, sort_by=created:desc',
          //headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
       });
     }

     this.postData=function(route, body){
       console.log("POSTING TO", route);
       console.log(body)
       return $http({
        method: 'POST',
        url: 'https://xv7arvaxo8.execute-api.us-east-1.amazonaws.com/api'+route,
        headers: {
          'Content-Type': 'application/json'
        },
        data: body
       });
     }

     this.putData=function(route, body){
      console.log("putting TO", route);
      console.log(body)
      return $http({
       method: 'PUT',
       url: 'https://xv7arvaxo8.execute-api.us-east-1.amazonaws.com/api'+route,
       headers: {
         'Content-Type': 'application/json'
       },
       data: body
      });
    }

  });
