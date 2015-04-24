'use strict';

angular.module('firePockets')
    .controller('MainCtrl', ['$scope', 'PocketsService', function ($scope, PocketsService) {
    	$scope.pockets = PocketsService.getPockets();
    	
    	PocketsService.getTotal(function(total) {
    		$scope.total = total;
    	});
		
        $scope.addPocket = function(pocket) {
            PocketsService.createPocket({
                'balance' : pocket.balance,
                'name' : pocket.name,
                'timestamp' : new Date().getTime()
            });
        };
}]);
