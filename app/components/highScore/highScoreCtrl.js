'use strict';
goog.provide('ngTrader.highScore.highScoreCtrl');

ngTrader.highScore.highScoreCtrl = function(highScoreSrvc, ngTableParams, $filter) {
  this.highScoreSrvc = highScoreSrvc;

  this.tableParams = new ngTableParams({
    page: 1, // show first page
    count: 10, // count per page
    sorting: {
      score: 'desc' // initial sorting
    }
  }, {
    total: highScoreSrvc.highScores.length, // length of data
    getData: function($defer, params) {
      var orderedData = params.sorting() ? $filter('orderBy')(highScoreSrvc.highScores, params.orderBy()) : highScoreSrvc.highScores;
      $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    }
  });
};

ngTrader.highScore.highScoreCtrl.prototype.resetHighScores = function() {
  this.highScores = this.highScoreSrvc.reset();
};

ngTrader.highScore.highScoreCtrl['$inject'] = ['highScoreSrvc', 'ngTableParams', '$filter'];

ngTrader.highScore.controller('highScoreCtrl', ngTrader.highScore.highScoreCtrl);