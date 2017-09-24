'use strict';

describe('Controller: TeacherTestManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('noBullApp'));

  var TeacherTestManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherTestManagementCtrl = $controller('TeacherTestManagementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherTestManagementCtrl.awesomeThings.length).toBe(3);
  });
});
