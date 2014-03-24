'use strict';

describe('Controller: navCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTraderApp'));

  var navCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    navCtrl = $controller('navCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
