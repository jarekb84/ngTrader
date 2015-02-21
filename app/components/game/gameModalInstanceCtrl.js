define(function() {
  'use strict';

  /* @ngInject */
  var gameModalInstanceCtrl = function($scope, $modalInstance, highScoreSrvc, type, score) {
    this.$modalInstance = $modalInstance;
    $scope.type = type;
    $scope.score = score;
    $scope.highScoreSrvc = highScoreSrvc;

    $scope.playGame = function() {
      $modalInstance.close('playGame');
    };

    $scope.resetGame = function() {
      $modalInstance.close('resetGame');
    };

    $scope.startTutorial = function() {
      $modalInstance.close('startTutorial');
    };
  };

  return gameModalInstanceCtrl;
});