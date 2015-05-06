'use strict';

angular.module('firePockets')
    .controller('HomeCtrl', ['$scope', 'PocketsService', function ($scope, PocketsService) {
        var updateTotal = function() {
            PocketsService.getTotal().then(function(total) {
                $scope.total = total;
            });
        };

        updateTotal();

        $scope.pockets = PocketsService.getPockets();    
        
        $scope.addPocket = function(pocket) {
            PocketsService.createPocket({
                'balance' : pocket.balance,
                'name' : pocket.name,
                'timestamp' : new Date().getTime()
            });
        };

        $scope.$on('updateTotal', function() { 
            updateTotal(); 
        });
    }]);