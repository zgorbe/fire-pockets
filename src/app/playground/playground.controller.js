'use strict';

angular.module('firePockets')
    .controller('PlaygroundCtrl', ['$scope', '$firebaseObject', 'firebaseConfig', function ($scope, $firebaseObject, firebaseConfig) {
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
            var index = $scope.playground.messages.indexOf(message);

            if (index !== -1) {
                $scope.playground.messages.splice(index, 1);
            }
        };
    }]);