'use strict';

app.service('commodityService', function(accountService, $filter) {
  var commodities = [{
    name: 'Absinthe',
    minPrice: 500,
    maxPrice: 1000
  }, {
    name: 'Cognac',
    minPrice: 100,
    maxPrice: 200
  }, {
    name: 'Gin',
    minPrice: 10,
    maxPrice: 30
  }, {
    name: 'Mezcal',
    minPrice: 50,
    maxPrice: 100
  }, {
    name: 'Rum',
    minPrice: 20,
    maxPrice: 50
  }, {
    name: 'Tequila',
    minPrice: 5,
    maxPrice: 30
  }, {
    name: 'Vodka',
    minPrice: 15,
    maxPrice: 30
  }, {
    name: 'Whiskey',
    minPrice: 20,
    maxPrice: 50
  }, {
    name: 'Beer',
    minPrice: 1,
    maxPrice: 5
  }, {
    name: 'Wine',
    minPrice: 10,
    maxPrice: 1000
  }];

  function updateMaxQuantityPurchasable() {
    commodities.forEach(function(item) {
      item.maxQuantityPurchasable = Math.floor(accountService.currentCash / item.currentPrice);
    });
  }

  function updateInventoryCurrentMarketPrice() {
    accountService.inventory.forEach(function(item) {
      var marketItem = $filter('filter')(commodities, item.name, true);

      if (marketItem.length) {
        item.marketPrice = marketItem[0].currentPrice;
      }
    });
  }

  var Commodity = {
    all: commodities,
    updatePrices: function() {
      commodities.forEach(function(item) {
        item.currentPrice = Math.floor((Math.random() * (item.maxPrice - item.minPrice) + item.minPrice) * 100) / 100;
        item.maxQuantityPurchasable = Math.floor(accountService.currentCash / item.currentPrice);
      });

      updateInventoryCurrentMarketPrice();
    },
    buyCommodity: function(item, quantity) {
      var totalCost = item.currentPrice * quantity;
      
      if (accountService.currentCash >= totalCost) {
        accountService.currentCash -= totalCost;

        var purchasedItem = {
          name: item.name,
          purchasePrice: item.currentPrice,
          marketPrice: item.currentPrice,
          quantity: quantity
        };

        updateMaxQuantityPurchasable();
        accountService.inventory.push(purchasedItem);
      }
    },
    sellCommodity: function(item) {
      var marketItem = $filter('filter')(commodities, item.name, true);

      if (marketItem.length) {
        accountService.currentCash += (marketItem[0].currentPrice * item.quantity);
      }

      updateMaxQuantityPurchasable();
      accountService.inventory.splice(accountService.inventory.indexOf(item), 1);
    }
  };

  return Commodity;
});
