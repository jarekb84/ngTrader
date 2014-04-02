/* global app:true */
'use strict';

var app = angular.module('ngTraderApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'jmdobry.angular-cache'
]);

app.config(function($routeProvider, $angularCacheFactoryProvider) {
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
    .otherwise({
      redirectTo: '/'
    });

  $angularCacheFactoryProvider.setCacheDefaults({
    storageMode: 'localStorage'
  });
});
