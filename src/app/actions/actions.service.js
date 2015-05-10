'use strict';

angular.module('firePockets')
    .factory('ActionsService', ['$firebaseArray', '$firebaseObject', '$q', 'firebaseConfig', 'PocketsService', function ($firebaseArray, $firebaseObject, $q, firebaseConfig, PocketsService) {
        var url = firebaseConfig.pocketsUrl;

        var updateTimestamp = function(obj) {
            obj.timestamp = new Date().getTime();
        };

        var factory = {};

        factory.getPocketActions = function(pocketId) {
            return $firebaseArray(new Firebase(url + '/' + pocketId + '/actions')); 
        };

        factory.getAllActions = function() {
            var pockets = PocketsService.getPockets(),
                actions = [],
                deferred = $q.defer();

            pockets.$loaded().then(function () {
                angular.forEach(pockets, function(pocket) {
                    angular.forEach(pocket.actions, function(action) {
                        action.pocketName = pocket.name;
                        actions.push(action);
                    });
                });
                deferred.resolve(actions);
            });
            return deferred.promise;
        };

        factory.addAction = function(action) {
            var pocket = PocketsService.getPocket(action.pocket),
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
            actionMinus.movement = true;

            actionPlus.pocket = movement.destination;
            actionPlus.amount = movement.amount;
            actionPlus.direction = 'plus';
            actionPlus.movement = true;

            factory.addAction(actionMinus);
            factory.addAction(actionPlus);
        };

        return factory;
    }]);