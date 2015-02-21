define(function() {
  'use strict';

  /* @ngInject */
  var highScoreSrvc = function highScoreSrvc($angularCacheFactory, $filter) {
    this.cache = $angularCacheFactory('cache');
    this.highScores = this.cache.get('highScores') || [];
    this.$filter = $filter;
  };

  highScoreSrvc.prototype.add = function(score) {
    var priorNewestScore = this.$filter('filter')(this.highScores, {
      newest: true
    }, true)[0];

    if (priorNewestScore) {
      priorNewestScore.newest = false;
    }

    score.newest = true;
    this.highScores.push(score);
    this.cache.put('highScores', this.highScores);
  };

  highScoreSrvc.prototype.reset = function() {
    this.cache.remove('highScores');
    this.highScores = [];
  };

  return highScoreSrvc;
});