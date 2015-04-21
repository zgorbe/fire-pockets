'use strict';

angular.module('firePockets')
    .factory('PocketsService', ['$firebaseArray', function ($firebaseArray) {
        var url = 'https://fire-pockets.firebaseio.com/pockets';

        var factory = {};

        factory.createPocket = function(pocket) {
            console.log(pocket);
            return $firebaseArray(new Firebase(url)).$add(pocket);
        };

        return factory;
    }]);