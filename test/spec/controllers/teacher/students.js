'use strict';

describe('Controller: TeacherStudentsCtrl', function () {

  // load the controller's module
  beforeEach(module('noBullApp'));

  var TeacherStudentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherStudentsCtrl = $controller('TeacherStudentsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherStudentsCtrl.awesomeThings.length).toBe(3);
  });
});
