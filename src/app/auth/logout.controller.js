'use strict';

angular.module('firePockets')
    .controller('LogoutCtrl', ['$scope', '$rootScope', '$window', 'Auth', function ($scope, $rootScope, $window, Auth) {
        $scope.logout = function() {
            Auth.$unauth();
            $rootScope.$broadcast('logoutEvent');
            $window.location.href = '/';
        };
    }]);