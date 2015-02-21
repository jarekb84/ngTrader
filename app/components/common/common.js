define(function(require) {
  'use strict';

  var angular = require('angular'),
    autoActive = require('common/autoActiveDrtv'),
    toDollarDrtv = require('common/toDollarDrtv'),
    toDollarFltr = require('common/toDollarFltr');

  return angular.module('ngTrader.common', [])
    .directive('autoActive', autoActive)
    .directive('toDollar', toDollarDrtv)
    .filter('toDollar', toDollarFltr);
});