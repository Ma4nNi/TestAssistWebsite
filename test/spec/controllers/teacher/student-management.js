'use strict';

describe('Controller: TeacherStudentManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('noBullApp'));

  var TeacherStudentManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherStudentManagementCtrl = $controller('TeacherStudentManagementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherStudentManagementCtrl.awesomeThings.length).toBe(3);
  });
});
