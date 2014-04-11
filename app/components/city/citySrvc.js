'use strict';
goog.provide('ngTrader.city.citySrvc');

ngTrader.city.citySrvc = function() {
  this.cities = [{
    name: 'Chicago'
  }, {
    name: 'New York'
  }, {
    name: 'Huston'
  }, {
    name: 'Denver'
  }, {
    name: 'Detroit'
  }, {
    name: 'Miami'
  }];
  
  this.currentCity = null;
};

ngTrader.city.citySrvc.prototype.getRandomCity = function() {
  this.currentCity = this.cities[Math.floor(Math.random() * this.cities.length)];
};

ngTrader.city.citySrvc.prototype.setCurrentCity = function(city) {
  this.currentCity = city;
};

ngTrader.city.service('citySrvc', ngTrader.city.citySrvc);