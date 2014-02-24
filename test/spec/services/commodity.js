'use strict';

describe('Service: Commodity', function () {

  // load the service's module
  beforeEach(module('ngTraderApp'));

  // instantiate service
  var Commodity;
  beforeEach(inject(function (_Commodity_) {
    Commodity = _Commodity_;
  }));

  it('should do something', function () {
    expect(!!Commodity).toBe(true);
  });

});
