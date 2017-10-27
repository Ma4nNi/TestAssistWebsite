'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('AuthCtrl', function ($scope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.FBLogin = function() {
      FB.login(function(response) {
        if (response.authResponse) {
          console.log('Welcome! Fetching your information... ');
          FB.api('/me', function (response) {
            console.log('Good to see you, ' + response.name + '.');
            console.log(response);

            var accessToken = FB.getAuthResponse();
            console.log(accessToken);

            $window.location.href = '#!/teacher/home';
            $scope.role='teacher';
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  });
