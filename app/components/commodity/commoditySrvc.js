'use strict';
goog.provide('ngTrader.commodity.commoditySrvc');

ngTrader.commodity.commoditySrvc = function(accountSrvc, citySrvc, $filter) {
  this.accountSrvc_ = accountSrvc;
  this.filter_ = $filter;
  this.citySrvc_ = citySrvc;
  this.commodities = [{
    name: 'Absinthe',
    basePrice: 51100,
    purchasedItems: []
  }, {
    name: 'Cognac',
    basePrice: 25600,
    purchasedItems: []
  }, {
    name: 'Gin',
    basePrice: 3200,
    purchasedItems: []
  }, {
    name: 'Mezcal',
    basePrice: 12800,
    purchasedItems: []
  }, {
    name: 'Rum',
    basePrice: 1600,
    purchasedItems: []
  }, {
    name: 'Tequila',
    basePrice: 800,
    purchasedItems: []
  }, {
    name: 'Vodka',
    basePrice: 400,
    purchasedItems: []
  }, {
    name: 'Whiskey',
    basePrice: 6400,
    purchasedItems: []
  }, {
    name: 'Beer',
    basePrice: 200,
    purchasedItems: []
  }, {
    name: 'Wine',
    basePrice: 102400,
    purchasedItems: []
  }];

  this.priceModification = {
    normalRange: 20, // equates to a range between -20% and +20%
    specialRange: 20, // adds onto normalRange, giving a daily special a range of -40% to +40%
    citySpecialtyRange: 10 // adds onto range, giving an additional range of -10% to +10%
  };
};

ngTrader.commodity.commoditySrvc.prototype.updateMaxQuantityPurchasable = function() {
  var self = this;
  this.commodities.forEach(function(item) {
    item.maxQuantityPurchasable = Math.floor(self.accountSrvc_.currentCash / item.currentPrice);
  });
};

ngTrader.commodity.commoditySrvc.prototype.setCitySpecialty = function() {
  var self = this,
    availableCommodities = self.commodities.slice();

  self.citySrvc_.cities.forEach(function(city) {
    var index = Math.floor(Math.random() * availableCommodities.length),
      item = availableCommodities[index];

    city.specialtyItem = item;

    availableCommodities.splice(index, 1);
  });
};

ngTrader.commodity.commoditySrvc.prototype.resetAverageSellPrice = function() {
  this.commodities.forEach(function(item) {
    item.averageSellPrice = 0;
  });
};

ngTrader.commodity.commoditySrvc.prototype.updatePrices = function() {
  var dailySpecialItem = this.commodities[Math.floor(Math.random() * this.commodities.length)],
    self = this,
    priceRange, priceOffset;

  this.accountSrvc_.netWorth = this.accountSrvc_.currentCash;

  this.commodities.forEach(function(item) {
    item.priceHigh = false;
    item.dailySpecial = false;
    item.citySpecialty = false;
    item.priceChanged = true;
    priceRange = self.priceModification.normalRange;

    if (item.name === dailySpecialItem.name) {
      priceRange += self.priceModification.specialRange;
      item.dailySpecial = true;
    }

    if (item.name === self.citySrvc_.currentCity.specialtyItem.name) {
      priceRange += self.priceModification.citySpecialtyRange;
      item.citySpecialty = true;
    }

    priceOffset = Math.floor(Math.random() * (priceRange * 2)) - priceRange;

    if (priceOffset > 0) {
      item.priceHigh = true;
    }

    if (priceOffset === 0) {
      item.priceChanged = false;
    }

    item.currentPrice = item.basePrice * (priceOffset / 100) + item.basePrice;
    item.maxQuantityPurchasable = Math.floor(self.accountSrvc_.currentCash / item.currentPrice);

    item.purchasedItems.forEach(function(purchasedItem) {
      self.accountSrvc_.netWorth += purchasedItem.quantity * item.currentPrice;
    });
  });
};

ngTrader.commodity.commoditySrvc.prototype.buyCommodity = function(item, quantity) {
  var commodity = this.filter_('filter')(this.commodities, item.name, true)[0],
    totalCost = item.currentPrice * quantity;

  if (this.accountSrvc_.currentCash >= totalCost) {
    this.accountSrvc_.currentCash -= totalCost;

    var purchasedItem = {
      name: item.name,
      purchasePrice: item.currentPrice,
      marketPrice: item.currentPrice,
      quantity: quantity
    };

    this.updateMaxQuantityPurchasable();
    commodity.purchasedItems.push(purchasedItem);
  }
};

ngTrader.commodity.commoditySrvc.prototype.sellCommodity = function(item) {
  var commodity = this.filter_('filter')(this.commodities, item.name, true)[0],
    transaction, purchasedItem, priorTransactions;

  if (commodity) {
    transaction = {
      itemName: item.name,
      profitEach: commodity.currentPrice - item.purchasePrice,
      profitTotal: (commodity.currentPrice - item.purchasePrice) * item.quantity,
      purchasePrice: item.purchasePrice,
      sellPrice: commodity.currentPrice,
      quantity: item.quantity
    };

    purchasedItem = this.filter_('filter')(this.commodities, item.name, true)[0],

    //remove purchased item
    commodity.purchasedItems.splice(commodity.purchasedItems.indexOf(item), 1);
    this.accountSrvc_.transactions.push(transaction);
    this.accountSrvc_.currentCash += commodity.currentPrice * item.quantity;

    //get average sold price
    priorTransactions = this.filter_('filter')(this.accountSrvc_.transactions, item.name, true);

    commodity.averageSellPrice = priorTransactions.reduce(function(prior, current) {
      return prior + current.sellPrice;
    }, 0) / priorTransactions.length;

  }
  this.updateMaxQuantityPurchasable();
};

ngTrader.commodity.commoditySrvc['$inject'] = ['accountSrvc', 'citySrvc', '$filter'];

ngTrader.commodity.service('commoditySrvc', ngTrader.commodity.commoditySrvc);
