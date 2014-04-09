goog.provide("ngTrader.account"),ngTrader.account=angular.module("ngTrader.account",[]),goog.provide("ngTrader.account.accountSrvc"),ngTrader.account.accountSrvc=function(){this.transactions=[],this.currentCash=1e4,this.netWorth=0},ngTrader.account.accountSrvc.prototype.reset=function(){this.currentCash=1e4,this.transactions=[],this.netWorth=1e4},ngTrader.account.service("accountSrvc",ngTrader.account.accountSrvc),goog.provide("ngTrader.city"),ngTrader.city=angular.module("ngTrader.city",[]),goog.provide("ngTrader.city.citySrvc"),ngTrader.city.citySrvc=function(){this.cities=[{name:"Chicago"},{name:"New York"},{name:"Los Angeles"},{name:"Denver"},{name:"Detroit"},{name:"Miami"}],this.currentCity=null},ngTrader.city.citySrvc.prototype.getRandomCity=function(){this.currentCity=this.cities[Math.floor(Math.random()*this.cities.length)]},ngTrader.city.citySrvc.prototype.setCurrentCity=function(a){this.currentCity=a},ngTrader.city.service("citySrvc",ngTrader.city.citySrvc),goog.provide("ngTrader.common"),ngTrader.common=angular.module("ngTrader.common",[]),goog.provide("ngTrader.commodity"),ngTrader.commodity=angular.module("ngTrader.commodity",[]),goog.provide("ngTrader.commodity.commoditySrvc"),ngTrader.commodity.commoditySrvc=function(a,b,c){this.accountSrvc_=a,this.filter_=c,this.citySrvc_=b,this.commodities=[{name:"Absinthe",basePrice:51100,purchasedItems:[]},{name:"Cognac",basePrice:25600,purchasedItems:[]},{name:"Gin",basePrice:3200,purchasedItems:[]},{name:"Mezcal",basePrice:12800,purchasedItems:[]},{name:"Rum",basePrice:1600,purchasedItems:[]},{name:"Tequila",basePrice:800,purchasedItems:[]},{name:"Vodka",basePrice:400,purchasedItems:[]},{name:"Whiskey",basePrice:6400,purchasedItems:[]},{name:"Beer",basePrice:200,purchasedItems:[]},{name:"Wine",basePrice:102400,purchasedItems:[]}],this.priceModification={normalRange:20,specialRange:20,citySpecialtyRange:10}},ngTrader.commodity.commoditySrvc.prototype.updateMaxQuantityPurchasable=function(){var a=this;this.commodities.forEach(function(b){b.maxQuantityPurchasable=Math.floor(a.accountSrvc_.currentCash/b.currentPrice)})},ngTrader.commodity.commoditySrvc.prototype.setCitySpecialty=function(){var a=this,b=a.commodities.slice();a.citySrvc_.cities.forEach(function(a){var c=Math.floor(Math.random()*b.length),d=b[c];a.specialtyItem=d,b.splice(c,1)})},ngTrader.commodity.commoditySrvc.prototype.resetAverageSellPrice=function(){this.commodities.forEach(function(a){a.averageSellPrice=0})},ngTrader.commodity.commoditySrvc.prototype.updatePrices=function(){var a,b,c=this.commodities[Math.floor(Math.random()*this.commodities.length)],d=this;this.accountSrvc_.netWorth=this.accountSrvc_.currentCash,this.commodities.forEach(function(e){e.priceHigh=!1,e.dailySpecial=!1,e.citySpecialty=!1,e.priceChanged=!0,a=d.priceModification.normalRange,e.name===c.name&&(a+=d.priceModification.specialRange,e.dailySpecial=!0),e.name===d.citySrvc_.currentCity.specialtyItem.name&&(a+=d.priceModification.citySpecialtyRange,e.citySpecialty=!0),b=Math.floor(2*Math.random()*a)-a,b>0&&(e.priceHigh=!0),0===b&&(e.priceChanged=!1),e.currentPrice=e.basePrice*(b/100)+e.basePrice,e.maxQuantityPurchasable=Math.floor(d.accountSrvc_.currentCash/e.currentPrice),e.purchasedItems.forEach(function(a){d.accountSrvc_.netWorth+=a.quantity*e.currentPrice})})},ngTrader.commodity.commoditySrvc.prototype.buyCommodity=function(a,b){var c=this.filter_("filter")(this.commodities,a.name,!0)[0],d=a.currentPrice*b;if(this.accountSrvc_.currentCash>=d){this.accountSrvc_.currentCash-=d;var e={name:a.name,purchasePrice:a.currentPrice,marketPrice:a.currentPrice,quantity:b};this.updateMaxQuantityPurchasable(),c.purchasedItems.push(e)}},ngTrader.commodity.commoditySrvc.prototype.sellCommodity=function(a){var b,c,d,e=this.filter_("filter")(this.commodities,a.name,!0)[0];e&&(b={itemName:a.name,profitEach:e.currentPrice-a.purchasePrice,profitTotal:(e.currentPrice-a.purchasePrice)*a.quantity,purchasePrice:a.purchasePrice,sellPrice:e.currentPrice,quantity:a.quantity},c=this.filter_("filter")(this.commodities,a.name,!0)[0],e.purchasedItems.splice(e.purchasedItems.indexOf(a),1),this.accountSrvc_.transactions.push(b),this.accountSrvc_.currentCash+=e.currentPrice*a.quantity,d=this.filter_("filter")(this.accountSrvc_.transactions,a.name,!0),e.averageSellPrice=d.reduce(function(a,b){return a+b.sellPrice},0)/d.length),this.updateMaxQuantityPurchasable()},ngTrader.commodity.service("commoditySrvc",ngTrader.commodity.commoditySrvc),goog.provide("ngTrader.common.toDollarDrtv"),ngTrader.common.toDollarDrtv=function(){return{restrict:"AE",scope:{cents:"="},template:"{{ cents/100 | currency }}"}},ngTrader.common.directive("toDollar",ngTrader.common.toDollarDrtv),goog.provide("ngTrader.common.toDollarFltr"),ngTrader.common.toDollarFltr=function(a){return function(b){var c=b/100;return a("currency")(c)}},ngTrader.common.filter("toDollar",ngTrader.common.toDollarFltr),goog.provide("ngTrader.common.autoActive"),ngTrader.common.autoActive=["$location",function(a){return{restrict:"A",scope:!1,link:function(b,c){function d(){var b=a.path();b&&angular.forEach(c.find("li"),function(a){var c=a.querySelector("a");c.href.match("#"+b+"(?=\\?|$)")?angular.element(a).addClass("active"):angular.element(a).removeClass("active")})}d(),b.$on("$locationChangeSuccess",d)}}}],ngTrader.common.directive("autoActive",ngTrader.common.autoActive),goog.provide("ngTrader.game"),ngTrader.game=angular.module("ngTrader.game",[]),goog.provide("ngTrader.game.gameSrvc"),ngTrader.game.gameSrvc=function(a,b,c){this.daysLeft=30,this.lastDay=!1,this.highScoreSrvc_=a,this.accountSrvc_=b,this.commoditySrvc_=c},ngTrader.game.gameSrvc.prototype.reduceDaysLeft=function(){this.daysLeft-=1,1===this.daysLeft&&(this.lastDay=!0)},ngTrader.game.gameSrvc.prototype.gameOver=function(){this.highScoreSrvc_.add({score:this.accountSrvc_.currentCash}),this.accountSrvc_.reset(),this.commoditySrvc_.resetAverageSellPrice(),this.commoditySrvc_.updateMaxQuantityPurchasable(),this.commoditySrvc_.setCitySpecialty(),this.daysLeft=30,this.lastDay=!1},ngTrader.game.service("gameSrvc",ngTrader.game.gameSrvc),goog.provide("ngTrader.game.gameCtrl"),ngTrader.game.gameCtrl=function(a,b,c,d,e){this.gameSrvc_=e,this.commoditySrvc_=a,this.citySrvc_=b,this.accountSrvc_=c,this.highScoreSrvc_=d,b.currentCity||(a.setCitySpecialty(),b.getRandomCity(),a.updatePrices())},ngTrader.game.gameCtrl.prototype.submitScore=function(){this.gameSrvc_.gameOver()},ngTrader.game.gameCtrl.prototype.goToCity=function(a){this.citySrvc_.setCurrentCity(a),this.commoditySrvc_.updatePrices(),this.gameSrvc_.reduceDaysLeft()},ngTrader.game.gameCtrl.prototype.buyItem=function(a,b){this.commoditySrvc_.buyCommodity(a,b)},ngTrader.game.gameCtrl.prototype.sellItem=function(a){this.commoditySrvc_.sellCommodity(a)},ngTrader.game.gameCtrl.prototype.setMarketHoverItem=function(a){this.marketHoverItem=a.name},ngTrader.game.gameCtrl.prototype.resetMarketHoverItem=function(){this.marketHoverItem=""},ngTrader.game.gameCtrl.prototype.isCurrentCity=function(a){return a.name===this.citySrvc_.currentCity.name},ngTrader.game.gameCtrl.prototype.getExpectedProfit=function(a){var b=0;return a.averageSellPrice&&(b=(a.averageSellPrice-a.currentPrice)*a.maxQuantityPurchasable/100),b},ngTrader.game.controller("gameCtrl",ngTrader.game.gameCtrl),goog.provide("ngTrader.highScore"),ngTrader.highScore=angular.module("ngTrader.highScore",[]),goog.provide("ngTrader.highScore.highScoreSrvc"),ngTrader.highScore.highScoreSrvc=function(a){this.cache=a("cache"),this.highScores=this.cache.get("highScores")||[]},ngTrader.highScore.highScoreSrvc.prototype.add=function(a){this.highScores.push(a),this.cache.put("highScores",this.highScores)},ngTrader.highScore.highScoreSrvc.prototype.reset=function(){this.cache.remove("highScores"),this.highScores=[]},ngTrader.highScore.service("highScoreSrvc",ngTrader.highScore.highScoreSrvc),goog.provide("ngTrader.highScore.highScoreCtrl"),ngTrader.highScore.highScoreCtrl=function(a){this.highScoreSrvc_=a},ngTrader.highScore.highScoreCtrl.prototype.resetHighScores=function(){this.highScores=this.highScoreSrvc_.reset()},ngTrader.highScore.controller("highScoreCtrl",ngTrader.highScore.highScoreCtrl),goog.require("ngTrader.account"),goog.require("ngTrader.city"),goog.require("ngTrader.commodity"),goog.require("ngTrader.common"),goog.require("ngTrader.game"),goog.require("ngTrader.highScore"),goog.provide("ngTrader.application.module"),ngTrader.application.module=angular.module("ngTrade2r",["ngCookies","ngResource","ngSanitize","ngRoute","jmdobry.angular-cache","ui.bootstrap",ngTrader.account.name,ngTrader.city.name,ngTrader.commodity.name,ngTrader.common.name,ngTrader.game.name,ngTrader.highScore.name]),ngTrader.application.module.config(function(a,b){a.when("/",{templateUrl:"components/game/game.tmpl.html",controller:"gameCtrl"}).when("/game",{templateUrl:"components/game/game.tmpl.html",controller:"gameCtrl"}).when("/nav",{templateUrl:"components/nav/nav.tmpl.html",controller:"navCtrl"}).when("/highScores",{templateUrl:"components/highScore/highScore.tmpl.html",controller:"highScoreCtrl"}).otherwise({redirectTo:"/"}),b.setCacheDefaults({storageMode:"localStorage"})});