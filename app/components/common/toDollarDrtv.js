'use strict';
goog.provide('ngTrader.common.toDollarDrtv');

ngTrader.common.toDollarDrtv = function() {
  return {
    restrict: 'AE',
    scope: {
      cents: '='
    },
    template: '{{ cents/100 | currency }}'
  };
};

ngTrader.common.directive('toDollar', ngTrader.common.toDollarDrtv);