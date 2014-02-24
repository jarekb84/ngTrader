'use strict';

app.controller('GameCtrl', function($scope, commodityService, cityService, accountService) {
  commodityService.updatePrices();
  $scope.commodities = commodityService.all;
  $scope.account = accountService;
  $scope.cities = cityService.all;

  $scope.goToCity = function (city) {
    commodityService.updatePrices();
    accountService.currentCity = city;
    if(accountService.daysLeft > 0){
      accountService.daysLeft -= 1;
    } else{
      accountService.gameOver();
    }
    
  };

  $scope.buyItem = function (item, quantity) {
    commodityService.buyCommodity(item, quantity);
    $scope.account = accountService;
  };

  $scope.sellItem = function (item) {
    commodityService.sellCommodity(item);
    $scope.account = accountService;
  };
});
