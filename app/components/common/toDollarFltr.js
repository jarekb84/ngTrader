'use strict';
goog.provide('ngTrader.common.toDollarFltr');

ngTrader.common.toDollarFltr = function($filter) {
  return function(cents) {
    if (typeof cents === 'number') {
      var dollars = cents / 100;

      return $filter('currency')(dollars);
    } else {
      return cents;
    }

  };
};

ngTrader.common.toDollarFltr['$inject'] = ['$filter'];

ngTrader.common.filter('toDollar', ngTrader.common.toDollarFltr);