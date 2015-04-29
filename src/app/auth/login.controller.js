'use strict';

angular.module('firePockets')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'Auth', function ($scope, $rootScope, $location, Auth) {
        $scope.authenticate = function(user) {
            $scope.loading = true;
            $scope.loginFailure = '';
            Auth.$authWithPassword({
                email: user.email,
                password: user.password
            }).then(function(authData) {
                $location.path('/');
                $rootScope.$broadcast('loginEvent', authData.password.email);
            }).catch(function() {
                $scope.loading = false;
                $scope.loginFailure = 'Authentication failed';
                $scope.user = {};
            });
        };
}]);