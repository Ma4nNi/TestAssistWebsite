'use strict';

/**
 * @ngdoc function
 * @name noBullApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the noBullApp
 */
angular.module('noBullApp')
  .controller('AuthCtrl', ['$scope','$window','$http','APIservice','$location','authService',
    function ($scope, $window,$http, APIservice, $location, authService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.FBLogin = function() {
      var currentPath = $location.absUrl();
      console.log('CurrentPath', currentPath);
      if(currentPath.includes('localhost')) { // This if is for checking if we're running in localhost / dev environment
        console.log('Currently running in a dev environment');
        var teacherBody = { //Teacher body is set for development values.
          'teacher_id': 'tcjr1435',
          'full_name': 'DEVELOPER',
          'access_token': 'ABC1234',
          'expires_in': 1000000
        };
        authService.setCurrentUser(teacherBody);
        $window.location.href = '#!/teacher/home';
        $scope.role='teacher';
      }
      else{
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
              console.log('Teacher response');
              console.log(teacherBody);
              authService.setCurrentUser(teacherBody);
              APIservice.postData('/teachers', teacherBody).then(function(dataResponse){
                console.log(dataResponse);
                $window.location.href = '#!/teacher/home';
                $scope.role = 'teacher';
              });
            });
          } else {
            console.log('User cancelled login or did not fully authorize.');
          }
        });
      }
    }
  }]);
