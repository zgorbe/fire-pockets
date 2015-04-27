'use strict';

angular.module('firePockets', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/actions', {
        templateUrl: 'app/actions/view.html',
        controller: 'ViewActionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
