'use strict';

describe('Service: testservice', function () {

  // load the service's module
  beforeEach(module('noBullApp'));

  // instantiate service
  var testservice;
  beforeEach(inject(function (_testservice_) {
    testservice = _testservice_;
  }));

  it('should do something', function () {
    expect(!!testservice).toBe(true);
  });

});
