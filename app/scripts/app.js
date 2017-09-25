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
      .otherwise({
        redirectTo: '/'
      });
  });
