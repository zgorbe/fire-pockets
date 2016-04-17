'use strict';

angular.module('firePockets')
    .factory('PocketsService', ['$firebaseArray', '$firebaseObject', '$q', 'firebaseConfig', '_', function ($firebaseArray, $firebaseObject, $q, firebaseConfig, _) {
        var url = firebaseConfig.pocketsUrl,
            snapshotsUrl = firebaseConfig.snapshotsUrl;

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
                deferred.resolve(_.reduce(pockets, function(total, pocket) {
                    return total += pocket.balance || 0;
                }, 0));
            });

            return deferred.promise;
        };

        factory.createSnapshot = function() {
            factory.getTotal().then(function(total) {
                var snapshot = {
                    'time': new Date().getTime(),
                    'total': total
                };

                $firebaseArray(new Firebase(snapshotsUrl)).$add(snapshot);      
            });
            
        };

        return factory;
    }]);