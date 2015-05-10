'use strict';

angular.module('firePockets')
    .factory('PocketsService', ['$firebaseArray', '$firebaseObject', '$q', 'firebaseConfig', function ($firebaseArray, $firebaseObject, $q, firebaseConfig) {
        var url = firebaseConfig.pocketsUrl;

        var factory = {};

        factory.createPocket = function(pocket) {
            return $firebaseArray(new Firebase(url)).$add(pocket);
        };

        factory.getPockets = function() {
            return $firebaseArray(new Firebase(url)); 
        };

        factory.getPocket = function(id) {
            return $firebaseObject(new Firebase(url + '/' + id)); 
        };
        
        factory.getTotal = function() {
            var pockets = factory.getPockets(),
                deferred = $q.defer();

            pockets.$loaded().then(function () {
                var total = 0;
                angular.forEach(pockets, function (pocket) {
                    if (pocket && pocket.balance) {
                        total += parseInt(pocket.balance);
                    }
                });
                deferred.resolve(total);
            });

            return deferred.promise;
        };

        return factory;
    }]);