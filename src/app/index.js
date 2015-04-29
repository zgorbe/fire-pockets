'use strict';

angular.module('firePockets', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'firebase'])
    .constant('firebaseConfig', {
        'pocketsUrl': 'https://fire-pockets.firebaseio.com/pockets',
        'playgroundUrl': 'https://fire-pockets.firebaseio.com/playground'
    })
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl',
            resolve: {
                'currentAuth': ['Auth', function(Auth) {
                    return Auth.$requireAuth();
                }]
            }
        })
        .when('/actions', {
            templateUrl: 'app/actions/view.html',
            controller: 'ViewActionsCtrl',
            resolve: {
                'currentAuth': ['Auth', function(Auth) {
                    return Auth.$requireAuth();
                }]
            }
        })
        .when('/login', {
            templateUrl: 'app/auth/login.html',
            controller: 'LoginCtrl'
        })
        .when('/playground', {
            templateUrl: 'app/playground/playground.html',
            controller: 'PlaygroundCtrl'
        })        
        .otherwise({
            redirectTo: '/'
        });
    }).run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
            if (error === 'AUTH_REQUIRED') {
                $location.path('/login');
            }
        });
    }]);