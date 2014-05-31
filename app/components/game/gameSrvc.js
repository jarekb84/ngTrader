'use strict';
goog.provide('ngTrader.game.gameSrvc');

ngTrader.game.gameSrvc = function(highScoreSrvc, accountSrvc, commoditySrvc) {
  this.daysLeft = 30;
  this.lastDay = false;
  this.highScoreSrvc = highScoreSrvc;
  this.accountSrvc = accountSrvc;
  this.commoditySrvc = commoditySrvc;
  this.initialLoad = true;
};

ngTrader.game.gameSrvc.prototype.reduceDaysLeft = function() {
  this.daysLeft -= 1;

  if (this.daysLeft === 1) {
    this.lastDay = true;
  }
};

ngTrader.game.gameSrvc.prototype.gameOver = function(restart) {
  if (!restart) {
    this.highScoreSrvc.add({
      score: this.accountSrvc.currentCash,
      datetime: new Date().getTime()
    });
  }

  this.accountSrvc.reset();
  this.commoditySrvc.reset();
  this.daysLeft = 30;
  this.lastDay = false;
};

ngTrader.game.gameSrvc['$inject'] = ['highScoreSrvc', 'accountSrvc', 'commoditySrvc'];

ngTrader.game.service('gameSrvc', ngTrader.game.gameSrvc);