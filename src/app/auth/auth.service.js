'use strict';

angular.module('firePockets')
    .factory('Auth', ['$firebaseAuth', function ($firebaseAuth) {
        var ref = new Firebase('https://fire-pockets.firebaseio.com/pockets');
        return $firebaseAuth(ref);
    }]);