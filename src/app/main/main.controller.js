'use strict';

angular.module('firePockets')
    .controller('MainCtrl', ['$scope', 'PocketsService', function ($scope, PocketsService) {

        $scope.addPocket = function(pocket) {
            PocketsService.createPocket({
                'balance' : pocket.balance,
                'name' : pocket.name,
                'timestamp' : new Date().getTime()
            });
        }
}]);
