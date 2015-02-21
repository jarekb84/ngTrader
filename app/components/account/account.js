define(function(require) {
  'use strict';

  var angular = require('angular'),
    accountSrvc = require('account/accountSrvc');

  return angular.module('ngTrader.account', [])
    .service('accountSrvc', accountSrvc);
});