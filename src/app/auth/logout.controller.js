'use strict';

angular.module('firePockets')
    .controller('LogoutCtrl', ['$scope', '$rootScope', '$location', 'Auth', function ($scope, $rootScope, $location, Auth) {
        $scope.logout = function() {
            //TODO: fix location change issue
            $location.path('/login');
            Auth.$unauth();
            $rootScope.$broadcast('logoutEvent');
        };
}]);