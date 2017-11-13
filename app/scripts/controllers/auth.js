'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('AuthCtrl', function ($scope, $window, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.FBLogin = function() {
      FB.login(function(response) {
        if (response.authResponse) {
          FB.api('/me', function (response) {
            console.log(response.id);
            console.log(response.name);
            console.log("Response:", response);

            var authResponse = FB.getAuthResponse();
            console.log("Authresponse", authResponse);
            console.log(authResponse.accessToken);

            var teacherBody = {
              'teacher_id': response.id,
              'full_name': response.name,
              'access_token': authResponse.accessToken,
              'expires_in': authResponse.expiresIn
            };

            console.log(teacherBody);

            var config = {
              headers: {'Content-Type': 'application/json'}
            };

            var result =
              $http.post('https://662g9mitck.execute-api.us-east-1.amazonaws.com/api/teachers', teacherBody, config);

            console.log(result);

            $window.location.href = '#!/teacher/home';
            $scope.role='teacher';
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  });
