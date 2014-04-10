'use strict';
goog.provide('ngTrader.common.toDollarFltr');

ngTrader.common.toDollarFltr = function($filter) {
    return function(cents) {
      var dollars = cents / 100;

      return $filter('currency')(dollars);
    };
  };

ngTrader.common.toDollarFltr['$inject'] = ['$filter'];

ngTrader.common.filter('toDollar', ngTrader.common.toDollarFltr);
