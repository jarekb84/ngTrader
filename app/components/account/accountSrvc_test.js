'use strict';

describe('Service: accountSrvc', function () {

  // load the service's module
  beforeEach(module('ngTraderApp'));

  // instantiate service
  var accountSrvc;
  beforeEach(inject(function (_accountSrvc_) {
    accountSrvc = _accountSrvc_;
  }));

  it('should do something', function () {
    expect(!!accountSrvc).toBe(true);
  });

});
