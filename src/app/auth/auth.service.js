'use strict';

angular.module('firePockets')
    .factory('Auth', ['$firebaseAuth', 'firebaseConfig', function ($firebaseAuth, firebaseConfig) {
        var ref = new Firebase(firebaseConfig.pocketsUrl);
        return $firebaseAuth(ref);
    }]);