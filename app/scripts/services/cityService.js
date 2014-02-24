'use strict';

app.service('cityService', function cityService() {
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

  var City ={
    all: cities
  };

  return City;
});
