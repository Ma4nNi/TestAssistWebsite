'use strict';

describe('Controller: TeacherHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('noBullApp'));

  var TeacherHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherHomeCtrl = $controller('TeacherHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherHomeCtrl.awesomeThings.length).toBe(3);
  });
});
