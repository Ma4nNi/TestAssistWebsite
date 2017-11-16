'use strict';

/**
 * @ngdoc service
 * @name noBullApp.authService
 * @description
 * # authService
 * Service in the noBullApp.
 */
angular.module('noBullApp')
  .service('authService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var authUser = {
      full_name:"anonymous",
    };
    this.setCurrentUser = function(userBody){
       authUser = userBody;
    }
    this.getCurrentUser = function(){
      return authUser;
    }
  });
