'use strict';

describe('Service: citySrvc', function() {

  // load the service's module
  beforeEach(module('ngTraderApp'));

  // instantiate service
  var citySrvc;
  beforeEach(inject(function(_citySrvc_) {
    citySrvc = _citySrvc_;
  }));

  it('should do something', function() {
    expect(!!citySrvc).toBe(true);
  });

});