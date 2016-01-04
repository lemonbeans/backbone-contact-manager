'use strict';

/**
 * @ngdoc overview
 * @name contactManager
 * @description
 * # contactManager *
 * Main module of the application.
 */
var contactManager = angular.module('contactManager', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: 'views/partials/index.html',
      controller: 'AppCtrl'
    })
    .when('/info/:id', {
      templateUrl: 'views/partials/info.html',
      controller: 'InfoCtrl'
    })
    .when('/add', {
      templateUrl: 'views/partials/add.html',
      controller: 'AddCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'views/partials/edit.html',
      controller: 'EditCtrl'
    })
    .when('/remove/:id', {
      templateUrl: 'views/partials/remove.html',
      controller: 'RemoveCtrl'
    })
    .otherwise({
      redirectTo: '/index'
    });
});