'use strict';

angular.module('firePockets')
    .controller('MainCtrl', ['$scope', 'PocketsService', function ($scope, PocketsService) {
		$scope.action = {
			direction: 'plus'
		};
		
    	$scope.pockets = PocketsService.getPockets();
    	
    	PocketsService.getTotal(function(total) {
    		$scope.total = total;
    	});
		
		$scope.pockets.$loaded().then(function(data) {
			$scope.action.pocket = data[0].$id;
		});
    	
        $scope.addPocket = function(pocket) {
            PocketsService.createPocket({
                'balance' : pocket.balance,
                'name' : pocket.name,
                'timestamp' : new Date().getTime()
            });
        }
}]);
