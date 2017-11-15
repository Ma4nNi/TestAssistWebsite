'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('AuthCtrl', ['$scope','$window','$http','APIservice',function ($scope, $window, $http, APIservice) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.FBLogin = function() {
      FB.login(function(response) {
        if (response.authResponse) {
          FB.api('/me', function (response) {
            console.log('Response:', response);

            var authResponse = FB.getAuthResponse();
            console.log('Authresponse', authResponse);

            var teacherBody = {
              'teacher_id': response.id,
              'full_name': response.name,
              'access_token': authResponse.accessToken,
              'expires_in': authResponse.expiresIn
            };

            console.log(teacherBody);

            APIservice.postData('/teachers', teacherBody).then(function(dataResponse){
              console.log(dataResponse);
              $window.location.href = '#!/teacher/home';
              $scope.role='teacher';
            });
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  }]);
