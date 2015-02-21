define(function(require) {
  'use strict';

  var angular = require('angular'),
    citySrvc = require('city/citySrvc'),
    cityCtrl = require('city/cityCtrl');

  return angular.module('ngTrader.city', [])
    .service('citySrvc', citySrvc)
    .controller('cityCtrl', cityCtrl);
});