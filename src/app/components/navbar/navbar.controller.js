'use strict';

angular.module('firePockets')
    .controller('NavbarCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {
        $scope.loggedIn = Auth.$getAuth();
        $scope.menuOpened = false;
        
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };

        $scope.$on('logoutEvent', function() {
            $scope.loggedIn = false;
        });

        $scope.$on('loginEvent', function() {
            $scope.loggedIn = true;
        });

        $scope.$on('$routeChangeSuccess', function() {
            $scope.menuOpened = false;
        });
    }]);