/* global app:true */
'use strict';

var app = angular.module('ngTraderApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/game.html',
      controller: 'GameCtrl'
    })
    .when('/game', {
      templateUrl: 'views/game.html',
      controller: 'GameCtrl'
    })
    .when('/nav', {
      templateUrl: 'views/nav.html',
      controller: 'NavCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
