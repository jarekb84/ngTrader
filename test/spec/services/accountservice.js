'use strict';

describe('Service: Accountservice', function () {

  // load the service's module
  beforeEach(module('ngTraderApp'));

  // instantiate service
  var Accountservice;
  beforeEach(inject(function (_Accountservice_) {
    Accountservice = _Accountservice_;
  }));

  it('should do something', function () {
    expect(!!Accountservice).toBe(true);
  });

});
