'use strict';

angular.module('firePockets')
    .controller('AddActionsCtrl', ['$scope', 'ActionsService', 'PocketsService', function ($scope, ActionsService, PocketsService) {
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
            $scope.pocketFormVisible = false;
            $scope.actionFormVisible = true;
        };

        $scope.showMovementForm = function() {
            delete $scope.movement.amount;
            $scope.actionFormVisible = false;
            $scope.pocketFormVisible = false;
            $scope.movementFormVisible = true;
        };

        $scope.showPocketForm = function() {
            delete $scope.movement.amount;
            $scope.actionFormVisible = false;
            $scope.movementFormVisible = false;
            $scope.pocketFormVisible = true;
        };

        $scope.hideForm = function() {
            $scope.actionFormVisible = false;
            $scope.movementFormVisible = false;
            $scope.pocketFormVisible = false;
        };

        $scope.addAction = function(action) {
            ActionsService.addAction(action).then(function() {
                $scope.$emit('updateTotal');
            });
            $scope.hideForm();
        };

        $scope.addMovement = function(movement) {
            ActionsService.addMovement(movement);
            $scope.hideForm();
        };

        $scope.addPocket = function(pocket) {
            pocket.timestamp = new Date().getTime();
            PocketsService.createPocket(pocket);
            $scope.hideForm();
        };

        $scope.createSnapshot = function() {
            PocketsService.createSnapshot();        
        };
    }]);