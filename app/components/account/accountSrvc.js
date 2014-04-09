'use strict';
goog.provide('ngTrader.account.accountSrvc');

ngTrader.account.accountSrvc = function() {
  this.transactions = [];
  this.currentCash = 10000; //in cents
  this.netWorth = 0;
};

ngTrader.account.accountSrvc.prototype.reset = function() {
  this.currentCash = 10000;
  this.transactions = [];
  this.netWorth = 10000;
};

ngTrader.account.service('accountSrvc', ngTrader.account.accountSrvc);