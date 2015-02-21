define(function(require) {
  'use strict';

  var angular = require('angular'),
    ngCookies = require('angular-cookies'),
    ngResource = require('angular-resource'),
    ngSanitize = require('angular-sanitize'),
    ngRoute = require('angular-route'),
    cache = require('angular-cache'),
    bootstrap = require('angular-bootstrap'),
    angular_intro = require('angular-intro'),
    ngTable = require('ng-table'),

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