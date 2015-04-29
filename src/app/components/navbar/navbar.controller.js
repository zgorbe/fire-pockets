'use strict';

angular.module('firePockets')
    .controller('NavbarCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {
        $scope.loggedIn = Auth.$getAuth();

        $scope.$on('logoutEvent', function() {
            $scope.loggedIn = false;
        });

        $scope.$on('loginEvent', function() {
            $scope.loggedIn = true;
        });

		$scope.isActive = function (viewLocation) { 
			return viewLocation === $location.path();
		};
    }]);
