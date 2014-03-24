'use strict';

describe('Controller: commodityCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTraderApp'));

  var commodityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    commodityCtrl = $controller('commodityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
