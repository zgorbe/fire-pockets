'use strict';

angular.module('firePockets')
    .factory('PocketsService', ['$firebaseArray', function ($firebaseArray) {
        var url = 'https://fire-pockets.firebaseio.com/pockets';

        var factory = {};

        factory.createPocket = function(pocket) {
            return $firebaseArray(new Firebase(url)).$add(pocket);
        };

        factory.getPockets = function() {
        	return $firebaseArray(new Firebase(url)); 
        };
        factory.getTotal = function(callback) {
        	var pockets = factory.getPockets();

        	pockets.$loaded().then(function (data) {
		        var total = 0;
		        angular.forEach(pockets, function (pocket) {
		            if (pocket && pocket.balance) {
		                total += parseInt(pocket.balance);
		            }
	        	});
	        	callback(total);
			});
        };
        return factory;
    }]);