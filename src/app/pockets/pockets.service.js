'use strict';

angular.module('firePockets')
    .factory('PocketsService', ['$firebaseArray', '$firebaseObject', '$q', function ($firebaseArray, $firebaseObject, $q) {
        var url = 'https://fire-pockets.firebaseio.com/pockets';

        var updateTimestamp = function(obj) {
            obj.timestamp = new Date().getTime();
        };

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
        
        factory.getPocketActions = function(pocketId) {
            return $firebaseArray(new Firebase(url + '/' + pocketId + '/actions')); 
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

        factory.addAction = function(action) {
            var pocket = factory.getPocket(action.pocket),
                deferred = $q.defer();
            
            pocket.$loaded().then(function () {
                if (action.direction === 'plus') {
                    pocket.balance += parseInt(action.amount);
                } else {
                    pocket.balance -= parseInt(action.amount);
                }
                updateTimestamp(pocket);
                pocket.$save();
                deferred.resolve();
            });
            
            var actions = factory.getPocketActions(action.pocket); 
                       
            updateTimestamp(action);
            actions.$add(action);

            return deferred.promise;
        };

        factory.addMovement = function(movement) {
            var actionMinus = {},
                actionPlus = {};
            
            actionMinus.pocket = movement.source;
            actionMinus.amount = movement.amount;
            actionMinus.direction = 'minus';
            actionPlus.pocket = movement.destination;
            actionPlus.amount = movement.amount;
            actionPlus.direction = 'plus';

            factory.addAction(actionMinus);
            factory.addAction(actionPlus);
        };

        return factory;
    }]);