'use strict';

angular.module('firePockets')
    .factory('PocketsService', ['$firebaseArray', '$firebaseObject', function ($firebaseArray, $firebaseObject) {
        var url = 'https://fire-pockets.firebaseio.com/pockets';

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
        
        factory.getTotal = function(callback) {
            var pockets = factory.getPockets();

            pockets.$loaded().then(function () {
                var total = 0;
                angular.forEach(pockets, function (pocket) {
                    if (pocket && pocket.balance) {
                        total += parseInt(pocket.balance);
                    }
                });
                callback(total);
            });
        };

        factory.addAction = function(action) {
            var pocket = factory.getPocket(action.pocket);
            pocket.$loaded().then(function () {
                if (action.direction === 'plus') {
                    pocket.balance += parseInt(action.amount);
                } else {
                    pocket.balance -= parseInt(action.amount);
                }
                pocket.$save();
            });
            
            /*pocket.$loaded().then(function (data) {
                console.log(pocket.balance);
            });*/
            
            /*action.timestamp = new Date().getTime();
            pocket.$add(action);*/
        };

        return factory;
    }]);