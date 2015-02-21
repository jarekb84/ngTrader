define(function(require) {
  'use strict';

  var angular = require('angular'),
    commoditySrvc = require('commodity/commoditySrvc');

  return angular.module('ngTrader.commodity', [])
    .service('commoditySrvc', commoditySrvc);
});