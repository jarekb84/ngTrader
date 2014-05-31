'use strict';
goog.provide('ngTrader.game.gameCtrl');

ngTrader.game.gameCtrl = function($scope, commoditySrvc, citySrvc, accountSrvc, gameSrvc, tutorialSrvc, $modal) {
  //todo: find a better way to expose services to tempate
  this.gameSrvc = gameSrvc;
  this.commoditySrvc = commoditySrvc;
  this.citySrvc = citySrvc;
  this.accountSrvc = accountSrvc;
  this.tutorialOptions = tutorialSrvc.options;
  this.$modal = $modal;
  this.$scope = $scope;

  if (!citySrvc.currentCity) {
    commoditySrvc.setCitySpecialty();
    citySrvc.getRandomCity();
    commoditySrvc.updatePrices();
  }

  //todo: figure out why this ctrl gets called twice on page load
  if (gameSrvc.initialLoad) {
    this.showModal('start');

    gameSrvc.initialLoad = false;
  }
};

ngTrader.game.gameCtrl.prototype.submitScore = function() {
  this.showModal('gameOver', this.accountSrvc.netWorth);
  this.gameSrvc.gameOver();
};

ngTrader.game.gameCtrl.prototype.goToCity = function(city) {
  this.citySrvc.setCurrentCity(city);
  this.commoditySrvc.updatePrices();
  this.gameSrvc.reduceDaysLeft();
};

ngTrader.game.gameCtrl.prototype.buyItem = function(item, quantity) {
  this.commoditySrvc.buyCommodity(item, quantity);
};

ngTrader.game.gameCtrl.prototype.sellItem = function(item) {
  this.commoditySrvc.sellCommodity(item);
};

ngTrader.game.gameCtrl.prototype.setMarketHoverItem = function(item) {
  this.marketHoverItem = item.name;
};

ngTrader.game.gameCtrl.prototype.resetMarketHoverItem = function() {
  this.marketHoverItem = '';
};

ngTrader.game.gameCtrl.prototype.isCurrentCity = function(city) {
  return city.name === this.citySrvc.currentCity.name;
};

ngTrader.game.gameCtrl.prototype.getPotentialProfit = function(item) {
  var expectedProfit = 'unknown';

  if (item.averageSellPrice) {
    expectedProfit = ((item.averageSellPrice - item.currentPrice) * item.maxQuantityPurchasable) / 100;
  }

  return expectedProfit;
};

ngTrader.game.gameCtrl.prototype.openMenu = function() {
  this.showModal('gameMenu');
};

ngTrader.game.gameCtrl.prototype.showModal = function(type, score) {
  var templateUrl, self = this;

  switch (type) {
    case 'start':
      templateUrl = 'components/game/gameModalStart.tmpl.html';
      break;
    case 'gameMenu':
      templateUrl = 'components/game/gameModalGameMenu.tmpl.html';
      break;
    case 'gameOver':
      templateUrl = 'components/game/gameModalGameOver.tmpl.html';
      break;
  }

  var modalInstance = this.$modal.open({
    templateUrl: templateUrl,
    controller: 'gameModalInstanceCtrl',
    size: 'sm',
    resolve: {
      type: function() {
        return type;
      },
      score: function() {
        return score;
      }
    }
  });

  modalInstance.result.then(function(action) {
    switch (action) {
      case 'startTutorial':
        self.$scope.startTutorial();
        break;
      case 'resetGame':
        self.gameSrvc.gameOver(true);
        break;
    }
  }, function() {

  });
};

ngTrader.game.gameCtrl['$inject'] = ['$scope', 'commoditySrvc', 'citySrvc', 'accountSrvc', 'gameSrvc', 'tutorialSrvc', '$modal'];
ngTrader.game.controller('gameCtrl', ngTrader.game.gameCtrl);