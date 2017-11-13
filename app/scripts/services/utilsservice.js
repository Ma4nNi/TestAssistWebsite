'use strict';

/**
 * @ngdoc service
 * @name noBullApp.utilsService
 * @description
 * # utilsService
 * Service in the noBullApp.
 */
angular.module('noBullApp')
  .service('utilsService', function ($http, $q) {
    this.searchTestByCode = function(code) {
      $http({
        method: 'GET',
        url: 'https://xv7arvaxo8.execute-api.us-east-1.amazonaws.com/api/tests/code/'+code
      }).then(function(dataResponse) {
        if (dataResponse) {
          console.log('Before');
          $q.resolve(dataResponse.data);
        } else {
          $q.resolve(null);
        }
      });
    };
  });
