define(function() {
  'use strict';

  /* @ngInject */
  var highScoreCtrl = function(highScoreSrvc, ngTableParams, $filter) {
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

  highScoreCtrl.prototype.resetHighScores = function() {
    this.highScores = this.highScoreSrvc.reset();
  };

  return highScoreCtrl;
});