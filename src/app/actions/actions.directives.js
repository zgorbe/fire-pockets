'use strict';

angular.module('firePockets')
    .directive('addActionForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/actions/add-action.html'
        };
    })
    .directive('addMovementForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/actions/add-movement.html'
        };
    });