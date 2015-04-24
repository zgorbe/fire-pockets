'use strict';

angular.module('firePockets')
    .controller('ActionsCtrl', ['$scope', 'PocketsService', function ($scope, PocketsService) {
        $scope.action = {
            direction: 'plus'
        };
        $scope.movement = { };
       
        $scope.pockets.$loaded().then(function(data) {
            $scope.action.pocket = data[0].$id;
            $scope.movement.source = data[0].$id;
            $scope.movement.destination = data[1].$id;
        });

        $scope.showActionForm = function() {
            delete $scope.action.amount;
            $scope.movementFormVisible = false;
            $scope.actionFormVisible = true;
        };

        $scope.showMovementForm = function() {
            delete $scope.movement.amount;
            $scope.actionFormVisible = false;
            $scope.movementFormVisible = true;
        };

        $scope.hideForm = function() {
            $scope.actionFormVisible = false;
            $scope.movementFormVisible = false;
        };

        $scope.addAction = function(action) {
            PocketsService.addAction(action);
            $scope.hideForm();
        };
}]);
