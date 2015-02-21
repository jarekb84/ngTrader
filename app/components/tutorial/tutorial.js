define(function(require) {
  'use strict';

  var angular = require('angular'),
    tutorialCtrl = require('tutorial/tutorialCtrl'),
    tutorialSrvc = require('tutorial/tutorialSrvc');

  return angular.module('ngTrader.tutorial', [])
    .controller('tutorialCtrl', tutorialCtrl)
    .service('tutorialSrvc', tutorialSrvc);
});