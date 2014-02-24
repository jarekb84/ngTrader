'use strict';


app.service('accountService', function (cityService) {
  var Account = {
    daysLeft: 5,
    inventory: [],
    currentCash: 100,
    currentCity: '',
    highScores:[],
    gameOver: function(){
      this.highScores.push({score: this.currentCash});
      this.currentCash = 100;
      this.daysLeft = 5;
      this.inventory = [];
    }
  };

  if(!Account.currentCity){
    //set random city on game start
    Account.currentCity = cityService.all[Math.floor(Math.random()*cityService.all.length)];
  }

  return Account;
});
