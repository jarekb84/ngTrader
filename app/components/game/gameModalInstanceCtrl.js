'use strict';
goog.provide('ngTrader.game.gameModalInstanceCtrl');

ngTrader.game.gameModalInstanceCtrl = function($scope, $modalInstance, highScoreSrvc, type, score) {
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

ngTrader.game.gameModalInstanceCtrl['$inject'] = ['$scope', '$modalInstance', 'highScoreSrvc', 'type', 'score'];
ngTrader.game.controller('gameModalInstanceCtrl', ngTrader.game.gameModalInstanceCtrl);