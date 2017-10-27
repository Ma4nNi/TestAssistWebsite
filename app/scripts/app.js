'use strict';

/**
 * @ngdoc overview
 * @name noBullApp
 * @description
 * # noBullApp
 *
 * Main module of the application.
 */
angular
  .module('noBullApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/auth', {
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/teacher/home', {
        templateUrl: 'views/teacher/home.html',
        controller: 'TeacherHomeCtrl',
        controllerAs: '/teacher/home',
      })
      .when('/student/home', {
        templateUrl: 'views/student/home.html',
        controller: 'StudentHomeCtrl',
        controllerAs: '/student/home'
      })
      .when('/teacher/test-management', {
        templateUrl: 'views/teacher/test-management.html',
        controller: 'TeacherTestManagementCtrl',
        controllerAs: 'teacher/testManagement',
      })
      .when('/teacher/student-management', {
        templateUrl: 'views/teacher/student-management.html',
        controller: 'TeacherStudentManagementCtrl',
        controllerAs: 'teacher/studentManagement',
      })
      .when('/teacher/test-details/:testId', {
        templateUrl: 'views/teacher/test-details.html',
        controller: 'TestDetailsCtrl',
        controllerAs: 'teacher/testDetails'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/student/exam', {
        templateUrl: 'views/student/exam.html',
        controller: 'StudentExamCtrl',
        controllerAs: 'student/exam'
      })
      .when('/student/finished', {
        templateUrl: 'views/student/finished.html',
        controller: 'StudentFinishedCtrl',
        controllerAs: 'student/finished'
      })

      .otherwise({
        redirectTo: '/'
      });

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1268654153241233',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.8'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
