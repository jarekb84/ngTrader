'use strict';

describe('Controller: gameCtrl', function() {

  // load the controller's module
  beforeEach(module('ngTraderApp'));

  var gameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    gameCtrl = $controller('gameCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});