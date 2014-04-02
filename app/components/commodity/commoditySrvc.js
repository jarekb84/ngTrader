'use strict';

app.service('commoditySrvc', function(accountSrvc, $filter) {
  var commodities = [{
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

  var priceModification = {
    normalRange: 20, // equates to a range between -20% and +20%
    specialRange: 20 // adds onto normalRange, giving a daily special a range of -40% to +40%
  };

  function updateMaxQuantityPurchasable() {
    commodities.forEach(function(item) {
      item.maxQuantityPurchasable = Math.floor(accountSrvc.currentCash / item.currentPrice);
    });
  }

  var Commodity = {
    all: commodities,
    updatePrices: function() {
      var specialItem = commodities[Math.floor(Math.random() * commodities.length)],
        priceRange, priceOffset;
      
      accountSrvc.netWorth = accountSrvc.currentCash;

      commodities.forEach(function(item) {
        item.priceHigh = false;
        item.special = false;
        item.priceChanged = true;
        priceRange = priceModification.normalRange;

        if (item.name === specialItem.name) {
          priceRange += priceModification.specialRange;
          item.special = true;
        }

        priceOffset = Math.floor(Math.random() * (priceRange * 2)) - priceRange;

        if (priceOffset > 0) {
          item.priceHigh = true;
        }
        
        if(priceOffset === 0){
          item.priceChanged = false;
        }
        
        item.currentPrice = item.basePrice * (priceOffset/100) + item.basePrice;
        item.maxQuantityPurchasable = Math.floor(accountSrvc.currentCash / item.currentPrice);

        item.purchasedItems.forEach(function (purchasedItem) {
          accountSrvc.netWorth += purchasedItem.quantity * item.currentPrice;
        });
      });
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
          quantity: quantity
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
