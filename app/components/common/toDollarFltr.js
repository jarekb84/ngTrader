define(function() {
  'use strict';

  /* @ngInject */
  var toDollarFltr = function($filter) {
    return function(cents) {
      if (typeof cents === 'number') {
        var dollars = cents / 100;

        return $filter('currency')(dollars);
      } else {
        return cents;
      }

    };
  };

  return toDollarFltr;
});