define(function(require) {
  'use strict';

  var angular = require('angular'),
    highScoreCtrl = require('highScore/highScoreCtrl'),
    highScoreSrvc = require('highScore/highScoreSrvc');

  return angular.module('ngTrader.highScore', [])
    .controller('highScoreCtrl', highScoreCtrl)
    .service('highScoreSrvc', highScoreSrvc);
});