'use strict';

describe('Service: commoditySrvc', function () {

  // load the service's module
  beforeEach(module('ngTraderApp'));

  // instantiate service
  var commoditySrvc;
  beforeEach(inject(function (_commoditySrvc_) {
    commoditySrvc = _commoditySrvc_;
  }));

  it('should do something', function () {
    expect(!!commoditySrvc).toBe(true);
  });

});
