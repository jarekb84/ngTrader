'use strict';
goog.provide('ngTrader.game.gameSrvc');

ngTrader.game.gameSrvc = function(highScoreSrvc, accountSrvc, commoditySrvc) {
  this.daysLeft = 30;
  this.lastDay = false;
  this.highScoreSrvc_ = highScoreSrvc;
  this.accountSrvc_ = accountSrvc;
  this.commoditySrvc_ = commoditySrvc;
};

ngTrader.game.gameSrvc.prototype.reduceDaysLeft = function() {
  this.daysLeft -= 1;

  if (this.daysLeft === 1) {
    this.lastDay = true;
  }
};

ngTrader.game.gameSrvc.prototype.gameOver = function() {
  this.highScoreSrvc_.add({
    score: this.accountSrvc_.currentCash
  });
  this.accountSrvc_.reset();
  this.commoditySrvc_.resetAverageSellPrice();
  this.commoditySrvc_.updateMaxQuantityPurchasable();
  this.commoditySrvc_.setCitySpecialty();
  this.daysLeft = 30;
  this.lastDay = false;
};

ngTrader.game.gameSrvc['$inject'] = ['highScoreSrvc', 'accountSrvc', 'commoditySrvc'];

ngTrader.game.service('gameSrvc', ngTrader.game.gameSrvc);
