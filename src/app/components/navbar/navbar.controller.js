'use strict';

angular.module('firePockets')
    .controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.loggedIn = Auth.$getAuth();

        $scope.$on('logoutEvent', function() {
            $scope.loggedIn = false;
        });

        $scope.$on('loginEvent', function() {
            $scope.loggedIn = true;
        });
    }]);
