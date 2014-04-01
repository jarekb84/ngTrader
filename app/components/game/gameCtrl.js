'use strict';

app.controller('gameCtrl', function($scope, commoditySrvc, citySrvc, accountSrvc) {
  commoditySrvc.updatePrices();
  $scope.commodities = commoditySrvc.all;
  $scope.account = accountSrvc;
  $scope.cities = citySrvc.all;

  $scope.goToCity = function (city) {
    commoditySrvc.updatePrices();
    accountSrvc.currentCity = city;
    if(accountSrvc.daysLeft > 0){
      accountSrvc.daysLeft -= 1;
    } else{
      accountSrvc.gameOver();
    }
    
  };

  $scope.buyItem = function (item, quantity) {
    commoditySrvc.buyCommodity(item, quantity);
    $scope.account = accountSrvc;
  };

  $scope.sellItem = function (item) {
    commoditySrvc.sellCommodity(item);
    $scope.account = accountSrvc;
  };

  $scope.setMarketHoverItem = function (item) {
    $scope.marketHoverItem = item.name;
  };
  
  $scope.resetMarketHoverItem = function () {
    $scope.marketHoverItem = '';
  };
});
