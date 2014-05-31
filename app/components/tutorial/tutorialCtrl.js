'use strict';
goog.provide('ngTrader.tutorial.tutorialCtrl');

ngTrader.tutorial.tutorialCtrl = function(tutorialSrvc) {
  this.options = tutorialSrvc.options;
};

ngTrader.tutorial.tutorialCtrl.prototype.endTutorial = function() {
  console.log('stuff');
};

ngTrader.tutorial.tutorialCtrl['$inject'] = ['tutorialSrvc'];

ngTrader.tutorial.controller('tutorialCtrl', ngTrader.tutorial.tutorialCtrl);