'use strict';

app.controller('gameCtrl', function($scope, commoditySrvc, citySrvc, accountSrvc) {
  commoditySrvc.updatePrices();
  $scope.commodities = commoditySrvc.all;
  $scope.account = accountSrvc;
  $scope.cities = citySrvc.all;

  $scope.goToCity = function(city) {
    commoditySrvc.updatePrices();
    accountSrvc.currentCity = city;
    accountSrvc.daysLeft -= 1;
    
    if (accountSrvc.daysLeft === 1) {
      accountSrvc.showLastDayMessage = true;
    } else if (accountSrvc.daysLeft === 0){
      accountSrvc.gameOver();
    }
  };

  $scope.buyItem = function(item, quantity) {
    commoditySrvc.buyCommodity(item, quantity);
    $scope.account = accountSrvc;
  };

  $scope.sellItem = function(item) {
    commoditySrvc.sellCommodity(item);
    $scope.account = accountSrvc;
  };

  $scope.setMarketHoverItem = function(item) {
    $scope.marketHoverItem = item.name;
  };

  $scope.resetMarketHoverItem = function() {
    $scope.marketHoverItem = '';
  };

  $scope.resetHighScores = function () {
    accountSrvc.resetHighScores();
  };

  $scope.convertToDollars = function (amount) {
    return amount/100;
  };
});
