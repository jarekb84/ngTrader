'use strict';
goog.provide('ngTrader.common.autoActive');

// courtesy of http://stackoverflow.com/a/22282124/276681
ngTrader.common.autoActive = ['$location',
  function($location) {
    return {
      restrict: 'A',
      scope: false,
      link: function(scope, element) {
        function setActive() {
          var path = $location.path();
          if (path) {
            angular.forEach(element.find('li'), function(li) {
              var anchor = li.querySelector('a');
              if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                angular.element(li).addClass('active');
              } else {
                angular.element(li).removeClass('active');
              }
            });
          }
        }
        
        setActive();

        scope.$on('$locationChangeSuccess', setActive);
      }
    };
  }
];


ngTrader.common.directive('autoActive', ngTrader.common.autoActive);