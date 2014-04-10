'use strict';
goog.provide('ngTrader.highScore.highScoreSrvc');

ngTrader.highScore.highScoreSrvc = function highScoreSrvc($angularCacheFactory) {
    this.cache = $angularCacheFactory('cache');
    this.highScores = this.cache.get('highScores') || [];
  };

ngTrader.highScore.highScoreSrvc.prototype.add = function(score) {
  this.highScores.push(score);
  this.cache.put('highScores', this.highScores);
};

ngTrader.highScore.highScoreSrvc.prototype.reset = function() {
  this.cache.remove('highScores');
  this.highScores = [];
};

ngTrader.highScore.highScoreSrvc['$inject'] = ['$angularCacheFactory'];

ngTrader.highScore.service('highScoreSrvc', ngTrader.highScore.highScoreSrvc);
