define(function() {
  'use strict';

  // courtesy of http://stackoverflow.com/a/22282124/276681
  /* @ngInject */
  var autoActive = function($location) {
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
  };

  return autoActive;
});