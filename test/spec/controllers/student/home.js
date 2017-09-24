'use strict';

describe('Controller: StudentHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('noBullApp'));

  var StudentHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentHomeCtrl = $controller('StudentHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentHomeCtrl.awesomeThings.length).toBe(3);
  });
});
