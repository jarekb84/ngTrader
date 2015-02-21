define(function() {
  'use strict';

  var citySrvc = function() {
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

  citySrvc.prototype.getRandomCity = function() {
    this.currentCity = this.cities[Math.floor(Math.random() * this.cities.length)];
  };

  citySrvc.prototype.setCurrentCity = function(city) {
    this.currentCity = city;
  };

  return citySrvc;
});