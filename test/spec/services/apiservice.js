'use strict';

describe('Service: APIservice', function () {

  // load the service's module
  beforeEach(module('noBullApp'));

  // instantiate service
  var APIservice;
  beforeEach(inject(function (_APIservice_) {
    APIservice = _APIservice_;
  }));

  it('should do something', function () {
    expect(!!APIservice).toBe(true);
  });

});
