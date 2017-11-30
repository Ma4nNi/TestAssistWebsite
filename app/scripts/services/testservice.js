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
    var currentTest = {};
    var studentAppliedTest = {};
    var currentAnswers =[];
    var passcode="";
    var currentEmail = "";
    var studentName = "";
    this.setCurrentTest = function(newTest){
      currentTest = newTest;
    }
    this.getCurrentTest = function(){
      return currentTest;
    }

    this.setCurrentAnswers = function(newAnswers){
      currentAnswers = newAnswers;
    }
    this.getCurrentAnswers = function(){
      return currentAnswers;
    }

    this.setPasscode = function(newPasscode){
      passcode = newPasscode;
    }
    this.getPasscode = function(){
      return passcode;
    }

    this.setCurrentEmail = function(newEmail){
      currentEmail = newEmail;
    }
    this.getCurrentEmail = function(){
      return currentEmail;
    }
    this.setStudentAppliedTest = function(newTest){
      studentAppliedTest = newTest;
    }
    this.getStudentAppliedTest = function(){
      return studentAppliedTest;
    }
    this.setStudentName = function(name){
      studentName = name;
    }
    this.getStudentName = function(){
      return studentName;
    }
  });
