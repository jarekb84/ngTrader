'use strict';

describe('Controller: CommoditiesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTraderApp'));

  var CommoditiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommoditiesCtrl = $controller('CommoditiesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
