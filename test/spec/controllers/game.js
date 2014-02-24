'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTraderApp'));

  var GameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
