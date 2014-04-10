'use strict';
goog.provide('ngTrader.highScore.highScoreCtrl');

ngTrader.highScore.highScoreCtrl = function(highScoreSrvc) {
  this.highScoreSrvc_ = highScoreSrvc;
};

ngTrader.highScore.highScoreCtrl.prototype.resetHighScores = function() {
  this.highScores = this.highScoreSrvc_.reset();
};

ngTrader.highScore.highScoreCtrl['$inject'] = ['highScoreSrvc'];

ngTrader.highScore.controller('highScoreCtrl', ngTrader.highScore.highScoreCtrl);
