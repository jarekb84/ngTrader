define(function(require) {
  'use strict';
    
    require('angular-cookies'),
    require('angular-resource');
    require('angular-sanitize');
    require('angular-route');
    require('angular-cache');
    require('angular-bootstrap');
    require('angular-intro');
    require('ng-table');
  
  var angular = require('angular'),
    account = require('account/account'),
    city = require('city/city'),
    commodity = require('commodity/commodity'),
    common = require('common/common'),
    game = require('game/game'),
    highScore = require('highScore/highScore'),
    tutorial = require('tutorial/tutorial');

  return angular.module('ngTrader', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'jmdobry.angular-cache',
      'ui.bootstrap',
      'angular-intro',
      'ngTable',
      account.name,
      city.name,
      commodity.name,
      common.name,
      game.name,
      highScore.name,
      tutorial.name
    ])
    .config(['$routeProvider', '$angularCacheFactoryProvider',
      function($routeProvider, $angularCacheFactoryProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'components/game/game.tmpl.html',
            controller: 'gameCtrl'
          })
          .when('/game', {
            templateUrl: 'components/game/game.tmpl.html',
            controller: 'gameCtrl'
          })
          .when('/nav', {
            templateUrl: 'components/nav/nav.tmpl.html',
            controller: 'navCtrl'
          })
          .when('/highScores', {
            templateUrl: 'components/highScore/highScore.tmpl.html',
            controller: 'highScoreCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });

        $angularCacheFactoryProvider.setCacheDefaults({
          storageMode: 'localStorage'
        });
      }
    ]);
});