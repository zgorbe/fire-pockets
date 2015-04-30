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
            $scope.playground.messages.push(message);
            $scope.message = '';
            $scope.addFormVisible = false;
        };
}]);