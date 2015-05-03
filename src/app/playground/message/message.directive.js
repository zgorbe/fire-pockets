'use strict';

angular.module('firePockets')
    .directive('playgroundMessage', function () {
        return {
            restrict: 'E',
            scope: {
                message: '='
            },
            templateUrl: 'app/playground/message/message.html',
            controller: ['$scope', 'Auth', function($scope, Auth) {
                $scope.loggedIn = Auth.$getAuth();
                // TODO: fix message deleting, 'playground' can't be accessed from this isolated scope
                $scope.deleteMessage = function(message) {
                    var index = $scope.playground.messages.indexOf(message);

                    if (index !== -1) {
                        $scope.playground.messages.splice(index, 1);
                    }
                };                
            }]
        };
    });