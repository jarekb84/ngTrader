'use strict';

app.service('commoditySrvc', function(accountSrvc, $filter) {
  var commodities = [{
    name: 'Absinthe',
    basePrice: 511,
    purchasedItems: []
  }, {
    name: 'Cognac',
    basePrice: 256,
    purchasedItems: []
  }, {
    name: 'Gin',
    basePrice: 32,
    purchasedItems: []
  }, {
    name: 'Mezcal',
    basePrice: 128,
    purchasedItems: []
  }, {
    name: 'Rum',
    basePrice: 16,
    purchasedItems: []
  }, {
    name: 'Tequila',
    basePrice: 8,
    purchasedItems: []
  }, {
    name: 'Vodka',
    basePrice: 4,
    purchasedItems: []
  }, {
    name: 'Whiskey',
    basePrice: 64,
    purchasedItems: []
  }, {
    name: 'Beer',
    basePrice: 2,
    purchasedItems: []
  }, {
    name: 'Wine',
    basePrice: 1024,
    purchasedItems: []
  }];

  var priceModification = {
    normalRange: 20,
    specialRange: 40
  };

  var transactionID = 0;

  function updateMaxQuantityPurchasable() {
    commodities.forEach(function(item) {
      item.maxQuantityPurchasable = Math.floor(accountSrvc.currentCash / item.currentPrice);
    });
  }

  function updateInventoryCurrentMarketPrice() {
    accountSrvc.inventory.forEach(function(item) {
      var marketItem = $filter('filter')(commodities, item.name, true);

      if (marketItem.length) {
        item.marketPrice = marketItem[0].currentPrice;
      }
    });
  }

  var Commodity = {
    all: commodities,
    updatePrices: function() {
      var specialItem = commodities[Math.floor(Math.random() * commodities.length)],
        priceOffset;

      commodities.forEach(function(item) {
        priceOffset = Math.floor(Math.random() * (priceModification.normalRange * 2)) - priceModification.normalRange;
        item.priceHigh = false;

        if (item.name === specialItem.name) {
          priceOffset = Math.floor(Math.random() * (priceModification.specialRange * 2)) - priceModification.specialRange;
          item.special = true;
        }

        if (priceOffset > 0) {
          item.priceHigh = true;
        }

        item.priceOffset = priceOffset;
        item.currentPrice = item.basePrice * (priceOffset / 100) + item.basePrice;
        item.maxQuantityPurchasable = Math.floor(accountSrvc.currentCash / item.currentPrice);
      });

      updateInventoryCurrentMarketPrice();
    },
    buyCommodity: function(item, quantity) {
      var commodity = $filter('filter')(commodities, item.name, true)[0],
        totalCost = item.currentPrice * quantity;

      if (accountSrvc.currentCash >= totalCost) {
        accountSrvc.currentCash -= totalCost;

        var purchasedItem = {
          name: item.name,
          purchasePrice: item.currentPrice,
          marketPrice: item.currentPrice,
          quantity: quantity,
          transactionID: transactionID
        };

        updateMaxQuantityPurchasable();
        commodity.purchasedItems.push(purchasedItem);
      }
    },
    sellCommodity: function(item) {
      var commodity = $filter('filter')(commodities, item.name, true)[0],
        transaction, purchasedItem;

      if (commodity) {
        transaction = {
          itemName: item.name,
          profitEach: commodity.currentPrice - item.purchasePrice,
          profitTotal: (commodity.currentPrice - item.purchasePrice) * item.quantity,
          purchasePrice: item.purchasePrice,
          sellPrice: commodity.currentPrice,
          quantity: item.quantity
        };

        purchasedItem = $filter('filter')(commodities, item.name, true)[0],

        //remove purchased item
        commodity.purchasedItems.splice(commodity.purchasedItems.indexOf(item), 1);                
        accountSrvc.transactions.push(transaction);
        accountSrvc.currentCash += commodity.currentPrice * item.quantity;
      }
      updateMaxQuantityPurchasable();
    }
  };

  return Commodity;
});
