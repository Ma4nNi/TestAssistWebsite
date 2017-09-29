'use strict';

describe('Controller: StudentFinishedCtrl', function () {

  // load the controller's module
  beforeEach(module('noBullApp'));

  var StudentFinishedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentFinishedCtrl = $controller('StudentFinishedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentFinishedCtrl.awesomeThings.length).toBe(3);
  });
});
