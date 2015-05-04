'use strict';

angular.module('firePockets')
    .directive('playgroundMessage', function () {
        return {
            restrict: 'E',
            scope: {
                message: '=',
                deleteMessage: '&'
            },
            templateUrl: 'app/playground/message/message.html',
            controller: ['$scope', 'Auth', function($scope, Auth) {
                $scope.loggedIn = Auth.$getAuth();
            }]
        };
    });