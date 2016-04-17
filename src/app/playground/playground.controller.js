'use strict';

angular.module('firePockets')
    .controller('PlaygroundCtrl', ['$scope', '$firebaseObject', 'firebaseConfig', '_', function ($scope, $firebaseObject, firebaseConfig, _) {
    	var obj = $firebaseObject(new Firebase(firebaseConfig.playgroundUrl));
    	obj.$bindTo($scope, 'playground');

        $scope.showAddForm = function() {
            $scope.addFormVisible = true;
        };

        $scope.hideAddForm = function() {
            $scope.addFormVisible = false;
        };        

        $scope.addMessage = function(message) {
            if (!$scope.playground.messages) {
                $scope.playground.messages = [];
            }
            $scope.playground.messages.unshift(message);
            $scope.message = '';
            $scope.addFormVisible = false;
        };

        $scope.deleteMessage = function(message) {
            _.pull($scope.playground.messages, message);
        };
    }]);