'use strict';

describe('Controller: TestDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('noBullApp'));

  var TestDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestDetailsCtrl = $controller('TestDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
