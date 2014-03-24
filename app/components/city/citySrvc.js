'use strict';

app.service('citySrvc', function citySrvc() {
  var cities = [{
    name: 'Chicago'
  }, {
    name: 'New York'
  }, {
    name: 'Los Angeles'
  }, {
    name: 'Denver'
  }, {
    name: 'Detroit'
  }, {
    name: 'Miami'
  }];

  var City = {
    all: cities
  };

  return City;
});
