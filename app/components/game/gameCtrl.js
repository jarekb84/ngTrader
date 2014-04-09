'use strict';
goog.provide('ngTrader.game.gameCtrl');

ngTrader.game.gameCtrl = function(commoditySrvc, citySrvc, accountSrvc, highScoreSrvc, gameSrvc) {
  //todo: find a better way to expose services to tempate
  this.gameSrvc_ = gameSrvc;
  this.commoditySrvc_ = commoditySrvc;
  this.citySrvc_ = citySrvc;
  this.accountSrvc_ = accountSrvc;
  this.highScoreSrvc_ = highScoreSrvc;

  if (!citySrvc.currentCity) {
    commoditySrvc.setCitySpecialty();
    citySrvc.getRandomCity();
    commoditySrvc.updatePrices();
  }
};

ngTrader.game.gameCtrl.prototype.submitScore = function() {
  this.gameSrvc_.gameOver();
};

ngTrader.game.gameCtrl.prototype.goToCity = function(city) {
  this.citySrvc_.setCurrentCity(city);
  this.commoditySrvc_.updatePrices();
  this.gameSrvc_.reduceDaysLeft();
};

ngTrader.game.gameCtrl.prototype.buyItem = function(item, quantity) {
  this.commoditySrvc_.buyCommodity(item, quantity);
};

ngTrader.game.gameCtrl.prototype.sellItem = function(item) {
  this.commoditySrvc_.sellCommodity(item);
};

ngTrader.game.gameCtrl.prototype.setMarketHoverItem = function(item) {
  this.marketHoverItem = item.name;
};

ngTrader.game.gameCtrl.prototype.resetMarketHoverItem = function() {
  this.marketHoverItem = '';
};

ngTrader.game.gameCtrl.prototype.isCurrentCity = function(city) {
  return city.name === this.citySrvc_.currentCity.name;
};

ngTrader.game.gameCtrl.prototype.getExpectedProfit = function(item) {
  var expectedProfit = 0;

  if(item.averageSellPrice){
    expectedProfit = ((item.averageSellPrice - item.currentPrice)*item.maxQuantityPurchasable)/100;
  }

  return expectedProfit;
};

ngTrader.game.controller('gameCtrl', ngTrader.game.gameCtrl);