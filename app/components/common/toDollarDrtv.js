define(function() {
  'use strict';

  var toDollarDrtv = function() {
    return {
      restrict: 'AE',
      scope: {
        cents: '='
      },
      template: '{{ cents/100 | currency }}'
    };
  };

  return toDollarDrtv;
});