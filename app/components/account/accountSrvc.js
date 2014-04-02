'use strict';


app.service('accountSrvc', function (citySrvc, $angularCacheFactory) {
  var cache = $angularCacheFactory('cache');

  var Account = {
    daysLeft: 30,
    inventory: [],
    transactions: [],
    currentCash: 10000, //in cents
    netWorth: 0,
    currentCity: '',
    highScores:[],
    showLastDayMessage: false,
    gameOver: function(){
      this.highScores.push({score: this.currentCash});
      cache.put('highScores', this.highScores);
      this.currentCash = 10000;
      this.daysLeft = 30;
      this.inventory = [];
      this.transactions = [];
      this.showLastDayMessage = false;
    },
    resetHighScores: function () {
      cache.remove('highScores');
      this.highScores = [];
    }
  };
  
  //this should ony run on app start
  Account.highScores = cache.get('highScores') || [];

  if(!Account.currentCity){
    //set random city on game start
    Account.currentCity = citySrvc.all[Math.floor(Math.random() * citySrvc.all.length)];
  }

  return Account;
});
