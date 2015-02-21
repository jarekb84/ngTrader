define(function() {
  'use strict';

  var accountSrvc = function() {
    this.transactions = [];
    this.currentCash = 10000; //in cents
    this.netWorth = 0;
  };

  accountSrvc.prototype.reset = function() {
    this.currentCash = 10000;
    this.transactions = [];
    this.netWorth = 10000;
  };

  return accountSrvc;
});