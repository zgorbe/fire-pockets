'use strict';

angular.module('firePockets')
    .controller('ViewActionsCtrl', ['$scope', 'ActionsService', function ($scope, ActionsService) {
        ActionsService.getAllActions().then(function(actions) {
            $scope.actions = actions;
        });

        $scope.predicate = 'timestamp';
        $scope.reverse = true;
    }]);