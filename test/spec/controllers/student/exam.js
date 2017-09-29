'use strict';

describe('Controller: StudentExamCtrl', function () {

  // load the controller's module
  beforeEach(module('noBullApp'));

  var StudentExamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentExamCtrl = $controller('StudentExamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentExamCtrl.awesomeThings.length).toBe(3);
  });
});
