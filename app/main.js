/*jshint unused: vars */
require.config({
  baseUrl: '/components',
  paths: {
    angular: '../bower_components/angular/angular',
    'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    'angular-cache': '../bower_components/angular-cache/dist/angular-cache.min',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    'angular-intro': '../bower_components/angular-intro.js/src/angular-intro',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    intro: '../bower_components/intro.js/intro',
    jquery: '../bower_components/jquery/dist/jquery',
    'ng-table': '../bower_components/ng-table/ng-table',
    requirejs: '../bower_components/requirejs/require',
    affix: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix',
    alert: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert',
    button: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button',
    carousel: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel',
    collapse: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse',
    dropdown: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown',
    tab: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab',
    transition: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition',
    scrollspy: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy',
    modal: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal',
    tooltip: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip',
    popover: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover',
    'font-awesome': '../bower_components/font-awesome/fonts/*'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    },
    'angular-cache': [
      'angular'
    ],
    'angular-intro': [
      'angular'
    ],
    'angular-bootstrap': [
      'angular'
    ],
    'ng-table': [
      'angular'
    ]
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  '../app'
], function(angular, app) {
  'use strict';
    
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});