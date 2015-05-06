'use strict';

angular.module('firePockets')
    .controller('HomeCtrl', ['$scope', 'PocketsService', function ($scope, PocketsService) {
        $scope.getPockets = function() {
            $scope.pockets = PocketsService.getPockets();    
        };

        $scope.updateTotal = function() {
            PocketsService.getTotal().then(function(total) {
                $scope.total = total;
            });
        };
        
        $scope.addPocket = function(pocket) {
            PocketsService.createPocket({
                'balance' : pocket.balance,
                'name' : pocket.name,
                'timestamp' : new Date().getTime()
            });
        };

        $scope.getPockets();
        $scope.updateTotal();

        $scope.$on('updateTotal', function() { 
            $scope.updateTotal(); 
        });
    }]);