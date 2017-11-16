'use strict';

/**
 * @ngdoc service
 * @name noBullApp.testservice
 * @description
 * # testservice
 * Service in the noBullApp.
 */
angular.module('noBullApp')
  .service('testService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var currentTest = [];
    this.setCurrentTest = function(newTest){
      currentTest = newTest;
    }
    this.getCurrentTest = function(){
      return currentTest;
    }
  });
