'use strict';


app.service('accountSrvc', function (citySrvc) {
  var Account = {
    daysLeft: 31,
    inventory: [],
    transactions: [],
    currentCash: 100,
    currentCity: '',
    highScores:[],
    gameOver: function(){
      this.highScores.push({score: this.currentCash});
      this.currentCash = 100;
      this.daysLeft = 31;
      this.inventory = [];
      this.transactions= [];
    }
  };

  if(!Account.currentCity){
    //set random city on game start
    Account.currentCity = citySrvc.all[Math.floor(Math.random() * citySrvc.all.length)];
  }

  return Account;
});
