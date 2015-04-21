'use strict';

angular.module('firePockets', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
