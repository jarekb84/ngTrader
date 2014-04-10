'use strict';
goog.require('ngTrader.account');
goog.require('ngTrader.city');
goog.require('ngTrader.commodity');
goog.require('ngTrader.common');
goog.require('ngTrader.game');
goog.require('ngTrader.highScore');

goog.provide('ngTrader.application.module');

ngTrader.application.module = angular.module('ngTrader.application.module', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'jmdobry.angular-cache',
  'ui.bootstrap',
  ngTrader.account.name,
  ngTrader.city.name,
  ngTrader.commodity.name,
  ngTrader.common.name,
  ngTrader.game.name,
  ngTrader.highScore.name
]);

ngTrader.application.module.config(['$routeProvider', '$angularCacheFactoryProvider',
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
  }]);
